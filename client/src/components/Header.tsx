import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p>Free Shipping On Orders Over $100</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Support
            </Link>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Track Order
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link 
                to="/" 
                className="text-2xl md:text-3xl font-bold text-gray-900 tracking-widest hover:text-[#8b7355] transition-colors"
              >
                ELEGANCE
              </Link>
            </div>

            {/* Navigation Menu */}
            <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
              <li>
                <Link
                  to="/"
                  className={`hover:text-[#8b7355] transition-colors pb-1 ${
                    isActive('/') ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={`hover:text-[#8b7355] transition-colors pb-1 ${
                    isActive('/shop') ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : ''
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className={`hover:text-[#8b7355] transition-colors pb-1 ${
                    isActive('/collections') ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : ''
                  }`}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`hover:text-[#8b7355] transition-colors pb-1 ${
                    isActive('/about') ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:text-[#8b7355] transition-colors pb-1 ${
                    isActive('/contact') ? 'border-b-2 border-[#8b7355] text-[#8b7355]' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Action Links */}
            <div className="flex gap-4 md:gap-6 text-gray-900 font-medium text-sm md:text-base">
              <a href="#" className="hover:text-[#8b7355] transition-colors">
                Search
              </a>
              <a href="#" className="hover:text-[#8b7355] transition-colors">
                Account
              </a>
              <Link to="/cart" className="hover:text-[#8b7355] transition-colors">
                Cart (0)
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;