import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('Black');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('description');

  // Mock product data
  const product = {
    id,
    name: 'Classic Cotton Shirt',
    price: 89.00,
    oldPrice: 119.00,
    category: "Women's Tops",
    description:
      'Crafted from premium 100% organic cotton, this classic shirt combines comfort with timeless style. The tailored fit and clean lines make it perfect for both professional and casual settings.',
    features: [
      'Premium 100% organic cotton',
      'Tailored fit for a flattering silhouette',
      'Machine washable',
      'Wrinkle-resistant fabric',
      'Sustainable production methods',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    inStock: true,
  };

  const relatedProducts = [
    { id: 2, name: 'Tailored Blazer', price: 249.00 },
    { id: 3, name: 'Slim Fit Trousers', price: 129.00 },
    { id: 4, name: 'Leather Belt', price: 69.00 },
    { id: 5, name: 'Silk Scarf', price: 79.00 },
  ];

  return (
    <div className="bg-[#f5f5dc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-[#8b7355]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#8b7355]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
              <div className="h-96 lg:h-[600px] bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-xl">
                Main Product Image
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:ring-2 hover:ring-[#8b7355] transition-all"
                >
                  <div className="h-24 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 text-xs">
                    {i}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                )}
                {product.oldPrice && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 text-sm font-medium rounded">
                    Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Color: <span className="font-normal text-gray-600">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 border-2 rounded transition-all ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Size: {selectedSize && <span className="font-normal text-gray-600">{selectedSize}</span>}
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border-2 rounded transition-all ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="w-16 text-center text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={!selectedSize}
              className={`w-full py-4 px-8 font-medium mb-4 transition-colors ${
                selectedSize
                  ? 'bg-gray-900 text-white hover:bg-[#8b7355]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedSize ? 'Add to Cart' : 'Please Select Size'}
            </button>

            {product.inStock ? (
              <p className="text-green-600 text-sm text-center mb-6">In Stock - Ships within 2-3 business days</p>
            ) : (
              <p className="text-red-600 text-sm text-center mb-6">Out of Stock</p>
            )}

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
              <p>• Free shipping on orders over $100</p>
              <p>• 30-day return policy</p>
              <p>• Secure payment options</p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="border-b mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'border-b-2 border-gray-900 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === 'features'
                    ? 'border-b-2 border-gray-900 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === 'care'
                    ? 'border-b-2 border-gray-900 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Care Instructions
              </button>
            </div>
          </div>

          {activeTab === 'description' && (
            <div className="text-gray-600 leading-relaxed">{product.description}</div>
          )}

          {activeTab === 'features' && (
            <ul className="space-y-3 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-[#8b7355]">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'care' && (
            <div className="text-gray-600 leading-relaxed space-y-3">
              <p>• Machine wash cold with like colors</p>
              <p>• Use mild detergent</p>
              <p>• Tumble dry low or hang to dry</p>
              <p>• Iron on low heat if needed</p>
              <p>• Do not bleach</p>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-300">
                  Product Image
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-xl font-semibold text-gray-900">${relatedProduct.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;