/**
 * Downloads a poster frame for every video in CAMPAIGN_VIDEOS and writes a
 * self-hosted, correctly-sized WebP to public/video_thumbs/<id>.webp.
 *
 * Why self-host instead of pointing <img> at i.ytimg.com:
 *  - i.ytimg.com costs an extra DNS + TLS handshake on the critical path for
 *    a hero element, and the sizes YouTube serves are all wrong for a 192px
 *    card — hqdefault is a pillarboxed 480x360 (only ~202px of real vertical
 *    content, blurry on retina) and maxresdefault is ~100KB each.
 *  - These are 1080x1920 Shorts, so oar2.jpg is the only variant with the
 *    true vertical frame. Resized to 384x683 WebP it lands around 25-35KB,
 *    which is sharp at 2x on the 192px desktop card and 3x on the 128px
 *    mobile card.
 *
 * Not part of `npm run build` — the thumbnails are committed assets. Re-run it
 * by hand (needs ImageMagick: `brew install imagemagick`) after editing
 * CAMPAIGN_VIDEOS:
 *
 *   node scripts/fetch-video-thumbnails.mjs          # only missing thumbnails
 *   node scripts/fetch-video-thumbnails.mjs --force  # re-fetch everything
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const CONSTANTS_FILE = "app/constants.ts";
const OUT_DIR = "public/video_thumbs";

/** Matches the card box (w-48 = 192px) at 2x, and the mobile card (w-32) at 3x. */
const WIDTH = 384;
const HEIGHT = 683;
const QUALITY = 72;

/** Ordered by preference: only `oar` variants carry the original 9:16 frame. */
const VARIANTS = ["oar2", "oardefault", "maxresdefault", "hqdefault"];

const force = process.argv.includes("--force");

/**
 * Pulls the YouTube ids out of the CAMPAIGN_VIDEOS literal in constants.ts.
 * Reading the file beats importing it — constants.ts is TypeScript and this
 * script runs under plain node.
 */
function readVideoIds() {
  const source = readFileSync(CONSTANTS_FILE, "utf8");
  const block = source.match(/CAMPAIGN_VIDEOS\s*=\s*\[([\s\S]*?)\n\];/);
  if (!block) throw new Error(`Could not find CAMPAIGN_VIDEOS in ${CONSTANTS_FILE}`);

  const ids = [...block[1].matchAll(/youtube\.com\/embed\/([\w-]+)/g)].map((m) => m[1]);
  if (ids.length === 0) throw new Error("CAMPAIGN_VIDEOS contained no embed URLs");
  return [...new Set(ids)];
}

async function downloadPoster(id, scratchPath) {
  for (const variant of VARIANTS) {
    const url = `https://i.ytimg.com/vi/${id}/${variant}.jpg`;
    const response = await fetch(url);
    if (!response.ok) continue;

    const bytes = Buffer.from(await response.arrayBuffer());
    // YouTube answers 200 with a 120x90 grey placeholder for missing variants.
    if (bytes.byteLength < 5_000) continue;

    writeFileSync(scratchPath, bytes);
    return variant;
  }
  return null;
}

async function main() {
  const ids = readVideoIds();
  mkdirSync(OUT_DIR, { recursive: true });

  const scratch = join(tmpdir(), `yt-poster-${process.pid}.jpg`);
  let written = 0;
  let skipped = 0;

  for (const id of ids) {
    const outPath = join(OUT_DIR, `${id}.webp`);
    if (!force && existsSync(outPath)) {
      skipped += 1;
      continue;
    }

    const variant = await downloadPoster(id, scratch);
    if (!variant) {
      console.error(`  ✗ ${id} — no usable thumbnail on i.ytimg.com`);
      continue;
    }

    // `^` scales to *cover* the box, then extent centre-crops to it, so a
    // pillarboxed fallback loses its bars instead of being squashed.
    execFileSync("magick", [
      scratch,
      "-resize", `${WIDTH}x${HEIGHT}^`,
      "-gravity", "center",
      "-extent", `${WIDTH}x${HEIGHT}`,
      "-strip",
      "-quality", String(QUALITY),
      outPath,
    ]);

    const kb = Math.round(readFileSync(outPath).byteLength / 1024);
    console.log(`  ✓ ${id}.webp  ${kb}KB  (from ${variant})`);
    written += 1;
  }

  rmSync(scratch, { force: true });
  console.log(`\n${written} written, ${skipped} already present → ${OUT_DIR}/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
