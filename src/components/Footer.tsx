
import { Phone, Clock, MapPin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Prabha's Dental Clinic</h3>
            <p className="text-gray-300 mb-4">
              Professional dental care for the entire family. Your smile is our priority!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctor-tips" className="text-gray-300 hover:text-white transition-colors">Doctor Tips</a></li>
              <li><a href="#training" className="text-gray-300 hover:text-white transition-colors">Training</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">General Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Root Canal Treatment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-dental-blue" />
                <span className="text-gray-300">
                  1/70, Poonamallee High Rd, Sivabatham, Vanagaram, Chennai, Tamil Nadu 600095
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-dental-blue" />
                <a href="tel:+919597876632" className="text-gray-300 hover:text-white transition-colors">
                  095978 76632
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-dental-blue" />
                <span className="text-gray-300">Mon–Fri, 5–9 pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Dr. Prabha's Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
