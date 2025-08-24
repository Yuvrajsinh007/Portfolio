import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "CafeChain",
    date: "July 2024 - April 2025",
    desc: "Built a full-stack online bidding platform with secure user authentication, real-time bidding, and dynamic auction listings. Followed the Agile development model to ensure continuous delivery and team collaboration. Implemented features like bid history, product management, and auction countdown timers for an interactive user experience.",
    image: "Project_Images/CafeChain.png", // Replace with real image path
    link: "https://github.com/Yuvrajsinh007/BidSphere", // Replace with real link
    type: "GitHub"
  },
  {
    title: "BidSphere",
    date: "July 2024 - April 2025",
    desc: "Built a full-stack online bidding platform with secure user authentication, real-time bidding, and dynamic auction listings. Followed the Agile development model to ensure continuous delivery and team collaboration. Implemented features like bid history, product management, and auction countdown timers for an interactive user experience.",
    image: "Project_Images/BidSphere.png", // Replace with real image path
    link: "https://github.com/Yuvrajsinh007/BidSphere", // Replace with real link
    type: "GitHub"
  },
  {
    title: "Expense Tracker",
    date: "May 2025 - June 2025",
    desc: "Built a full-stack expense tracking application with intuitive user interface and real-time data visualization. Implemented core features like expense logging, editing, filtering, and deletion, along with category-based pie charts and spending summaries. Integrated frontend and backend using Axios and Express APIs with MongoDB as the database. Followed the Agile development model to enable iterative feature deployment and progress tracking. Upcoming enhancements include secure user authentication and personalized expense management.",
    image: "Project_Images/expense-tracker.png",
    link: "https://expense-tracker-app-3iic.onrender.com", // Replace with real repo
    type: "Website"
  },
  {
    title: "WanderLust",
    date: "July 2021 - March 2022",
    desc: "Discord bot with Spotify integration, Shoukaku audio streaming, and 580k+ server support.",
    image: "Project_Images/wanderlust.png",
    link: "https://wanderlust-u9t9.onrender.com/listings", // Replace with real repo
    type: "Website"
  },
  {
    title: "PrepHire",
    date: "August 2024 - Present",
    desc: "Building an AI-driven hiring platform with automated tests",
    image: "Project_Images/PrepHire.png", // Replace with real image path
    link: "https://github.com/Yuvrajsinh007/PrepHire", // Replace with real link
    type: "GitHub"
  },
];


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-4 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <div className="max-w-6xl ml-auto mb-[7%] mx-auto flex flex-col md:flex-row md:items-center justify-between">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm YUVRAJSINH JADEJA</h1>
            <p className="text-xl text-gray-600 mb-8">
              I build modern web applications using AI, React, and full-stack tools.
            </p>
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl inline-block">
              View Projects
            </a>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/profile.jpg"
              alt="YUVRAJSINH JADEJA"
              className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg"/>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-justify">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm <b>YUVRAJSINH JADEJA</b>, a passionate software developer with strong expertise in <b>JavaScript</b>, <b>React.js</b>, <b>Node.js</b> and <b>Java</b>. I specialize in building scalable full-stack web applications and AI-powered solutions. My portfolio includes projects like <b>Bidsphere</b> (an online bidding platform), an <b>Expense Tracker</b>, <b>WanderLust</b> (an Airbnb-style rental booking platform), and an advanced <b>AI Resume Analyzer with Interview Simulation</b>. I thrive on solving real-world problems through clean code, modern technologies, and user-focused design.
          <br /><br />
          My goal is to keep learning, innovating, and contributing to impactful digital experiences that make a difference.
        </p>

      </section>


      {/* Projects */}
      <section id="projects" className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-y-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block mb-2 text-sm bg-gray-200 px-3 py-1 rounded-full">Let's Connect</span>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-6">
          Have a project in mind or just want to chat? Feel free to reach out through <strong>LinkedIn</strong>.
        </p>
        <a
          href="https://www.linkedin.com/in/jadeja007/" // replace with your LinkedIn
          target="_blank"
          className="bg-black text-white px-5 py-3 rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl inline-block"
        >
          Connect on LinkedIn
        </a>
      </section>

      
      <footer className="bg-gray-100 py-8 text-center mt-16">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} YUVRAJSINH JADEJA. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
