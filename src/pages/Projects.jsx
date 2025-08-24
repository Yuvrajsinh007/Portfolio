import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "PrepArc",
    date: "August 2024 - Present",
    desc: "Building an AI-driven hiring platform with automated tests, interviews",
    image: "/prep.png", // Replace with real image path
    link: "https://preparc.app", // Replace with real link
    type: "Website"
  },
  {
    title: "Soul Music",
    date: "July 2021 – March 2022",
    desc: "Discord bot with Spotify integration, Shoukaku audio streaming, and 580k+ server support.",
    image: "/soulmusic.png",
    link: "https://github.com/yourname/soulmusic", // Replace with real repo
    type: "GitHub"
  },
];

const Projects = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
