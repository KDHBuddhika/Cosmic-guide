import { FaFacebook, FaTwitter, FaInstagram, FaMoon, FaStar } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-20"></div>
      <div className="glass-effect py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaMoon className="text-2xl text-cosmic-accent glow-effect" />
                <h3 className="text-xl font-bold custom-gradient">
                  Cosmic Guide
                </h3>
              </div>
              <p className="text-cosmic-tertiary leading-relaxed">
                Your daily guide to the stars and beyond. Discover your destiny through the ancient wisdom of astrology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cosmic-primary">
                <FaStar className="text-cosmic-accent" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors flex items-center gap-2">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors flex items-center gap-2">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors flex items-center gap-2">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cosmic-primary">
                <FaStar className="text-cosmic-accent" />
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="glass-effect p-3 rounded-full hover:scale-110 transition-transform">
                  <FaFacebook className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors" size={20} />
                </a>
                <a href="#" className="glass-effect p-3 rounded-full hover:scale-110 transition-transform">
                  <FaTwitter className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors" size={20} />
                </a>
                <a href="#" className="glass-effect p-3 rounded-full hover:scale-110 transition-transform">
                  <FaInstagram className="text-cosmic-tertiary hover:text-cosmic-accent transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cosmic-secondary/30 text-center text-cosmic-tertiary">
            <p>&copy; 2024 Cosmic Guide. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;