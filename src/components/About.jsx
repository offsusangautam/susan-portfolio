import React from 'react';
import { Code, Palette, Heart, Coffee, Users, Award, Download, Eye } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Crafting responsive, interactive web applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating visually stunning designs that communicate and captivate',
    },
    {
      icon: Heart,
      title: 'User-Centered Design',
      description: 'Focusing on user experience and accessibility in every project',
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and design trends',
    },
  ];

  const stats = [
    { number: 3, label: 'Years Experience' },
    { number: 50, label: 'Projects Completed' },
     {number: '200', label: 'Creative Hours' },
    { number: 3, label: 'Technologies' },
  ];

  // Animation controls for stats
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  // Count animation for numbers
  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      let start = 0;
      const end = value;
      if (start === end) return;
      let duration = 1500;
      let incrementTime = 30;
      let step = Math.ceil((end / (duration / incrementTime)));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}{value % 1 !== 0 ? '' : '+'}</span>;
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full opacity-20 blur-3xl animate-float-slow"></div>
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-secondary-300 rounded-full opacity-15 blur-3xl animate-float-slower"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover my journey as a creative professional combining technical expertise with artistic vision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              My Journey in <span className="text-primary-600 dark:text-primary-400">Tech & Design</span>
            </h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Hi there! I'm Susan, a passionate Frontend Developer and Graphic Designer who believes in the power of combining technical proficiency with creative vision. My journey began with a fascination for how design and code could work together to create meaningful digital experiences.
              </p>
              <p>
                Over the years, I've had the privilege of working on diverse projects that range from responsive web applications to comprehensive brand identity systems. Each project has taught me something new and reinforced my belief that great digital products are born from the intersection of beautiful design and clean, efficient code.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the latest design trends, contributing to open-source projects, or sharing insights about the ever-evolving world of frontend development and graphic design.
              </p>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
          >
            <img
              src="photo2.jpg"
              alt="Susan's portrait"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
              <h4 className="text-white text-2xl font-semibold mb-1">Susan Gautam</h4>
              <p className="text-primary-300">Frontend Developer & Graphic Designer</p>
            </div>
           
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0, y: 20 },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
              className="bg-white dark:bg-gray-900 p-7 rounded-xl shadow-md cursor-pointer transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-base">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
            hidden: { opacity: 0, y: 20 },
          }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-10 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map(({ number, label }, i) => (
              <motion.div
                key={i}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="space-y-2"
              >
                <div className="text-4xl lg:text-5xl font-extrabold">
                  <AnimatedNumber value={number} />
                </div>
                <div className="uppercase tracking-widest text-primary-200 font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
