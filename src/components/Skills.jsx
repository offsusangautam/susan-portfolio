import React from 'react';
import {
  Code,
  Palette,
  Layers,
  Monitor,
  Globe,
  Brush,
  Zap,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Figma', level: 92 },
        { name: 'Adobe InDesign', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Adobe XD', level: 88 },
      ],
    },
    {
      title: 'Development Tools',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vite', level: 88 },
        { name: 'Webpack', level: 82 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Design Skills',
      icon: Brush,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'UI/UX Design', level: 92 },
        { name: 'Logo Design', level: 95 },
        { name: 'Brand Identity', level: 90 },
        { name: 'Print Design', level: 88 },
        { name: 'Prototyping', level: 85 },
        { name: 'Color Theory', level: 95 },
      ],
    },
  ];

  const logoSkills = [
    { name: 'HTML', logo: 'html.png' },
    { name: 'CSS', logo: 'css.png' },
    { name: 'JavaScript', logo: 'js.png' },
    { name: 'ReactJS', logo: 'react.png' },
    { name: 'TailwindCSS', logo: 'tailwind.png' },
    { name: 'Git', logo: 'git.png' },
    { name: 'Github', logo: 'github.png' },
    { name: 'Photoshop', logo: 'photoshop.png' },
    { name: 'Illustrator', logo: 'illustrator.png' },
    { name: 'Figma', logo: 'figma.png' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and creative capabilities
          </p>
        </div>

        {/* Logo Skills Grid */}
        <div className="flex justify-center flex-wrap gap-6 mb-16">
          {logoSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-default"
              aria-label={`${skill.name} skill`}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mb-2 object-contain dark:invert"
                loading="lazy"
              />
              <span className="text-gray-900 dark:text-white font-medium text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

       

        {/* Additional Expertise */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional <span className="text-primary-600 dark:text-primary-400">Expertise</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <Monitor className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Responsive Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Creating seamless experiences across all devices and screen sizes
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <Globe className="w-8 h-8 text-secondary-600 dark:text-secondary-400 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Web Performance
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Optimizing applications for speed, accessibility, and SEO
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <Layers className="w-8 h-8 text-accent-600 dark:text-accent-400 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Design Systems
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Building scalable design systems and component libraries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
