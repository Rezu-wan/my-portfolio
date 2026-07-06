"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// GitHub data based on your profile
const GITHUB_USER = "Rezu-wan";
const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/162793937?v=4";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

// Your projects from GitHub
const PROJECTS = [
  {
    id: 1,
    name: "Project_AUAH",
    description: "A dynamic JavaScript project with 6 stars on GitHub. Interactive and feature-rich application.",
    stars: 6,
    language: "JavaScript",
    url: `${GITHUB_URL}/Project_AUAH`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/Project_AUAH"
  },
  {
    id: 2,
    name: "g3-architects",
    description: "HTML-based architect website design. Clean, modern layout for architectural portfolio.",
    stars: 2,
    language: "HTML",
    url: `${GITHUB_URL}/g3-architects`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/g3-architects"
  },
  {
    id: 3,
    name: "Portfolio",
    description: "Test portfolio site - the foundation of what you're seeing now. Built with HTML and CSS.",
    stars: 2,
    language: "HTML",
    url: `${GITHUB_URL}/Portfolio`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/Portfolio"
  },
  {
    id: 4,
    name: "assignment-1",
    description: "CSS-focused project demonstrating styling expertise and creative design implementations.",
    stars: 2,
    language: "CSS",
    url: `${GITHUB_URL}/assignment-1`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/assignment-1"
  },
  {
    id: 5,
    name: "git-1",
    description: "HTML project showcasing version control workflows and Git best practices.",
    stars: 2,
    language: "HTML",
    url: `${GITHUB_URL}/git-1`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/git-1"
  },
  {
    id: 6,
    name: "Project-1",
    description: "Foundation project demonstrating core development skills and clean code practices.",
    stars: 1,
    language: "HTML",
    url: `${GITHUB_URL}/Project-1`,
    image: "https://opengraph.githubassets.com/1/Rezu-wan/Project-1"
  }
];

// Skills based on your languages and common tech
const SKILLS = [
  { name: "JavaScript", level: 90, icon: "JS" },
  { name: "HTML5", level: 95, icon: "HT" },
  { name: "CSS3", level: 90, icon: "CS" },
  { name: "React", level: 85, icon: "Re" },
  { name: "Next.js", level: 80, icon: "N" },
  { name: "Git", level: 85, icon: "Gi" },
  { name: "TypeScript", level: 75, icon: "TS" },
  { name: "Node.js", level: 70, icon: "No" }
];

// Social links
const SOCIALS = [
  { name: "GitHub", url: GITHUB_URL, icon: "🐙" },
  { name: "Email", url: "mailto:rezuwan@example.com", icon: "📧" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RT
            </a>
            <div className="flex gap-6">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className={`mb-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
            <Image
              src={GITHUB_AVATAR}
              alt={GITHUB_USER}
              width={150}
              height={150}
              className="rounded-full border-4 border-purple-500 shadow-2xl mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-200`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Md Rezuwan Tahmed
            </span>
          </h1>

          <p className={`text-2xl md:text-3xl text-purple-300 mb-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-400`}>
            Full-Stack Developer
          </p>

          <p className={`text-xl text-gray-400 mb-8 max-w-2xl mx-auto ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-600`}>
            🎯 Focusing | Building modern web applications with passion and precision
          </p>

          <div className={`flex gap-4 justify-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-800`}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50"
            >
              View GitHub
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
            >
              See Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hey there! I'm <span className="text-purple-400 font-semibold">Md Rezuwan Tahmed Rezu-wan</span>, a passionate developer based in <span className="text-pink-400">Dhaka</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a focused developer who loves building modern, responsive web applications. With 23 repositories on GitHub, I'm constantly learning and improving my craft.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My journey involves working with JavaScript, HTML, CSS, and exploring modern frameworks like React and Next.js. I believe in clean code, best practices, and continuous improvement.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">📍 Location</span>
                  <span className="font-semibold">Dhaka</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">📦 Repositories</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">⭐ Stars Earned</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">👥 Followers</span>
                  <span className="font-semibold">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <span className="text-6xl">{project.language === "JavaScript" ? "📜" : project.language === "HTML" ? "🌐" : project.language === "CSS" ? "🎨" : "💻"}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                      {project.language}
                    </span>
                    <span className="text-yellow-400 flex items-center gap-1">
                      ⭐ {project.stars}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              View All Projects on GitHub
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-105"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-semibold">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
            <p className="text-gray-400 mb-4">
              Feel free to reach out through any of these platforms. I typically respond within 24 hours.
            </p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              github.com/{GITHUB_USER} →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Md Rezuwan Tahmed Rezu-wan. Built with Next.js & Tailwind CSS.
          </p>
          <p className="mt-2">
            <a href={GITHUB_URL} className="text-purple-400 hover:text-purple-300 transition-colors">
              View source on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
