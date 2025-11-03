import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold tracking-widest mb-4">ELEGANCE</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium clothing for the modern individual. Quality craftsmanship meets timeless design.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=women" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Elegance. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;