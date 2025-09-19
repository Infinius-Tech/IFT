
export default function Benefits() {
  const benefits = [
    {
      icon: "🌱",
      title: "100% Organic",
      description: "Our peanuts are certified organic and free from pesticides"
    },
    {
      icon: "🚫",
      title: "No Preservatives",
      description: "We never use artificial preservatives or additives"
    },
    {
      icon: "❤️",
      title: "Heart Healthy",
      description: "Rich in monounsaturated fats and protein"
    },
    {
      icon: "🏭",
      title: "Bulk Options",
      description: "Custom packaging and bulk quantities available"
    }
  ];

  return (
    // <section className="py-16 bg-amber-100">
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#6B8E23] mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 text-center">Quality Assurance</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Every batch of our peanut butter undergoes rigorous quality testing to ensure consistency, flavor, 
            and nutritional value. We maintain strict hygiene standards and are certified by leading food safety organizations.
          </p>
        </div>
      </div>
    </section>
  );
}