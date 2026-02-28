export type ReceiptFilterValues = {
  type: string;
  caseSlug: string;
  postSlug: string;
  tag: string;
  search: string;
};

export type ReceiptFilterItem = {
  typeId?: string;
  caseSlugs?: string;
  postSlugs?: string;
  tags?: string;
  search?: string;
};

export function splitFilterList(value: string | undefined): string[] {
  return (value || '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

export function matchesReceiptFilters(
  item: ReceiptFilterItem,
  filters: ReceiptFilterValues
): boolean {
  const typeMatch = filters.type === 'all' || item.typeId === filters.type;
  const caseMatch =
    filters.caseSlug === 'all' || splitFilterList(item.caseSlugs).includes(filters.caseSlug);
  const postMatch =
    filters.postSlug === 'all' || splitFilterList(item.postSlugs).includes(filters.postSlug);
  const tagMatch = filters.tag === 'all' || splitFilterList(item.tags).includes(filters.tag);
  const searchMatch =
    !filters.search || (item.search || '').toLowerCase().includes(filters.search.toLowerCase());

  return typeMatch && caseMatch && postMatch && tagMatch && searchMatch;
}
