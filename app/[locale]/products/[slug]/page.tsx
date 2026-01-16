import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductDetails } from "@/components/product/product-details";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

// This is required for SSG with dynamic routes
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const t = await getTranslations({locale, namespace: 'Products'});

  return {
    title: `${t(`${slug}.name` as any)} | Sheepie.`,
    description: t(`${slug}.tagline` as any),
    openGraph: {
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'Products'});
  const translatedName = t(`${slug}.name` as any);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />

      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 w-full">

          {/* Left Column: Large Scrolling Gallery (Editorial Style) */}
          <div className="lg:col-span-7 w-full min-w-0">
             <ProductGallery images={product.images} productName={translatedName} />
          </div>

          {/* Right Column: Sticky Product Info (Client Component for Variants) */}
          <div className="lg:col-span-5 relative w-full min-w-0">
             <ProductDetails product={product} />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}