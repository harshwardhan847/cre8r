import { defineCliConfig } from "sanity/cli";

// Keep this in sync with VITE_SANITY_PROJECT_ID / VITE_SANITY_DATASET in the
// main app's .env — they must point at the same Sanity project and dataset.
// Override with SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET env vars if
// you ever point this studio at a different project.
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "qg8bn70f",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
});
