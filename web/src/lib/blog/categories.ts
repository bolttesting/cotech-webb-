/** Lowercase slug for `data-filter` / `data-filter-category` (matches legacy blog tabs). */
export function categoryFilterSlug(category: string | null | undefined): string {
  if (!category?.trim()) return "general";
  return category
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function uniqueCategoryFilters(categories: (string | null | undefined)[]): string[] {
  const set = new Set<string>();
  for (const c of categories) {
    set.add(categoryFilterSlug(c));
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function categoryDisplayLabel(category: string | null | undefined): string {
  if (!category?.trim()) return "Insights";
  return category.trim();
}
