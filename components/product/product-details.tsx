"use client";

import { useState } from "react";
import { BuyButtons } from "@/components/product/buy-buttons";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProductVariant {
  name: string;
  price: string;
  originalPrice?: string;
  shopeeUrl: string;
  tokopediaUrl: string;
}

interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  description: string;
  benefits: string[];
  shopeeUrl: string;
  tokopediaUrl: string;
  variants?: ProductVariant[];
}

export function ProductDetails({ product }: { product: Product }) {
  const t = useTranslations('ProductDetails');
  const tProd = useTranslations('Products');
  const pathname = usePathname();

  // Extract locale from pathname (e.g., "/en/products/cervicloud" -> "en")
  const locale = pathname.split('/')[1] || 'en';

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;
  const currentShopeeUrl = selectedVariant ? selectedVariant.shopeeUrl : product.shopeeUrl;
  const currentTokopediaUrl = selectedVariant ? selectedVariant.tokopediaUrl : product.tokopediaUrl;

  return (
    <div className="sticky top-24 space-y-8 p-6 md:p-8 rounded-3xl border border-border/40 bg-white/50 backdrop-blur-xl shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors px-3 py-1 text-xs font-semibold tracking-wider uppercase border-none">
            {t('collection')}
          </Badge>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span>4.9</span>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
          {tProd(`${product.slug}.name` as any)}
        </h1>

        <p className="text-xl text-muted-foreground font-light italic">
          {tProd(`${product.slug}.tagline` as any)}
        </p>

        {/* CalmiCloud Inclusion Banner - CerviCloud only */}
        {product.slug === 'cervicloud' && (
          <Link href={`/${locale}/products/calmicloud`} className="block">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 hover:bg-green-100/80 hover:border-green-200 transition-all cursor-pointer group">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm flex items-center gap-2">
                    {t('includesCalmiCloud')}
                    <ArrowRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t('includesCalmiCloudSubtext')}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="flex items-baseline gap-3 pt-2">
          {currentOriginalPrice && (
            <span className="text-xl text-muted-foreground/60 line-through decoration-muted-foreground/60 decoration-1 font-light">
              {currentOriginalPrice}
            </span>
          )}
          <div className="text-3xl font-display font-medium text-primary">
            {currentPrice}
          </div>
        </div>
      </div>

      {/* Variant Selector */}
      {product.variants && (
        <div className="space-y-3">
          <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">{t('selectOption')}</span>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(variant)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all text-sm font-medium",
                  selectedVariant?.name === variant.name
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-white text-muted-foreground border-border hover:border-primary/50"
                )}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="w-full h-px bg-border/50" />

      <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
        <p>{tProd(`${product.slug}.description` as any)}</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-display font-medium text-lg text-primary">{t('keyBenefits')}</h3>
        <ul className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/80 group">
              <div className="mt-1 bg-green-50 rounded-full p-1 text-green-600 group-hover:bg-green-100 transition-colors">
                <Check className="w-3 h-3" />
              </div>
              <span>{tProd(`${product.slug}.benefits.${i}` as any)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-10 space-y-4">
        <BuyButtons 
          shopeeUrl={currentShopeeUrl} 
          tokopediaUrl={currentTokopediaUrl} 
          productSlug={product.slug}
          className="w-full"
        />
        <p className="text-center text-xs text-muted-foreground/60">
          {t('secureCheckout')}
        </p>
      </div>
    </div>
  );
}