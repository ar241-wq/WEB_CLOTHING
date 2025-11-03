import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Spring 2025',
      description: 'Fresh, light pieces perfect for the new season',
      itemCount: 24,
    },
    {
      id: 2,
      title: 'Winter Essentials',
      description: 'Warm and cozy pieces for cold weather',
      itemCount: 32,
    },
    {
      id: 3,
      title: 'Work Wear',
      description: 'Professional attire for the modern workplace',
      itemCount: 28,
    },
    {
      id: 4,
      title: 'Casual Comfort',
      description: 'Relaxed styles for everyday wear',
      itemCount: 36,
    },
    {
      id: 5,
      title: 'Evening Elegance',
      description: 'Sophisticated pieces for special occasions',
      itemCount: 18,
    },
    {
      id: 6,
      title: 'Sustainable Line',
      description: 'Eco-friendly fashion for conscious consumers',
      itemCount: 22,
    },
  ];

  return (
    <div className="bg-[#f5f5dc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Our Collections</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for every occasion and season
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-xl group-hover:scale-105 transition-transform duration-300">
                  Collection Image
                </div>
                <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-900">
                    {collection.itemCount} Items
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-3">{collection.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{collection.description}</p>
                <Link
                  to="/shop"
                  className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-[#8b7355] transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg p-12 text-center shadow-md">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete shop to discover all available products
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white px-10 py-4 font-medium hover:bg-[#8b7355] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;