type MarketplaceEvent = {
  product_slug: string;
  marketplace: 'shopee' | 'tokopedia';
  page_path: string;
};

export const trackMarketplaceClick = ({ product_slug, marketplace, page_path }: MarketplaceEvent) => {
  // In a real app, this would fire to GA4, Mixpanel, or Facebook Pixel
  console.log(`[Analytics] Marketplace Click: ${marketplace} for ${product_slug} on ${page_path}`);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'marketplace_click', {
      event_category: 'conversion',
      event_label: product_slug,
      marketplace: marketplace,
      page_path: page_path
    });
  }
};
