export const generateMarketplaceUrl = (baseUrl: string, productSlug: string, source = 'site') => {
  const url = new URL(baseUrl);
  url.searchParams.append('utm_source', source);
  url.searchParams.append('utm_medium', 'button');
  url.searchParams.append('utm_campaign', 'pdp');
  url.searchParams.append('utm_content', productSlug);
  return url.toString();
};
