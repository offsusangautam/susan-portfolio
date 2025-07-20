import React, { useState, useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'UI/UX', label: 'UI/UX' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'graphics', label: 'Graphics' },
  // add other categories as needed
];

const projects = [
 
  

  // Your second list projects mapped here (adjust category & add repoUrl/liveUrl if applicable)
  {
    id: 3,
    title: 'Interior Designing',
    description: 'A detailed project showcasing modern and creative interior designs.',
    category: 'desktop', // assuming desktop or web? Change as needed
    image: 'interior.jpg',
    liveUrl: null,
    repoUrl: 'https://github.com/susangautam/Interior-Design-Project',
    featured: false,
  },
  {
    id: 4,
    title: '100 Mini Projects',
    description: '100 mini projects using HTML, CSS, and JavaScript.',
    category: 'web',
    image: 'web.jpg',
    liveUrl: null,
    repoUrl: 'https://github.com/susangautam/Web-Dev-Challange',
    featured: false,
  },
  {
    id: 5,
    title: 'Graphics Designing',
    description: 'Here are some of my Graphics Designing Projects.',
    category: 'graphics',
    image: 'graphics-designing.png',
    liveUrl: 'https://www.behance.net/susangautam1',
    repoUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: 'Alime Project',
    description: 'This is a clone of the Alime project.',
    category: 'web',
    image: 'alime.png',
    liveUrl: null,
    repoUrl: 'https://github.com/susangautam/Alime-project',
    featured: false,
  },
  {
    id: 7,
    title: 'Story AI Project',
    description: 'AI tool for generating short stories.',
    category: 'web',
    image: 'story ai.png',
    liveUrl: 'https://story-ai-0427.netlify.app/',
    repoUrl: null,
    featured: true,
  },
  {
    id: 8,
    title: 'E Commerce Project',
    description: 'Ongoing E-commerce project using React',
    category: 'web',
    image: 'ecommerce.png',
    liveUrl: null,
    repoUrl: 'https://github.com/susangautam/ecommerce',
    featured: false,
  },
  {
    id: 9,
    title: 'Travel APP',
    description: 'Travel Mobile APP UI',
    category: 'UI/UX',
    image: 'TRAVEL-app.png',
    liveUrl: 'https://www.figma.com/design/p21WAEqHlz70sQxjoLvBY7/smart-app?node-id=1-11&t=dv71PqwbWa8o8n7N-1',
    repoUrl: null,
    featured: false,
  },
  {
    id: 10,
    title: 'Portfolio Site',
    description: 'Portfolio Site UI',
    category: 'UI/UX',
    image: 'portfolio-ui.png',
    liveUrl: 'https://www.figma.com/design/KQGmujYB9dIBSUSAQ0CtMG/Untitled?node-id=0-1&t=S28CCUfawM8f7r6p-1',
    repoUrl: null,
    featured: false,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-200 dark:bg-gray-900 rounded-lg">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary dark:text-white">Projects</h2>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <p className="text-white line-clamp-2 mt-1">{project.description}</p>
                  <div className="mt-4 flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live project"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project repository"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Filter Buttons */}
      <div className="mb-12 flex justify-center space-x-4 flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            disabled={activeFilter === filter.id}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white shadow-md cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-2">{project.description}</p>
              <div className="mt-3 flex space-x-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project repository"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Projects;
