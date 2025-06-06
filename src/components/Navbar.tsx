
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Gopika</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
