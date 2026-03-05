import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    bucket: z.enum(['success', 'failure', 'turnaround', 'warning', 'mixed', 'stress-test']),
    corePattern: z.string().min(1),
    studyDate: z.coerce.date(),
    eventWindowStart: z.coerce.date().optional(),
    eventWindowEnd: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    summary: z.string().min(1).optional(),
    claim: z.string().min(1),
    evidenceLevel: z.enum(['high', 'medium', 'low']).default('medium'),
    policyDomain: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    receiptTags: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          title: z.string().min(1),
          url: z.string().url(),
          publisher: z.string().optional(),
          publishedDate: z.coerce.date().optional(),
        })
      )
      .default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.string().min(1),
    topics: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    receiptTags: z.array(z.string()).default([]),
    sourceChannel: z.enum(['facebook', 'linkedin', 'economyforeveryone', 'mixed']).default('mixed'),
    legacyPostRef: z.string().optional(),
    triage: z
      .enum([
        'archive-only',
        'facebook-only',
        'promote-to-canonical',
        'promote-to-canonical+linkedin',
      ])
      .optional(),
    oneSmallAction: z.string().optional(),
    audience: z.array(z.string()).default([]),
    receipts: z
      .array(
        z.object({
          title: z.string().min(1),
          url: z.string().url(),
          publisher: z.string().optional(),
          publishedDate: z.coerce.date().optional(),
        })
      )
      .default([]),
  }),
});

const receipts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    claim: z.string().min(1),
    typeId: z.enum([
      'primary-documents',
      'official-data',
      'independent-analysis',
      'direct-observation',
    ]),
    status: z.enum(['draft', 'published']).default('draft'),
    linkedCaseSlugs: z.array(z.string()).default([]),
    linkedPostSlugs: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          title: z.string().min(1),
          url: z.string().url(),
        })
      )
      .default([]),
  }),
});

const playbooks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    last_updated: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    lane: z.string().min(1),
    is_root: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});
const levers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    last_updated: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    docType: z.enum(['Lever', 'Compass', 'Framework', 'Bridge']),
    families: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  blog,
  receipts,
  playbooks,
  levers,
};
