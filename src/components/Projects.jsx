import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

// Project Data (can be moved to /src/data/projects.js if you want)
const projects = [
  {
    title: "Hospital Management System",
    description:
      "A web-based system to manage patient records, appointments, and hospital operations efficiently.Includes admin dashboard, patient registration, and doctor management features.",
    image: "/hospital.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Restfull API"],
    demo: "https://hospital-management-system-plum-mu.vercel.app/",
    github: "https://github.com/nilesh21-dhankar/Hospital_Management_System",
  },
  {
    title: "Job Portral",
    description:
      "A platform where users can search and apply for jobs while recruiters can post job listings.Includes authentication, job filtering, and application tracking system.",
    image: "/job.png",
    tech: ["React", "Express", "MongoDB", "JWT", "Node.js"],
    demo: "https://job-portral-three.vercel.app",
    github: "https://github.com/nilesh21-dhankar/JOB-PORTRAL",
  },
  {
    title: "ZOMOTO",
    description:
      "An online system for browsing restaurants and booking tables in advance.Includes restaurant listing, booking management, and user-friendly interface.",
    image: "/zomoto.png",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "React.js"],
    demo: "https://zomoto-app-psi.vercel.app/",
    github: "https://github.com/nilesh21-dhankar/ZOMOTO",
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <ProjectCard {...project} alt={project.title} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/nilesh21-dhankar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 text-purple"
          >
            <span>View More Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
