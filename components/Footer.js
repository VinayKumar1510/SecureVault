export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Column 1 - About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">SecureVault</h2>
          <p className="text-sm leading-6">
            SecureVault is your trusted platform for managing and protecting your digital assets with advanced encryption and seamless access control.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors duration-200">Services</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>Email: <a href="mailto:support@securevault.com" className="hover:text-white">support@securevault.com</a></li>
            <li>Phone: <a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a></li>
            <li>Address: Rohtak, Haryana, India</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} <span className="text-white font-medium">SecureVault</span> — All Rights Reserved
      </div>
    </footer>
  );
}
