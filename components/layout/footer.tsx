"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Instagram } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="w-5 h-5" />;
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      );
    case 'shopee':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.8 7.64c-.1-.6-.5-1.1-1-1.4-.6-.3-1.2-.2-1.7.1-.2.1-.4.2-.6.4l-1.3 1.3c-.3.3-.7.3-1 .1-.2-.2-.2-.5-.1-.7l1.7-3.7c.2-.4.1-.9-.2-1.2-.3-.3-.8-.4-1.2-.2l-3.7 1.7c-.3.1-.5.1-.7-.1-.2-.2-.3-.6-.1-1l1.3-1.3c.3-.3.3-.8.1-1.2-.2-.4-.7-.6-1.2-.6-.5 0-1 .2-1.3.6l-6.6 6.6c-1.7 1.7-2.6 4-2.6 6.4 0 2.4 1 4.7 2.6 6.4 1.7 1.7 4 2.6 6.4 2.6 2.4 0 4.7-1 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-1.7-.5-3.3-1.4-4.8zM12.5 16.8c-1.4 1-3.3.8-4.4-.3-1.1-1.1-1.3-3-.3-4.4.2-.3.6-.3.9-.1.3.2.3.6.1.9-.6.8-.5 2 .3 2.8.8.8 2 .9 2.8.3.3-.2.7-.2.9.1.3.2.2.6-.3.7z"/>
        </svg>
      );
    case 'tokopedia':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21.2 7.7C20.6 6.6 19.4 6 18.1 6h-3.4c-.6 0-1.1.3-1.4.8l-1.3 2.3-1.3-2.3c-.3-.5-.8-.8-1.4-.8H5.9c-1.3 0-2.5.6-3.1 1.7-.6 1.1-.5 2.4.2 3.4l6.3 9.4c.5.8 1.4 1.3 2.4 1.3h.6c1 0 1.9-.5 2.4-1.3l6.3-9.4c.7-1 .8-2.3.2-3.4zM7 16.2l-3.6-5.4c-.2-.3-.2-.7 0-1 .2-.3.6-.5 1-.5h2.1L7 16.2zm10 0l.5-6.9h2.1c.4 0 .8.2 1 .5.2.3.2.7 0 1L17 16.2z"/>
        </svg>
      );
    default:
      return null;
  }
};

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const locale = useLocale();
  const getPath = (path: string) => `/${locale}${path}`;

  // Reconstruct nav items from translations to ensure they match navbar
  const navItems = [
    { label: tNav('home'), href: "/" },
    { label: tNav('collection'), href: "/products" },
    { label: tNav('about'), href: "/about" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative z-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">{siteData.name}</h3>
            <p className="text-secondary/80 text-sm max-w-xs mx-auto md:mx-0 font-light leading-relaxed">
              {t('description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 tracking-widest text-xs uppercase">{t('explore')}</h4>
            <ul className="space-y-3 text-sm text-secondary/80 font-light">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={getPath(item.href)} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 tracking-widest text-xs uppercase">{t('support')}</h4>
            <ul className="space-y-3 text-sm text-secondary/80 font-light">
              <li><Link href={getPath("/faq")} className="hover:text-white transition-colors">{t('faq')}</Link></li>
              <li><Link href={getPath("/contact")} className="hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 tracking-widest text-xs uppercase">{t('follow')}</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {siteData.socials.instagram && (
                <a 
                  href={siteData.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  {getSocialIcon('instagram')}
                </a>
              )}
              {siteData.socials.tiktok && (
                <a 
                  href={siteData.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  {getSocialIcon('tiktok')}
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-white/40 font-light">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}