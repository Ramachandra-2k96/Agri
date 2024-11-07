import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.id = "google-translate-script";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,kn,hi', layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">AgriNext</span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-md md:hidden hover:text-green-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {['About', 'Community', 'Resources', 'Contact','Dashboard'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            {/* Google Translate for Desktop */}
            <div className="relative">
              <div id="google_translate_element" className="translate-container"></div>
            </div>
          </div>

          {/* Login and Signup Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <NavLink
              to="/login"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-2 bg-white border-t md:hidden">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {['About', 'Community', 'Resources', 'Contact','Dashboard'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}

              {/* Google Translate for Mobile */}
              <div className="relative mt-4">
                <div id="google_translate_element_mobile" className="translate-container"></div>
              </div>

              {/* Login and Signup Links */}
              <div className="pt-2 border-t border-gray-200">
                <NavLink
                  to="/login"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 mt-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// CSS for Translate Styling
const style = document.createElement('style');
style.innerHTML = `
  /* Styling the Google Translate Dropdown */
  .translate-container {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: 0.875rem; /* Match the navbar font size */
  }

  /* Hide Google Translate's default banner */
  .goog-te-banner-frame.skiptranslate {
    display: none !important;
  }

  body {
    top: 0 !important;
  }
`;
document.head.appendChild(style);
