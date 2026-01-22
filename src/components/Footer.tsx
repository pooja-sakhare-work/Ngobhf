import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-white">Bharath Hitarth</h3>
                <p className="text-xs text-gray-400">Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to empowering communities through education, healthcare, 
              and sustainable development initiatives across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-orange-400 transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-orange-400 transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Education for All
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Healthcare Services
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Nutrition Program
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Women Empowerment
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Skill Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>Bharat Hitarth Foundation, Delhi, India</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>hitarthfoundation.ngo@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                <div>
                  <p className="text-gray-400">Office Hours</p>
                  <p>Monday – Friday | 10:00 AM – 5:00 PM</p>
                </div>
              </li>
              <li>
                <p className="mb-3">Follow us on social media:</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} Bharath Hitarth Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
