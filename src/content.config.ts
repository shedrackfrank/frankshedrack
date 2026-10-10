import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Projects collection: web + security case studies.
// Category-specific fields are optional so each case study renders only the
// sections it actually has (see docs/decisions.md).
const findingSchema = z.object({
  id: z.string(),
  title: z.string(),
  severity: z.enum(["low", "medium", "high", "critical", "info"]),
  status: z.string(),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.mdx" }),
  schema: ({ image }) => z.object({
    // Shared
    title: z.string(),
    category: z.enum(["web", "security"]),
    shortDescription: z.string(),
    longDescription: z.string(),
    featuredImage: image().optional(),
    featuredImageAlt: z.string().optional(),
    gallery: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    technologies: z.array(z.string()),
    role: z.string(),
    status: z.string(),
    github: z.string().optional(),
    liveDemo: z.string().optional(),
    order: z.number(),
    // Web-only (optional)
    problem: z.string().optional(),
    approach: z.string().optional(),
    architecture: z.string().optional(),
    challenges: z.string().optional(),
    securityConsiderations: z.string().optional(),
    outcome: z.string().optional(),
    // Security-only (optional)
    target: z.string().optional(),
    scope: z.string().optional(),
    methodology: z.string().optional(),
    findings: z.array(findingSchema).optional(),
    evidence: z.string().optional(),
    impact: z.string().optional(),
    recommendations: z.array(z.string()).optional(),
    // Shared optional
    lessonsLearned: z.string().optional(),
  }),
});

export const collections = { projects };
