import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface GrainientProps {
  timeSpeed?: number;
  colorBalance?: number;
  warpStrength?: number;
  warpFrequency?: number;
  warpSpeed?: number;
  warpAmplitude?: number;
  blendAngle?: number;
  blendSoftness?: number;
  rotationAmount?: number;
  noiseScale?: number;
  grainAmount?: number;
  grainScale?: number;
  grainAnimated?: boolean;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  centerX?: number;
  centerY?: number;
  zoom?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 
float hash21(vec2 p){
  p=fract(p*vec2(123.34,345.45));
  p+=dot(p,p+34.345);
  return fract(p.x*p.y);
}
float noise(vec2 p){
  vec2 i=floor(p);
  vec2 f=fract(p);
  vec2 u=f*f*(3.0-2.0*f);
  return mix(
    mix(hash21(i+vec2(0.0,0.0)),hash21(i+vec2(1.0,0.0)),u.x),
    mix(hash21(i+vec2(0.0,1.0)),hash21(i+vec2(1.0,1.0)),u.x),
    u.y
  );
}
float fbm(vec2 p){
  float value=0.0;
  float amplitude=0.5;
  for(int i=0;i<5;i++){
    value+=amplitude*noise(p);
    p=Rot(0.35)*p*2.02+vec2(7.13,3.71);
    amplitude*=0.55;
  }
  return value;
}
void mainImage(out vec4 o, vec2 C){
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/max(iResolution.y,1.0);
  float t=iTime*max(uTimeSpeed,0.001);

  vec2 origin=vec2(0.06+uCenterOffset.x,0.68+uCenterOffset.y);
  vec2 p=uv-origin;
  p.x*=ratio;
  p/=max(uZoom,0.001);

  float angle=radians(-18.0+uBlendAngle);
  vec2 dir=normalize(vec2(cos(angle),sin(angle)));
  vec2 side=vec2(-dir.y,dir.x);

  float flowSpeed=0.12+uWarpSpeed*0.025;
  vec2 flowUv=p*(1.6+uNoiseScale*0.35);
  float primaryFlow=fbm(flowUv+dir*t*flowSpeed);
  float secondaryFlow=fbm(flowUv*2.35-side*t*(flowSpeed*0.55));
  float detail=noise(flowUv*7.0+vec2(t*0.03,-t*0.02));

  float along=dot(p,dir);
  float across=dot(p,side);
  float beamLength=1.12+uWarpStrength*0.18;
  float beamT=clamp(along/max(beamLength,0.001),0.0,1.0);

  float widthStart=0.06+uBlendSoftness*0.10;
  float widthEnd=0.14+uWarpAmplitude*0.0024;
  float baseWidth=mix(widthStart,widthEnd,pow(beamT,0.65));
  float widthJitter=mix(0.90,1.12,primaryFlow);
  float width=baseWidth*widthJitter;

  float beamShape=exp(-pow(abs(across)/max(width,0.001),2.2));
  float centerline=exp(-pow(abs(across)/max(width*0.22,0.001),2.0));
  float streaks=S(0.28,0.92,primaryFlow*0.72+secondaryFlow*0.38+detail*0.24);
  float head=S(-0.08,0.02,along);
  float tail=1.0-S(beamLength*0.88,beamLength*1.18,along);

  float sourceBurst=exp(-length(vec2(along*1.9,across*3.6))*2.8);
  float sourceHalo=exp(-length(vec2(along*1.25,across*1.4))*2.1);
  float plume=beamShape*head*tail;
  plume*=mix(0.85,1.2,streaks);
  plume*=0.86+secondaryFlow*0.32;

  float hazeWidth=0.22+uWarpAmplitude*0.0020;
  float haze=exp(-pow(abs(across)/max(hazeWidth,0.001),0.85))*head*(1.0-S(beamLength*0.65,beamLength*1.05,along));
  haze*=0.18+primaryFlow*0.20;

  float distFade=mix(1.0,0.05,pow(beamT,1.2));
  float alpha=(plume*0.95+haze*0.16+sourceBurst*0.9)*distFade+sourceHalo*0.38*(1.0-beamT*0.85);
  alpha=clamp(alpha,0.0,1.0);

  vec3 warmCore=uColor2;
  vec3 hotCore=mix(vec3(1.0,0.96,0.87),warmCore,0.42-uColorBalance*0.12);
  vec3 coolEdge=mix(uColor1,uColor3,clamp(0.5+across*0.6,0.0,1.0));
  vec3 hazeColor=mix(uColor3,uColor1,0.55+secondaryFlow*0.2);

  vec3 col=mix(hazeColor,coolEdge,clamp(plume+haze,0.0,1.0));
  col=mix(col,warmCore,clamp(beamShape*0.75+centerline*0.35,0.0,1.0));
  col=mix(col,hotCore,clamp(centerline*0.95+sourceBurst*0.7,0.0,1.0));
  col+=uColor1*(haze*0.18);
  col+=vec3(1.0,0.78,0.56)*sourceBurst*0.18;

  vec2 grainUv=uv*iResolution.xy/max(uGrainScale*0.85,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(t*12.0,-t*9.0);} 
  float grain=hash21(floor(grainUv));
  col+=(grain-0.5)*(uGrainAmount*0.22)*alpha;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);

  o=vec4(col,alpha);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;

const Grainient: React.FC<GrainientProps> = ({
  timeSpeed = 0.12,
  colorBalance = 0.0,
  warpStrength = 1.35,
  warpFrequency = 5.0,
  warpSpeed = 1.2,
  warpAmplitude = 62.0,
  blendAngle = 0.0,
  blendSoftness = 0.2,
  rotationAmount = 500.0,
  noiseScale = 2.8,
  grainAmount = 0.18,
  grainScale = 1.7,
  grainAnimated = true,
  contrast = 1.2,
  gamma = 1.0,
  saturation = 1.05,
  centerX = 0.0,
  centerY = 0.0,
  zoom = 0.95,
  color1 = "#D5A4FF",
  color2 = "#FF7A3D",
  color3 = "#FBE7D2",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    const container = containerRef.current;
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uTimeSpeed: { value: timeSpeed },
        uColorBalance: { value: colorBalance },
        uWarpStrength: { value: warpStrength },
        uWarpFrequency: { value: warpFrequency },
        uWarpSpeed: { value: warpSpeed },
        uWarpAmplitude: { value: warpAmplitude },
        uBlendAngle: { value: blendAngle },
        uBlendSoftness: { value: blendSoftness },
        uRotationAmount: { value: rotationAmount },
        uNoiseScale: { value: noiseScale },
        uGrainAmount: { value: grainAmount },
        uGrainScale: { value: grainScale },
        uGrainAnimated: { value: grainAnimated ? 1.0 : 0.0 },
        uContrast: { value: contrast },
        uGamma: { value: gamma },
        uSaturation: { value: saturation },
        uCenterOffset: { value: new Float32Array([centerX, centerY]) },
        uZoom: { value: zoom },
        uColor1: { value: new Float32Array(hexToRgb(color1)) },
        uColor2: { value: new Float32Array(hexToRgb(color2)) },
        uColor3: { value: new Float32Array(hexToRgb(color3)) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = (program.uniforms.iResolution as { value: Float32Array })
        .value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
      renderer.render({ scene: mesh });
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      (program.uniforms.iTime as { value: number }).value = (t - t0) * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      try {
        container.removeChild(canvas);
      } catch {
        // Ignore
      }
    };
  }, [
    timeSpeed,
    colorBalance,
    warpStrength,
    warpFrequency,
    warpSpeed,
    warpAmplitude,
    blendAngle,
    blendSoftness,
    rotationAmount,
    noiseScale,
    grainAmount,
    grainScale,
    grainAnimated,
    contrast,
    gamma,
    saturation,
    centerX,
    centerY,
    zoom,
    color1,
    color2,
    color3,
  ]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative h-full w-full overflow-hidden ${className}`.trim()}
    />
  );
};

export default Grainient;
