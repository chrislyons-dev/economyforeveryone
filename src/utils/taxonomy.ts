const canonicalTagAliases = new Map([
  ['actions', 'action'],
  ['administration', 'admin-drag'],
  ['administrative-burden', 'admin-drag'],
  ['dialogue', 'communication'],
  ['measurement', 'metrics'],
  ['price-opacity', 'pricing'],
  ['price-spikes', 'pricing'],
  ['price-transparency', 'pricing'],
  ['prices', 'pricing'],
  ['scoreboard', 'metrics'],
  ['templates', 'template'],
]);

const canonicalBlogCategoryAliases = new Map([
  ['big costs', 'big-costs'],
  ['core model', 'core-model'],
  ['field notes', 'field-notes'],
]);

const canonicalBlogTopicAliases = new Map([
  ['administrative-burden', 'admin-drag'],
  ['big costs', 'big-costs'],
  ['community resilience', 'community-resilience'],
  ['family economics', 'family-economics'],
  ['information environment', 'information-environment'],
  ['middle out growth', 'middle-out-growth'],
  ['monthly squeeze', 'monthly-squeeze'],
  ['research methods', 'research-methods'],
  ['rights and dignity', 'rights-and-dignity'],
  ['series index', 'series-index'],
  ['series summary', 'series-summary'],
  ['student debt', 'student-debt'],
  ['time horizons', 'time-horizons'],
]);

const canonicalTagLabels = new Map([
  ['accountability', 'Accountability'],
  ['action', 'Action'],
  ['adapter', 'Adapter'],
  ['admin-drag', 'Admin Drag'],
  ['agency', 'Agency'],
  ['ai', 'AI'],
  ['big-costs', 'Big Costs'],
  ['boundaries', 'Boundaries'],
  ['bridge-language', 'Bridge Language'],
  ['channels', 'Channels'],
  ['checklist', 'Checklist'],
  ['childcare', 'Childcare'],
  ['civic-action', 'Civic Action'],
  ['clinicians', 'Clinicians'],
  ['communication', 'Communication'],
  ['core', 'Core'],
  ['deephaven', 'Deephaven'],
  ['development', 'Development'],
  ['editing', 'Editing'],
  ['education', 'Education'],
  ['emotional-regulation', 'Emotional Regulation'],
  ['energy', 'Energy'],
  ['evidence', 'Evidence'],
  ['family', 'Family'],
  ['fear', 'Fear'],
  ['feedback', 'Feedback'],
  ['field-notes', 'Field Notes'],
  ['framing', 'Framing'],
  ['guardrails', 'Guardrails'],
  ['healthcare', 'Healthcare'],
  ['hennepin-county', 'Hennepin County'],
  ['housing', 'Housing'],
  ['implementation', 'Implementation'],
  ['index', 'Index'],
  ['interventions', 'Interventions'],
  ['lanes', 'Lanes'],
  ['leadership', 'Leadership'],
  ['long-game', 'Long Game'],
  ['mapping', 'Mapping'],
  ['metrics', 'Metrics'],
  ['minneapolis', 'Minneapolis'],
  ['module', 'Module'],
  ['monthly-squeeze', 'Monthly Squeeze'],
  ['one-ask', 'One Ask'],
  ['online-behavior', 'Online Behavior'],
  ['operations', 'Operations'],
  ['outcomes', 'Outcomes'],
  ['place', 'Place'],
  ['playbook', 'Playbook'],
  ['pricing', 'Pricing'],
  ['prioritization', 'Prioritization'],
  ['quickstart', 'Quickstart'],
  ['receipts', 'Receipts'],
  ['research', 'Research'],
  ['resilience', 'Resilience'],
  ['safety', 'Safety'],
  ['skills', 'Skills'],
  ['template', 'Template'],
  ['tone', 'Tone'],
  ['transportation', 'Transportation'],
  ['triage', 'Triage'],
  ['values', 'Values'],
  ['workflow', 'Workflow'],
]);

const canonicalBlogCategoryLabels = new Map([
  ['big-costs', 'Big Costs'],
  ['core-model', 'Core Model'],
  ['field-notes', 'Field Notes'],
  ['guardrails', 'Guardrails'],
  ['methods', 'Methods'],
]);

