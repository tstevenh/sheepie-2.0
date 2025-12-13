"use client";

import { useState } from "react";
import { BuyButtons } from "@/components/product/buy-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductVariant {
  name: string;
  price: string;
  shopeeUrl: string;
  tokopediaUrl: string;
}

interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  benefits: string[];
  shopeeUrl: string;
  tokopediaUrl: string;
  variants?: ProductVariant[];
}

export function ProductDetails({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentShopeeUrl = selectedVariant ? selectedVariant.shopeeUrl : product.shopeeUrl;
  const currentTokopediaUrl = selectedVariant ? selectedVariant.tokopediaUrl : product.tokopediaUrl;

  return (
    <div className="sticky top-24 space-y-8 p-6 md:p-8 rounded-3xl border border-border/40 bg-white/50 backdrop-blur-xl shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors px-3 py-1 text-xs font-semibold tracking-wider uppercase border-none">
            Essential Collection
          </Badge>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span>4.9</span>
          </div>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
          {product.name === "CerviCloud Ortho" ? "CerviCloud Pillow" : product.name === "LumiCloud Mask" ? "LumiCloud Sleep Mask" : product.name}
        </h1>
        
        <p className="text-xl text-muted-foreground font-light italic">
          {product.tagline}
        </p>
        
        <div className="text-3xl font-display font-medium text-primary pt-2">
          {currentPrice}
        </div>
      </div>

      {/* Variant Selector */}
      {product.variants && (
        <div className="space-y-3">
          <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">Select Option</span>
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
        <p>{product.description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-display font-medium text-lg text-primary">Key Benefits</h3>
        <ul className="space-y-3">
          {product.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/80 group">
              <div className="mt-1 bg-green-50 rounded-full p-1 text-green-600 group-hover:bg-green-100 transition-colors">
                <Check className="w-3 h-3" />
              </div>
              <span>{benefit}</span>
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
          Secure checkout via your favorite marketplace
        </p>
      </div>
    </div>
  );
}
