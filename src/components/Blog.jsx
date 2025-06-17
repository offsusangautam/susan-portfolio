import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Lightbulb, X } from 'lucide-react';
import { marked } from 'marked';
  import { useEffect } from 'react';
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
useEffect(() => {
  if (selectedPost) {
    document.body.style.overflow = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.body.style.overflowX = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.overflowX = '';
  }

  return () => {
    document.body.style.overflow = '';
    document.body.style.overflowX = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.overflowX = '';
  };
}, [selectedPost]);



  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Frontend Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends in frontend development including micro-frontends, WebAssembly, and the evolution of JavaScript frameworks.',
      fullContent: `
         The Future of Frontend Development: Trends to Watch in 2024
        Frontend development continues to evolve at a rapid pace, driven by new technologies and changing user expectations. In 2024, several key trends are shaping the future of frontend development:
      1. Micro-Frontends
        - Enables independent development and deployment of frontend components
        - Improves scalability for large teams
        - Allows mixing different frameworks within the same application
      2. WebAssembly (Wasm)
        - Brings near-native performance to web applications
        - Enables complex computations in the browser
        - Supports languages like C++, Rust, and Go
      3. Evolution of JavaScript Frameworks
        - Next.js and Remix gaining popularity for full-stack capabilities
        - Improved server-side rendering and static site generation
        - Enhanced developer experience with better TypeScript integration
        These trends indicate a future where frontend development becomes more modular, performant, and developer-friendly. Stay ahead by exploring these technologies and incorporating them into your projects.
      `,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '3 min read',
      category: 'Development',
      featured: true
    },
    {
      id: 2,
      title: 'Design Systems: Building Consistent User Experiences',
      excerpt: 'A comprehensive guide to creating and maintaining design systems that scale across products and teams.',
      fullContent: `
        Design Systems: Building Consistent User Experiences
        Design systems are critical for maintaining consistency across digital products. Here's a comprehensive guide to building effective design systems:
      Key Components
        - UI Components: Reusable building blocks like buttons, forms, and modals
        - Style Guide: Colors, typography, spacing, and layout rules
        - Patterns: Common design patterns for navigation, search, etc.
      Implementation Strategies
        1. Establish a clear governance model
        2. Create a central repository for components
        3. Document usage guidelines and best practices
        4. Integrate with development workflows
      Benefits
        - Faster development cycles
        - Consistent user experience
        - Easier maintenance and updates
        - Improved collaboration between design and development teams
        Building a design system requires careful planning but pays dividends in product quality and development efficiency.
      `,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '2 min read',
      category: 'Design',
      featured: false
    },
    {
      id: 3,
      title: 'Optimizing React Performance: Advanced Techniques',
      excerpt: 'Deep dive into React performance optimization techniques including memoization, code splitting, and bundle analysis.',
      fullContent: `
         Optimizing React Performance: Advanced Techniques
        React applications can become sluggish if not optimized properly. Here are advanced techniques to boost performance:
      1. Memoization
        - Use React.memo for components
        - Implement useMemo and useCallback for expensive computations
        - Prevent unnecessary re-renders
      2. Code Splitting
        - Implement dynamic imports with React.lazy
        - Split routes into separate bundles
        - Load components only when needed
      3. Bundle Analysis
        - Use tools like Webpack Bundle Analyzer
        - Identify large dependencies
        - Optimize bundle size through tree-shaking
      Additional Tips
        - Virtualize long lists with react-window
        - Optimize context usage
        - Use production builds in deployment
        These techniques, when applied correctly, can significantly improve your React application's performance and user experience.
      `,
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '3 min read',
      category: 'Development',
      featured: false
    },
    {
      id: 4,
      title: 'The Psychology of Color in Digital Design',
      excerpt: 'Understanding how color psychology influences user behavior and how to apply it effectively in digital interfaces.',
      fullContent: `
         The Psychology of Color in Digital Design
        Colors play a crucial role in shaping user perceptions and behaviors in digital interfaces. Here's how to leverage color psychology:
      Color Meanings
        - Red: Urgency, passion, excitement
        - Blue: Trust, calmness, professionalism
        - Green: Growth, health, environment
        - Yellow: Optimism, attention, warmth
      Application Guidelines
        1. Choose colors that align with brand values
        2. Consider cultural color associations
        3. Ensure sufficient contrast for accessibility
        4. Use color to guide user attention
      Best Practices
        - Maintain a consistent color palette
        - Test color combinations with users
        - Follow WCAG accessibility guidelines
        - Use color to reinforce hierarchy
        By understanding and applying color psychology, designers can create more engaging and effective digital experiences.
      `,
      image: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '2 min read',
      category: 'Design',
      featured: false
    }
  ];

  const categories = [
    { name: 'Development', icon: BookOpen, count: 12 },
    { name: 'Design', icon: Lightbulb, count: 8 },
    { name: 'Trends', icon: TrendingUp, count: 5 }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const closeModal = () => setSelectedPost(null);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-primary-600 dark:text-primary-400">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing thoughts on design trends, development tips, and industry insights
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-md transition-all group">
                <div className="md:flex">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full md:w-1/2 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      {post.featured && (
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full">Featured</span>
                      )}
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-8 sticky top-20">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map(({ name, icon: Icon, count }) => (
                  <li key={name} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                    <span className="ml-auto bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full px-2 py-0.5">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

     {selectedPost && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 overflow-hidden"
  onClick={closeModal}
>
    <div
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-900 rounded-xl p-6"
  style={{ wordBreak: 'break-word' }}
>

      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <X className="w-6 h-6 text-white bg-gray-800 rounded-xl "  />
      </button>

      <img
        src={selectedPost.image}
        alt={selectedPost.title}
        className="w-full rounded-lg mb-6 max-h-48 object-cover"
      />
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {selectedPost.title}
      </h2>

      <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <div className="flex items-center space-x-1">
          <Calendar className="w-5 h-5" />
          <span>{formatDate(selectedPost.date)}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-5 h-5" />
          <span>{selectedPost.readTime}</span>
        </div>
      </div>

      <div
        className="prose dark:prose-invert max-w-none"
        style={{ overflowX: 'hidden', wordBreak: 'break-word' }}
        dangerouslySetInnerHTML={{ __html: marked(selectedPost.fullContent) }}
      />
    </div>
  </div>
)}
    </section>
  );
};

export default Blog;