const canonicalBlogTopicLabels = new Map([
  ['action-ladder', 'Action Ladder'],
  ['admin-drag', 'Admin Drag'],
  ['big-costs', 'Big Costs'],
  ['bridge-building', 'Bridge Building'],
  ['childcare', 'Childcare'],
  ['civic-action', 'Civic Action'],
  ['community-resilience', 'Community Resilience'],
  ['democracy', 'Democracy'],
  ['economic-insecurity', 'Economic Insecurity'],
  ['education', 'Education'],
  ['family-economics', 'Family Economics'],
  ['healthcare', 'Healthcare'],
  ['housing', 'Housing'],
  ['information-environment', 'Information Environment'],
  ['institutions', 'Institutions'],
  ['market-power', 'Market Power'],
  ['middle-out-growth', 'Middle-Out Growth'],
  ['mobility', 'Mobility'],
  ['monthly-squeeze', 'Monthly Squeeze'],
  ['mutual-aid', 'Mutual Aid'],
  ['research-methods', 'Research Methods'],
  ['rights-and-dignity', 'Rights and Dignity'],
  ['rule-of-law', 'Rule of Law'],
  ['scarcity', 'Scarcity'],
  ['student-debt', 'Student Debt'],
  ['time-horizons', 'Time Horizons'],
  ['transportation', 'Transportation'],
  ['workforce-capacity', 'Workforce Capacity'],
]);

const caseStudyBucketLabels = new Map([
  ['success', 'Success'],
  ['failure', 'Failure'],
  ['turnaround', 'Turnaround'],
  ['warning', 'Warning'],
  ['mixed', 'Mixed'],
  ['stress-test', 'Stress Test'],
]);

const evidenceLevelLabels = new Map([
  ['high', 'High'],
  ['medium', 'Medium'],
  ['low', 'Low'],
]);

const sourceChannelLabels = new Map([
  ['economyforeveryone', 'E4E'],
  ['facebook', 'Facebook'],
  ['linkedin', 'LinkedIn'],
  ['mixed', 'Mixed'],
]);

export const PLAYBOOK_HIDDEN_TAGS = [
  'playbooks',
  'civics',
  'community',
  'healthcare',
  'kids',
  'writing',
  'playbook',
  'core',
  'adapter',
  'template',
  'module',
  'place',
  'overview',
  'index',
  'lanes',
];

export const RECEIPT_HIDDEN_TAGS = [
  'boeing',
  'citizens-united',
  'costco',
  'e4e',
  'method',
  'method-tag',
  'methodology',
  'montgomery-county',
  'nucor',
  'saturn',
  'tokyo',
  'topic-tag',
];

export const BLOG_HIDDEN_TOPICS = ['series-index', 'series-summary'];

export const BLOG_HIDDEN_TAGS = [
  'e4e',
  'economy-for-everyone',
  'big-costs',
  'core-model',
  'field-notes',
  'guardrails',
  'institutions',
  'methods',
  'monthly-squeeze',
  'research-methods',
  'rights-and-dignity',
];

export const normalizeTag = (value: string) => value.trim().toLowerCase().replace(/\s+/g, '-');

export const toCanonicalTag = (value: string) => {
  const normalized = normalizeTag(value);
  return canonicalTagAliases.get(normalized) ?? normalized;
};

export const toCanonicalBlogCategory = (value: string) => {
  const normalized = normalizeTag(value);
  return canonicalBlogCategoryAliases.get(normalized) ?? normalized;
};

export const toCanonicalBlogTopic = (value: string) => {
  const normalized = normalizeTag(value);
  return (
    canonicalBlogTopicAliases.get(normalized) ?? canonicalTagAliases.get(normalized) ?? normalized
  );
};

export const canonicalizeTags = (tags: string[] = []) => [
  ...new Set(tags.map((tag) => toCanonicalTag(tag)).filter(Boolean)),
];

export const canonicalizeBlogTopics = (topics: string[] = []) => [
  ...new Set(topics.map((topic) => toCanonicalBlogTopic(topic)).filter(Boolean)),
];

export const getVisibleTags = (tags: string[] = [], hiddenValues: string[] = []) => {
  const hidden = new Set(hiddenValues.map((value) => toCanonicalTag(value)));
  return canonicalizeTags(tags).filter((tag) => !hidden.has(tag));
};

export const getTagLabel = (tag: string) =>
  canonicalTagLabels.get(tag) ??
  tag
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');

export const getBlogCategoryLabel = (category: string) =>
  canonicalBlogCategoryLabels.get(category) ?? getTagLabel(category);

export const getBlogTopicLabel = (topic: string) =>
  canonicalBlogTopicLabels.get(topic) ?? getTagLabel(topic);

export const getCaseStudyBucketLabel = (bucket: string) =>
  caseStudyBucketLabels.get(bucket) ?? getTagLabel(bucket);

export const getEvidenceLevelLabel = (level: string) =>
  evidenceLevelLabels.get(level) ?? getTagLabel(level);

export const getSourceChannelLabel = (channel: string) =>
  sourceChannelLabels.get(channel) ?? getTagLabel(channel);
