import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { canonicalizeTags } from '../utils/taxonomy';

export const GET: APIRoute = async () => {
  const caseStudies = (
    await getCollection('case-studies', ({ data }) => data.status === 'published')
  )
    .sort((a, b) => b.data.studyDate.valueOf() - a.data.studyDate.valueOf())
    .map((study) => ({
      slug: study.slug,
      title: study.data.title,
      bucket: study.data.bucket,
      corePattern: study.data.corePattern,
      studyDate: study.data.studyDate,
      summary: study.data.summary ?? '',
      claim: study.data.claim,
      evidenceLevel: study.data.evidenceLevel,
      eventWindowStart: study.data.eventWindowStart ?? null,
      eventWindowEnd: study.data.eventWindowEnd ?? null,
      tags: canonicalizeTags(study.data.tags ?? []),
      policyDomain: study.data.policyDomain ?? [],
    }));

  return new globalThis.Response(JSON.stringify(caseStudies), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
