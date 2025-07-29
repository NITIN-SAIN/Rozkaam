import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Globe,
  Download,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Investor Relations', href: '#' }
    ],
    services: [
      { name: 'Home Services', href: '#' },
      { name: 'Vehicle Services', href: '#' },
      { name: 'Mental Wellness', href: '#' },
      { name: 'Subscription Plans', href: '#' },
      { name: 'Corporate Services', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety Guidelines', href: '#' },
      { name: 'Trust & Safety', href: '#' },
      { name: 'Service Areas', href: '#' },
      { name: 'Become a Professional', href: '#' }
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' }
  ];

  const cities = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 
    'Hyderabad', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">Rozkaam</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for all home services, vehicle maintenance, and mental wellness needs. 
              Connecting you with verified professionals across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">1800-ROZKAAM (24/7)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">support@rozkaam.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">Available in 50+ cities</span>
              </div>
            </div>

            {/* App Download */}
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 cursor-pointer transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold mb-2 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Available Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-gray-700 transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Rozkaam Technologies Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;