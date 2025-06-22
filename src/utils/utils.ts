export function parseQueryString(search = '') {
  return Object.fromEntries(new URLSearchParams(search).entries());
}

export function getCategoryLink(category: string | null) {
  const categorySlug = category?.toLowerCase().replace(/\s+/g, '-');

  return `/category/${categorySlug}`;
}
