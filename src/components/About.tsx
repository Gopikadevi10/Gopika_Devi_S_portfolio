
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate web developer with a strong foundation in both frontend and backend technologies. 
                My journey in web development started with a curiosity about how websites work, and has evolved 
                into a deep love for creating meaningful digital experiences.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in writing clean, efficient code and staying up-to-date with the latest web technologies. 
                My educational background has provided me with a solid understanding of programming fundamentals, 
                while my hands-on projects have taught me the practical skills needed in real-world development.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, 
                and exploring creative solutions to complex problems. I'm always eager to take on new challenges 
                and collaborate with fellow developers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fresh Graduate in Computer Science</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Passionate about Frontend Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Love for Clean Code & User Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Always Learning New Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
