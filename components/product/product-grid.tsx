import { ProductCard } from "./product-card";
import products from "@/data/products.json";

export function ProductGrid() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect pillow for your sleep style. Each one crafted with premium materials for cloud-like comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
