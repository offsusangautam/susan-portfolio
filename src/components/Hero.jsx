import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Dark mode background gradient */}
      <div className="hidden dark:block absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-secondary-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1 animate-bounce-subtle">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src="/photo.jpg"
                    alt="Susan Gautam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gray-900 dark:text-white">Hello, I'm </span>
            <span className="text-primary-600 dark:text-primary-400">
              Susan Gautam
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up delay-100">
            Frontend Developer & Graphic Designer
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            Passionate about creating beautiful, functional web experiences and stunning visual designs. 
            I bring ideas to life through code and creativity.
          </p>

          {/* CTA Button with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-300">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              View My Work
            </motion.button>
          </div>

          {/* Social Media Icons with Framer Motion Animation */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up delay-400">
            {[
              { icon: Github, href: 'https://github.com/offsusangautam' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/susangautam/' },
              { icon: Mail, href: 'mailto:off.susangautam@gmail.com' }
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce-subtle cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
