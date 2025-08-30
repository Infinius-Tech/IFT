export default function About() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">About Us</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="h-64 bg-amber-200 rounded-lg flex items-center justify-center">
              <span className="text-amber-600">Company Image</span>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-[#6B8E23] mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2005, NutNature has been providing premium quality peanut butter to businesses across the country. 
              What started as a small family operation has grown into a trusted B2B supplier for restaurants, bakeries, 
              health food stores, and distributors.
            </p>
            <p className="text-gray-700 mb-4">
              We pride ourselves on using only the finest organic peanuts, sourced from sustainable farms that share our 
              commitment to quality and environmental responsibility.
            </p>
            <button className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-bold py-2 px-6 rounded transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}