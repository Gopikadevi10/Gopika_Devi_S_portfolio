
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform built with React and PHP backend, featuring user authentication, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      technologies: ['React', 'PHP', 'MySQL', 'Bootstrap'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing web development projects with modern design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A React-based task management application with drag-and-drop functionality, local storage, and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online reservation system, menu display, and contact forms.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
