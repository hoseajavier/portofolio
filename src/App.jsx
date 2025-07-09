import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaAndroid,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaChevronDown,
  FaCode,
  FaLaptopCode,
  FaMobile,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";
import hosea from "./assets/hosea.jpg";
import nyisa from "./assets/nyisa.png";
import tepi from "./assets/logo-tepi.jpg";
import { motion } from "framer-motion"; // BARU: Impor motion dari framer-motion

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "toolkit", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: FaLaptopCode },
    { id: "about", label: "About", icon: FaCode },
    { id: "toolkit", label: "Toolkit", icon: FaMobile },
    { id: "projects", label: "Projects", icon: FaGithub },
  ];

  const toolkitItems = [
    // ... (Isi toolkitItems tidak perlu diubah)
    {
      icon: FaHtml5,
      name: "HTML",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaCss3Alt,
      name: "CSS",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaJs,
      name: "JavaScript",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: FaReact,
      name: "React.js",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-sky-400",
      bgColor: "bg-sky-50",
    },
    {
      icon: FaAndroid,
      name: "Kotlin (Android)",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: SiMysql,
      name: "MySQL",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaGitAlt,
      name: "Git",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      color: "text-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      icon: SiPostman,
      name: "REST API",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaPython,
      name: "Python",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    { icon: FaJava, name: "Java", color: "text-red-500", bgColor: "bg-red-50" },
  ];

  // BARU: Definisikan varian animasi untuk seksi
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // BARU: Definisikan varian untuk container item (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // BARU: Definisikan varian untuk setiap item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900 scroll-smooth">
      {/* Header tidak perlu diubah */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 100
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        {/* ... (Isi header Anda) ... */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hosea Javier
              </h1>
            </div>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section tidak perlu diubah karena sudah terlihat dari awal */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 relative overflow-hidden"
      >
        {/* ... (Isi Hero Section Anda) ... */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <FaCode className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-600" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Hello, I'm Hosea Javier
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            I'm a passionate software developer who loves building
            <span className="text-blue-600 font-semibold"> web</span> and
            <span className="text-purple-600 font-semibold"> mobile</span>{" "}
            applications with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
          <div className="animate-bounce">
            <FaChevronDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* DIUBAH: Enhanced About Section dengan animasi */}
      <motion.section
        id="about"
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-white relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-7xl">
          {/* ... (Isi About Section Anda) ... */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  About Me
                </h3>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Passionate Developer with a Vision
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  I am a Computer Science student with hands-on experience in
                  building responsive and user-friendly web interfaces. My
                  expertise spans across modern web technologies, with a strong
                  focus on creating intuitive and high-performance applications.
                </p>
                <p>
                  Proficient in HTML, CSS, JavaScript, Kotlin, Tailwind, and
                  React, I bring a unique blend of technical skills and creative
                  problem-solving to every project. I'm passionate about clean
                  code, elegant design, and seamless user experiences.
                </p>
                <p>
                  I believe in continuous learning and collaboration, always
                  staying updated with the latest industry trends and best
                  practices to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <FaCode className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    Clean Code
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <FaLaptopCode className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    Modern Design
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                  <FaMobile className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    Responsive
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 scale-105"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img
                    src={hosea}
                    alt="Hosea Javier"
                    className="w-full max-w-[280px] object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* DIUBAH: Enhanced Toolkit Section dengan animasi */}
      <motion.section
        id="toolkit"
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            {/* ... (Isi header Toolkit) ... */}
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Technologies
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Toolkit
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Here's a collection of technologies and tools I work with to bring
              ideas to life
            </p>
          </div>

          {/* DIUBAH: Grid dengan stagger animation */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {toolkitItems.map((item, index) => (
              <motion.div
                key={index}
                className={`group relative ${item.bgColor} p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
                variants={itemVariants} // Terapkan animasi per item
              >
                {/* ... (Isi item toolkit) ... */}
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`p-3 rounded-xl ${item.color} bg-white/80 group-hover:bg-white transition-all duration-300`}
                  >
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800 text-center leading-tight">
                    {item.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        </div>
      </motion.section>

      {/* DIUBAH: Enhanced Projects Section dengan animasi */}
      <motion.section
        id="projects"
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            {/* ... (Isi header Projects) ... */}
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Portfolio
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent work and projects that showcase my
              skills and passion
            </p>
          </div>

          {/* DIUBAH: Grid dengan stagger animation */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Nyisa Project */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={nyisa}
                  alt="Nyisa Project"
                  className="w-full h-64 sm:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900">Nyisa</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Web App
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A web platform connecting food businesses with consumers to
                  reduce food waste. Features location-based search, discount
                  pricing, and real-time notifications for approaching
                  expiration dates.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js", "JavaScript", "REST API", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="https://github.com/Roberttwil/Nyisa-PPL-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>

            {/* TePi Project */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tepi}
                  alt="Teguk Pintar Logo"
                  className="w-full h-64 sm:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900">
                    Teguk Pintar (TePi)
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      Mobile App
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An Android app that helps users make healthier beverage
                  choices by analyzing nutrition labels using machine learning.
                  Provides health ratings (Nutri-Score A-E) and promotes better
                  drink options.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Kotlin", "Android Studio", "Machine Learning"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="https://github.com/MSATRIAD/TePi-Capstone-Project-Repository"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer tidak perlu diubah */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting
                projects.
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 mb-8">
              <a
                href="https://github.com/hoseajavier"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/hosea-javier-7a98771b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm sm:text-base">
                © {new Date().getFullYear()} Hosea Javier. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
