
export default function Gallery() {
  const images = [
    { id: 1, alt: "Peanut butter with bread", caption: "Perfect for Bakeries" },
    { id: 2, alt: "Peanut butter smoothie", caption: "Smoothie Ingredients" },
    { id: 3, alt: "Kids enjoying peanut butter", caption: "Family Favorite" },
    { id: 4, alt: "Peanut butter packaging", caption: "Custom Packaging" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <div className="h-64 bg-amber-200 flex items-center justify-center">
                <span className="text-amber-600">Lifestyle Image</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}