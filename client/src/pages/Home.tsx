import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Cotton Shirt',
      category: "Women's Tops",
      price: 89.00,
      badge: 'New',
    },
    {
      id: 2,
      name: 'Tailored Blazer',
      category: "Women's Outerwear",
      price: 249.00,
    },
    {
      id: 3,
      name: 'Slim Fit Trousers',
      category: "Men's Pants",
      price: 129.00,
      oldPrice: 169.00,
      badge: 'Sale',
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      category: 'Accessories',
      price: 179.00,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f5f5dc] via-[#e8e8d0] to-[#f5f5dc] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-widest uppercase text-[#8b7355] font-semibold">
            New Season Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-light mt-6 mb-6 text-gray-900 tracking-tight">
            Elevate Your Style
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover timeless pieces crafted with exceptional quality and attention to detail
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/shop"
              className="bg-gray-900 text-white px-10 py-4 font-medium hover:bg-[#8b7355] transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/collections"
              className="bg-transparent text-gray-900 px-10 py-4 font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Women's Category */}
            <div className="group text-center">
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-lg transform group-hover:scale-105 transition-transform duration-300">
                  Women's Collection
                </div>
              </div>
              <h3 className="text-2xl font-normal mb-4 text-gray-900">Women</h3>
              <Link
                to="/shop?category=women"
                className="text-[#8b7355] font-medium border-b-2 border-[#8b7355] pb-1 hover:opacity-70 transition-opacity"
              >
                Explore Collection
              </Link>
            </div>

            {/* Men's Category */}
            <div className="group text-center">
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-lg transform group-hover:scale-105 transition-transform duration-300">
                  Men's Collection
                </div>
              </div>
              <h3 className="text-2xl font-normal mb-4 text-gray-900">Men</h3>
              <Link
                to="/shop?category=men"
                className="text-[#8b7355] font-medium border-b-2 border-[#8b7355] pb-1 hover:opacity-70 transition-opacity"
              >
                Explore Collection
              </Link>
            </div>

            {/* Accessories Category */}
            <div className="group text-center">
              <div className="overflow-hidden rounded-lg mb-6">
                <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-lg transform group-hover:scale-105 transition-transform duration-300">
                  Accessories
                </div>
              </div>
              <h3 className="text-2xl font-normal mb-4 text-gray-900">Accessories</h3>
              <Link
                to="/shop?category=accessories"
                className="text-[#8b7355] font-medium border-b-2 border-[#8b7355] pb-1 hover:opacity-70 transition-opacity"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#f5f5dc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="h-80 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600">
                    Product Image
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-[#8b7355] text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  <p className="text-xl font-semibold text-gray-900 mb-4">
                    ${product.price.toFixed(2)}
                    {product.oldPrice && (
                      <span className="text-base text-gray-400 line-through ml-2 font-normal">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </p>
                  <button className="w-full bg-gray-900 text-white py-2 px-6 text-sm font-medium hover:bg-[#8b7355] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers and style tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
              required
            />
            <button
              type="submit"
              className="bg-[#8b7355] text-white px-10 py-4 font-medium hover:bg-[#7a6449] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;