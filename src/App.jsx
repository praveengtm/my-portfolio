import React, { useState, useEffect, useRef } from 'react';
import myPhoto from "./assets/Praveen_pic.webp";
import resumePDF from "./assets/Praveen_Gautam_IISc.pdf";

// Main App Component
const App = () => {
  // Data for sections (can be moved to separate files in a larger project)
  const heroTitles = ["Machine Learning Engineer"];
  const skillsData = {
    "Domain": ["Machine Learning", "Deep Learning", "Computer Vision", "GenAI"],
    "Language": ["Python", "C", "C++"],
    "Frameworks & Libraries": ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    "Tools & Platforms": ["Git", "AWS", "Jupyter", "VS Code"],
  };
  const projectsData = [
    {
      title: "Video Quality Assessment using Vision Language Model Blip-2",
      description: "Developed a multimodal deep learning framework for video quality assessment using a frozen image encoder, pre-trained large language models (LLMs), and a trainable Querying Transformer (Q-former). The model outputs the vision language embeddings, which is regressed with MOS score to get video quality.",
      techStack: ["PyTorch", "Python", "OpenCV"],
      githubLink: "https://github.com/praveengtm/MA-LMM",
      liveDemoLink: "#" // Placeholder
    },
    {
      title: "Finetuned ResNet-18 model for glitch detection on images",
      description: "Developed a binary image classification model to detect glitches in video frames by fine-tuning a pretrained ResNet-18 on a custom dataset.",
      techStack: ["Python", "PyTorch", "ResNet", "Computer Vision"],
      githubLink: "https://github.com/yourusername/recommendation-system",
      liveDemoLink: "#" // Placeholder
    },
    {
      title: "Smart Farming using Machine Learning and IOT",
      description: "Recommended suitable crop based on the data of temperature, humidity and moisture using different ML algorithm: Decision Trees, Feedforward Neural network and also displayed the real time data using MQTT protocol to the user.",
      techStack: ["TensorFlow", "Python", "OpenCV", "Django", "MQTT"],
      githubLink: "https://github.com/praveengtm/Automated-Farming",
      liveDemoLink: "#" // Placeholder
    },
    // {
    //   title: "Portfolio Website (This one!)",
    //   description: "A responsive and interactive personal portfolio website showcasing skills, projects, and experiences.",
    //   techStack: ["React", "Tailwind CSS", "JavaScript"],
    //   githubLink: "https://github.com/yourusername/your-portfolio",
    //   liveDemoLink: "#" // This is the live demo!
    // }
  ];
  // const blogPosts = [
  //   {
  //     title: "Understanding Attention Mechanisms in Transformers",
  //     date: "July 10, 2024",
  //     summary: "A deep dive into the self-attention mechanism and its role in modern NLP models like Transformers.",
  //     tags: ["NLP", "Deep Learning", "Transformers"],
  //     readMoreLink: "https://medium.com/@yourusername/attention-mechanisms" // Placeholder
  //   },
  //   {
  //     title: "Getting Started with PyTorch for Beginners",
  //     date: "June 25, 2024",
  //     summary: "A comprehensive guide for beginners to set up PyTorch and build their first neural network.",
  //     tags: ["PyTorch", "Machine Learning", "Tutorial"],
  //     readMoreLink: "https://dev.to/yourusername/pytorch-for-beginners" // Placeholder
  //   }
  // ];
  const timelineEvents = [
    {
      type: "Education",
      title: "M.Tech in Artificial Intelligence",
      institution: "Indian Institute of Science (IISc), Bengaluru",
      duration: "Aug 2023 - May 2025",
      description: "Specializing in Deep Learning, Computer Vision, and Natural Language Processing."
    },
    
    {
      type: "Research Experience",
      title: "Project Associate",
      institution: "Visual Information Processing Lab",
      duration: "May 2025 - Pressent",
      description: "Working on developing multimodal vison language model for Video Quality Assessment"},
   
    // {
    //   type: "Education",
    //   title: "B.Tech in Computer Science Engineering",
    //   institution: "IIT Bombay",
    //   duration: "Aug 2019 - May 2023",
    //   description: "Graduated with Honors. Focused on Machine Learning and Data Science. Relevant coursework: Algorithms, Data Structures, AI."
    // },
    // {
    //   type: "Internship",
    //   title: "Software Development Intern",
    //   institution: "Microsoft",
    //   duration: "May 2022 - Aug 2022",
    //   description: "Developed and deployed a new feature for Azure Cloud platform, improving user experience for enterprise clients."
    // }
  ];

  // State for typewriter effect
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // State for back-to-top button visibility
  const [showBackToTop, setShowBackToTop] = useState(0); // Changed to number for consistency

  // Typewriter effect logic
  useEffect(() => {
    const handleType = () => {
      const i = currentTitleIndex % heroTitles.length;
      const fullText = heroTitles[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentTitleIndex, heroTitles]);

  // Scroll event listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Contact form submission handler (client-side only)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend or service like Formspree
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset(); // Clear the form
  };

  // Utility function for smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter antialiased w-full">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow-md py-4 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Praveen Gautam</div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Skills', 'Projects', 'Blogs', 'Timeline', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.toLowerCase());
                }}
                className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out font-medium"
              >
                {section}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            {/* You can add a mobile menu toggle here */}
            <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white overflow-hidden w-screen">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Background pattern/illustration */}
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width=".7" height=".7" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.2)"></circle>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <img
            src={myPhoto} // Placeholder image
            alt="Profile Picture"
            className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-yellow-300">Praveen Gautam</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6">
            <span className="font-semibold">{currentText}</span>
            <span className="animate-blink">|</span>
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Passionate about building intelligent systems and exploring the frontiers of AI.
          </p>
          <a
            href={resumePDF} // Replace with your resume path
            download="PraveenGautam_Resume.pdf"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Download Resume
          </a>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0 animate-slide-in-left">
              <img
                src={myPhoto} // Placeholder image
                alt="About Me"
                className="rounded-lg shadow-xl w-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed animate-slide-in-right text-justify">
              <p className="mb-4">
              I am Praveen Gautam, a Machine Learning Engineer with an M.Tech in Artificial Intelligence from IISc Bangalore, and I hold a B.E. in Electronics and Communications Engineering from IOE Pulchowk Campus. During my time at IISc, I was part of the Visual Information Processing Lab, where I worked extensively on computer vision and image processing projects.
              </p>
              <p className="mb-4">
              As part of an industry collaboration project, I spent a year working on image and video quality assessment, where I contributed to meeting performance goals by fine-tuning deep learning models for specific applications. This involved using suitable loss functions, optimizing training parameters, addressing challenges like data imbalance and domain shift, and deploying solutions that deepened my practical understanding of the field.  
               </p>
               <p className="mb-4">
               In addition to research, I pursued advanced coursework in Machine Learning, Deep Learning, and Computer Vision, which built a strong mathematical and algorithmic foundation.
              </p>
              <ul className="list-disc list-inside space-y-2">

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-200 pb-2">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:bg-indigo-200 hover:text-indigo-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-base text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.207.683-.456 0-.227-.007-.75-.011-1.484-2.775.605-3.36-1.34-3.36-1.34-.454-1.15-.111-1.15-.111-1.15.31-.215.024-.211.024-.211.345.023.525.353.525.353.305.524.8.373.992.284.03-.22.12-.373.22-.46-.765-.092-1.57-.383-1.57-1.707 0-.378.135-.686.357-.922-.036-.092-.122-.46-.036-1.017 0 0 .288-.092.94-.355.27-.07.55-.104.83-.105.28.001.56.035.83.105.65.263.94.355.94.355.086.557 0 .925-.036 1.017.22.236.357.544.357.922 0 1.33-805 1.614-1.57.17-.09.15-.22.21-.46.23-.08.117-.207-.117-.456-.683-.007-1.484-.011-1.484-1.75-.007-1.484-2.865-8.18-6.839-9.504Z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    {project.liveDemoLink && project.liveDemoLink !== "#" && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium flex items-center transition duration-300"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section
      <section id="blogs" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <p className="text-gray-700 mb-4 text-base">{blog.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={blog.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Timeline</h2>
          <div className="relative wrap overflow-hidden p-10 h-full flex flex-col-reverse">
            <div className="border-2-2 absolute border-opacity-20 border-indigo-200 h-full border left-1/2 transform -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">{index + 1}</h1>
                </div>
                <div className="order-1 bg-gray-50 rounded-lg shadow-xl w-5/12 px-6 py-4 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="mb-2 font-bold text-xl text-indigo-600">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">{event.institution}</p>
                  <p className="text-xs text-gray-500 mb-2">{event.duration}</p>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Contact Me</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-lg text-gray-700 mb-4">Connect with me:</p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/praveen-gautam/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://github.com/praveengtm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.207.683-.456 0-.227-.007-.75-.011-1.484-2.775.605-3.36-1.34-3.36-1.34-.454-1.15-.111-1.15-.111-1.15.31-.215.024-.211.024-.211.345.023.525.353.525.353.305.524.8.373.992.284.03-.22.12-.373.22-.46-.765-.092-1.57-.383-1.57-1.707 0-.378.135-.686.357-.922-.036-.092-.122-.46-.036-1.017 0 0 .288-.092.94-.355.27-.07.55-.104.83-.105.28.001.56.035.83.105.65.263.94.355.94.355.086.557 0 .925-.036 1.017.22.236.357.544.357.922 0 1.33-805 1.614-1.57.17-.09.15-.22.21-.46.23-.08.117-.207-.117-.456-.683-.007-1.484-.011-1.484-1.75-.007-1.484-2.865-8.18-6.839-9.504Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="praveengtm31@gmail.com" className="text-gray-600 hover:text-red-600 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12.713l-11.75 7.287h23.5l-11.75-7.287zm0-1.426l-11.75-7.287h23.5l-11.75 7.287z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Praveen Gautam. All rights reserved.</p>
          <p className="text-xs opacity-75">
          </p>
        </div>
      </footer>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}

      {/* Tailwind CSS Custom Animations (add this to your main CSS file or a style tag if not using PostCSS) */}
      <style>{`
        /* Universal reset for box-sizing */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Explicitly reset margin/padding for html and body */
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100vw; /* Ensure they take full viewport width */
          min-height: 100vh; /* Ensure they take full viewport height */
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(-20px);
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(20px);
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Timeline specific styles */
        .left-timeline {
            transform: translateX(-50%);
        }
        .right-timeline {
            transform: translateX(50%);
        }
        .left-timeline .order-1 {
            order: 1;
        }
        .right-timeline .order-1 {
            order: 2;
        }

        .left-timeline .order-1:nth-child(2) {
            order: 2;
        }
        .right-timeline .order-1:nth-child(2) {
            order: 1;
        }

        @media (max-width: 768px) {
            .left-timeline, .right-timeline {
                transform: translateX(0);
                flex-direction: column;
                align-items: flex-start;
            }
            .left-timeline .order-1, .right-timeline .order-1 {
                width: 100%;
                text-align: left;
                order: 1; /* Reset order for mobile */
            }
            .left-timeline .z-20, .right-timeline .z-20 {
                margin-left: 0;
                margin-bottom: 1rem;
                order: 2; /* Move dot below content for mobile */
            }
            .border-2-2 {
                left: 1.5rem; /* Adjust line position for mobile */
            }
        }
      `}</style>
    </div>
  );
};

export default App;
