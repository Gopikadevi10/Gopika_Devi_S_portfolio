import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-purple-600">Gopika</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Turning code into clean, interactive websites — I'm a passionate
                <span className="text-purple-600 font-semibold"> Web Developer</span> building modern, user-friendly interfaces.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                  onClick={() => window.open('/Gopika_Resume.pdf', '_blank')} // Replace with actual path if different
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Gopikadevi10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-id" // Replace this
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:your.email@example.com" // Replace this
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-pulse opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-white rounded-full shadow-2xl flex items-center justify-center relative">
                <div className="text-8xl">👩‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
