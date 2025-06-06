import { Award } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: 'PHP with MySQL',
      issuer: 'Great Learning',
      date: '2023',
      description: 'Comprehensive course covering PHP fundamentals, MySQL database integration, and web application development.',
      badge: '🏆',
      image: '/certificates/php-mysql.png'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Great Learning',
      date: '2023',
      description: 'User interface and user experience design principles, wireframing, prototyping, and design thinking.',
      badge: '🎨',
      image: '/certificates/uiux.png'
    },
    {
      title: 'Oracle AI Certified Foundation Associate',
      issuer: 'Oracle',
      date: '2024',
      description: 'Fundamental certification covering Artificial Intelligence concepts and Oracle cloud AI tools.',
      badge: '🤖',
      image: '/certificates/oracle-ai.png'
    },
    {
      title: 'Introduction to Industry 4.0 and IoT',
      issuer: 'SWAYAM (Elite + Silver)',
      date: '2024',
      description: 'Comprehensive understanding of smart manufacturing, cyber-physical systems, IoT, and Industry 4.0 standards.',
      badge: '🌐',
      image: '/certificates/industry4-iot.png'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-scale bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{cert.badge}</div>
                    <div>
                      <CardTitle className="text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-purple-600 font-medium">
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                  <Award className="text-purple-600" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="rounded-lg border mt-2 hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
