import { FAQClient } from "./faq-client";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'FAQPage'});
 
  return {
    title: t('metaTitle'),
    description: t('metaDescription')
  };
}

export default function FAQPage() {
  return <FAQClient />;
}