import Image from 'next/image';
import { notFound } from 'next/navigation';
import Head from 'next/head';

const countryExportData = {
  uk: {
    title: 'Export Peanut Butter in UK',
    description: 'Indian FoodTech is a leading exporter of premium peanut butter to the UK. Discover our certifications, quality, and export process.',
    image: '/images/privateLabel/export peanut butter.webp',
    meta: {
      keywords: 'export peanut butter UK, Indian peanut butter exporter, UK peanut butter import',
      ogTitle: 'Export Peanut Butter in UK | Indian FoodTech',
      ogDescription: 'Premium peanut butter exported to the UK by Indian FoodTech. Certified, high-quality, and trusted worldwide.'
    }
  },
  usa: {
    title: 'Export Peanut Butter in USA',
    description: 'Indian FoodTech exports high-quality peanut butter to the USA. Learn about our export process, certifications, and product range.',
    image: '/images/privateLabel/export peanut butter.webp',
    meta: {
      keywords: 'export peanut butter USA, Indian peanut butter exporter, USA peanut butter import',
      ogTitle: 'Export Peanut Butter in USA | Indian FoodTech',
      ogDescription: 'Premium peanut butter exported to the USA by Indian FoodTech. Certified, high-quality, and trusted worldwide.'
    }
  }
};

export async function generateMetadata({ params }) {

  const country = params.country?.toLowerCase();
  const data = countryExportData[country];

  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    keywords: data.meta.keywords,
    openGraph: {
      title: data.meta.ogTitle,
      description: data.meta.ogDescription,
      images: [data.image]
    }
  };
}


export default function ExportCountryPage({ params }) {

  const country = params.country?.toLowerCase();
  const data = countryExportData[country];

  console.log('ExportCountryPage params.country:', country);
  console.log('ExportCountryPage data:', data);

  if (!data) return notFound();
  return (
    <main className="container mx-auto py-10 px-4">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.meta.keywords} />
        <meta property="og:title" content={data.meta.ogTitle} />
        <meta property="og:description" content={data.meta.ogDescription} />
        <meta property="og:image" content={data.image} />
      </Head>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <Image src={data.image.replace('/public', '')} alt={data.title} width={600} height={400} className="rounded-lg mb-6" />
      <p className="text-lg">{data.description}</p>
    </main>
  );
}
