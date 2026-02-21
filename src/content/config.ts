import { defineCollection, z } from "astro:content";

const lab = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    start: z.string(), // YYYY-MM-DD
    end: z.string(),   // YYYY-MM-DD
    status: z.enum(["planned", "ongoing", "completed", "integrated", "abandoned"]),
    focus: z.array(z.string()).default([]),
    summary: z.string().default(""),
    artifacts: z.object({
      notes: z.array(z.string()).default([]),
      projects: z.array(z.string()).default([]),
    }).default({ notes: [], projects: [] }),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["Mathematics", "Machine Learning", "Computing","Image and Signal Processing","Programming"]),
    tags: z.array(z.string()).default([]),
    level: z.enum(["foundation", "intermediate", "advanced"]).default("foundation"),
    updated: z.string(), // YYYY-MM-DD
    revision: z.array(z.object({
      date: z.string(),
      note: z.string(),
    })).default([]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["planned", "ongoing", "completed", "maintenance"]).default("ongoing"),
    repo: z.string().url().optional(),
    started: z.string(), // YYYY-MM-DD
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
});

export const collections = { lab, notes, projects, research };
