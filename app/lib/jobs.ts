import { sanityFetch } from "./sanity";

/** A live role on /hiring, as edited in Sanity Studio (`jobOpening`). */
export type JobOpening = {
  id: string;
  role: string;
  location: string;
  experience?: string;
  /** Falls back to the general hiring form (CTA.CAREERS) when unset. */
  applyUrl?: string;
};

// `order` is optional in the schema; GROQ sorts nulls last, so unordered
// roles follow the ordered ones, oldest first.
const JOB_OPENINGS_QUERY = `*[_type == "jobOpening" && defined(role) && defined(location)]
  | order(order asc, _createdAt asc) {
    "id": _id,
    role,
    location,
    experience,
    applyUrl
  }`;

type RawJobOpening = {
  id: string;
  role: string;
  location: string;
  experience: string | null;
  applyUrl: string | null;
};

export async function getJobOpenings(
  options: { signal?: AbortSignal } = {},
): Promise<JobOpening[]> {
  const raw = await sanityFetch<RawJobOpening[]>(JOB_OPENINGS_QUERY, {}, options);
  return raw.map(({ experience, applyUrl, ...job }) => ({
    ...job,
    experience: experience ?? undefined,
    applyUrl: applyUrl ?? undefined,
  }));
}
