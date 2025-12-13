import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  images: string[];
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F4F4F5]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className="object-contain p-8 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        
        {/* Floating Action Button style overlay */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white text-primary rounded-full px-4 py-2 text-sm font-medium shadow-lg">
            View Product
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center space-y-1">
        <h3 className="font-display text-2xl font-medium text-primary">
          {product.name}
        </h3>
        <p className="text-muted-foreground font-light text-sm">{product.tagline}</p>
        <p className="text-primary font-medium pt-1">{product.price}</p>
      </div>
    </Link>
  );
}