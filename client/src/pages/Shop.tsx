import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  badge?: string;
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    { id: 1, name: 'Classic Cotton Shirt', category: 'women', price: 89.00, badge: 'New' },
    { id: 2, name: 'Tailored Blazer', category: 'women', price: 249.00 },
    { id: 3, name: 'Slim Fit Trousers', category: 'men', price: 129.00, oldPrice: 169.00, badge: 'Sale' },
    { id: 4, name: 'Leather Crossbody Bag', category: 'accessories', price: 179.00 },
    { id: 5, name: 'Cashmere Sweater', category: 'women', price: 189.00 },
    { id: 6, name: 'Oxford Dress Shirt', category: 'men', price: 99.00 },
    { id: 7, name: 'Wool Coat', category: 'women', price: 399.00 },
    { id: 8, name: 'Leather Belt', category: 'accessories', price: 69.00 },
    { id: 9, name: 'Denim Jacket', category: 'men', price: 159.00 },
    { id: 10, name: 'Silk Scarf', category: 'accessories', price: 79.00, badge: 'New' },
    { id: 11, name: 'Pleated Skirt', category: 'women', price: 119.00 },
    { id: 12, name: 'Chinos', category: 'men', price: 89.00 },
  ];

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="bg-[#f5f5dc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Shop All</h1>
          <p className="text-gray-600 text-lg">Discover our complete collection of premium clothing</p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('women')}
                className={`px-6 py-2 font-medium transition-colors ${
                  selectedCategory === 'women'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setSelectedCategory('men')}
                className={`px-6 py-2 font-medium transition-colors ${
                  selectedCategory === 'men'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Men
              </button>
              <button
                onClick={() => setSelectedCategory('accessories')}
                className={`px-6 py-2 font-medium transition-colors ${
                  selectedCategory === 'accessories'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Accessories
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-gray-700 font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8b7355] bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Product Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredProducts.length} products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-300">
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
                <p className="text-sm text-gray-500 mb-3 capitalize">{product.category}</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  ${product.price.toFixed(2)}
                  {product.oldPrice && (
                    <span className="text-base text-gray-400 line-through ml-2 font-normal">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic
                  }}
                  className="w-full bg-gray-900 text-white py-2 px-6 text-sm font-medium hover:bg-[#8b7355] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;