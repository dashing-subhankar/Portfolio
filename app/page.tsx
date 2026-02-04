'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, Stripe payments, and real-time inventory management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with drag & drop, real-time updates via WebSockets, and team collaboration features.',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Prisma', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'AI Chat Dashboard',
    description: 'Modern admin dashboard with AI-powered analytics, customizable charts, and responsive design.',
    tech: ['TypeScript', 'React', 'Chart.js', 'Vercel AI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'This very website! Built with modern React patterns, smooth animations, and optimized performance.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b848c1f92?w=800&h=500&fit=crop',
    link: '#',
    github: 'https://github.com/yourusername/portfolio'
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition &&
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900/50 to-slate-800 text-white overflow-x-hidden">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-ping" />
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-25 animate-bounce delay-500" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/95 border-b border-slate-700/50 supports-[backdrop-filter:blur(20px)]:bg-slate-900/80"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Subhankar Khatua
          </motion.h1>
          <ul className="flex gap-8">
            {['about', 'projects', 'contact'].map((section) => (
              <motion.li key={section}>
                <motion.a
                  href={`#${section}`}
                  className={`relative group text-sm font-medium transition-all duration-300 ${
                    activeSection === section ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 origin-left" />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* Hero */}
      <section id="hero" className="min-h-screen max-w-6xl mx-auto px-6 flex flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            FULL STACK DEVELOPER
          </motion.span>
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Crafting{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exceptional
            </span>
            <br />
            Web Experiences
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I build scalable, performant web applications with modern technologies.
            From pixel-perfect UIs to robust backends.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="px-10 py-4 border-2 border-slate-700/50 hover:border-blue-500/50 text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-3"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h3 className="text-5xl font-black mb-6">About Me</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
              Passionate Full Stack Developer
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              I specialize in creating scalable web applications with a focus on performance, accessibility,
              and delightful user experiences. With expertise in modern JavaScript ecosystem and cloud technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>React/Next.js</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>AWS/Vercel</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-20 mx-auto" />
                  <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-24 mx-auto" />
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-5xl font-black mb-6">Featured Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-xs border border-slate-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    className="flex-1 text-center px-6 py-3 border border-slate-700 hover:border-blue-400 hover:bg-blue-500/20 rounded-xl font-medium transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 rounded-xl font-medium transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-16 border border-slate-700/50 shadow-2xl"
        >
          <h3 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h3>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'd love to discuss your ideas and help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:hello@subhankarkhatua.com"
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>hello@subhankarkhatua.com</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="p-3 hover:bg-slate-700 rounded-2xl hover:text-blue-400 transition-all">📘</a>
              <a href="#" className="p-3 hover:bg-slate-700 rounded-2xl hover:text-blue-400 transition-all">💼</a>
              <a href="#" className="p-3 hover:bg-slate-700 rounded-2xl hover:text-blue-400 transition-all">🐦</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 max-w-6xl mx-auto px-6 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 Subhankar Khatua. Built with ❤️ using Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
