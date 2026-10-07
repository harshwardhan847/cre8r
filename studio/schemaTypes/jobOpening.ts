import { defineField, defineType } from "sanity";

/**
 * A live role on cre8r.ai/hiring. Publish a document to list the role;
 * unpublish or delete it to take the role down. With no published openings
 * the page shows the general "we're always hiring" card instead.
 */
export const jobOpening = defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Gurugram",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "string",
      description: 'Optional, e.g. "2–4 years". Hidden on the page when empty.',
    }),
    defineField({
      name: "applyUrl",
      title: "Apply URL",
      type: "url",
      description:
        "Optional. Where the role's \"Apply Now\" button goes. Leave empty to use the general hiring form.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Optional. Lower numbers are listed first; roles without one come last, oldest first.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "role", location: "location", experience: "experience" },
    prepare({ title, location, experience }) {
      return {
        title,
        subtitle: [location, experience].filter(Boolean).join(" · "),
      };
    },
  },
});
