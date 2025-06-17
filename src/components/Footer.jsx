import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
  ];

  const services = [
    'Frontend Development',
    'React Applications',
    'Content Creation',
    'Graphic Design',
    'Web Design',
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/susangautam',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/susangautam/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      href: 'mailto:off.susangautam@gmail.com',
      label: 'Email',
      color: 'hover:text-primary-600',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Background gradient only in dark mode */}
      <div className="hidden dark:absolute dark:inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Animated background elements - only in dark mode */}
      <div className="hidden dark:absolute dark:inset-0 dark:opacity-10">
        <div className="dark:absolute dark:top-1/4 dark:left-1/4 dark:w-64 dark:h-64 dark:bg-primary-500 dark:rounded-full dark:mix-blend-multiply dark:filter dark:blur-xl dark:animate-pulse"></div>
        <div className="dark:absolute dark:bottom-1/4 dark:right-1/4 dark:w-64 dark:h-64 dark:bg-secondary-500 dark:rounded-full dark:mix-blend-multiply dark:filter dark:blur-xl dark:animate-pulse dark:delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <img
              src="logo-01.png"
              alt="Susan Gautam Logo"
              className="w-32 h-32 object-contain"
              loading="lazy"
            />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Frontend Developer & Graphic Designer passionate about creating beautiful,
              functional digital experiences that make a difference.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform focus:outline-none focus:ring-2 focus:ring-primary-400 rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <section aria-label="Services offered">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Info */}
          <address className="not-italic" aria-label="Contact information">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Email
                </h4>
                <a
                  href="mailto:off.susangautam@gmail.com"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  off.susangautam@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </h4>
                <p>Butwal, Rupandehi</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-400 mb-1">Availability</h4>
                <p className="font-medium text-green-400">Available for Projects</p>
              </div>
            </div>
          </address>
        </div>

        {/* Newsletter Signup */}
        <section className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8" aria-label="Newsletter signup">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to get the latest updates about my work and insights.
            </p>
            <form className="flex space-x-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} Susan Gautam. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
