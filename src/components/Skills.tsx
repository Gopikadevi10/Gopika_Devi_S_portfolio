
const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90, color: 'bg-orange-500' },
    { name: 'CSS3', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'PHP', level: 70, color: 'bg-purple-600' },
    { name: 'MySQL', level: 75, color: 'bg-blue-600' },
    { name: 'Git', level: 80, color: 'bg-red-500' },
    { name: 'Responsive Design', level: 85, color: 'bg-green-500' },
  ];

  const tools = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'PHP', 'MySQL', 
    'Git', 'GitHub', 'VS Code', 'Figma', 'Bootstrap', 'Tailwind CSS'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center hover-scale"
                  >
                    <div className="text-3xl mb-2">⚡</div>
                    <span className="text-gray-700 font-medium text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
