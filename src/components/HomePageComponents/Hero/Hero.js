
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="absolute inset-0 bg-[url('/images/peanut-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#8B4513] mb-4">Pure. Healthy. Delicious.</h1>
        <p className="text-xl md:text-2xl text-[#6B8E23] mb-8">Premium Organic Peanut Butter for Your Business</p>
        <Link 
          href="/contact" 
          className="bg-[#6B8E23] hover:bg-[#8B4513] text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}