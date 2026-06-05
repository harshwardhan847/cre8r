import React from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const caseStudies = [
  {
    id: 1,
    brand: "HealthCorp",
    metric: "300%",
    metricLabel: "Increase in Lead Gen",
    description: "How HealthCorp utilized our discovery and affiliate modules to scale customer acquisition.",
    image: "https://example.com/case-study-1.jpg"
  },
  {
    id: 2,
    brand: "FashionNova India",
    metric: "4.5M",
    metricLabel: "Reach within 2 weeks",
    description: "Executing a massive campaign with 200+ micro-influencers seamlessly.",
    image: "https://example.com/case-study-2.jpg"
  }
];

const CaseStudiesPreview = () => {
  return (
    <div className="w-full py-24 bg-background flex flex-col items-center justify-center">
      <div className="container px-4 md:px-8 mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-foreground">Proven Results</h2>
            <p className="text-muted-foreground mt-2 text-lg">See how brands are scaling acquisition and ROI with us.</p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] w-full bg-muted overflow-hidden">
                 <div className="w-full h-full bg-neutral-200 animate-pulse flex items-center justify-center text-muted-foreground">
                    [Case Study Image Placeholder]
                 </div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{study.brand}</h3>
                <p className="text-muted-foreground">{study.description}</p>
                <div className="mt-4 flex flex-col">
                  <span className="text-4xl font-bold text-primary">{study.metric}</span>
                  <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{study.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPreview;
