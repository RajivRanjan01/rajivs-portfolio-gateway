
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Smart Campus Assistant App",
      description: "An Android application designed to enhance the campus experience for students and faculty, including campus navigation, schedules, events, digital ID integration, and a forum.",
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Smart+Campus+App",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "Google Maps API"],
      github: "https://github.com/RajivRanjan01",
      demo: "",
      delay: 0.2
    },
    {
      title: "Personal Finance Tracker and Planner",
      description: "A mobile application to help users manage their finances with expense tracking, budgeting, financial reporting, and goal setting.",
      image: "https://placehold.co/600x400/1D4ED8/FFFFFF?text=Finance+Tracker",
      technologies: ["Kotlin", "Android", "Room Database", "MPAndroidChart"],
      github: "https://github.com/RajivRanjan01",
      demo: "",
      delay: 0.4
    },
    {
      title: "Community Event and Resource Sharing App",
      description: "An Android application to connect people within a local community or interest group through event management, resource sharing, and discussion forums.",
      image: "https://placehold.co/600x400/2563EB/FFFFFF?text=Community+App",
      technologies: ["Java", "Android", "Firebase", "Google Auth"],
      github: "https://github.com/RajivRanjan01",
      demo: "",
      delay: 0.6
    },
    {
      title: "AI-Powered Language Learning App",
      description: "An Android application leveraging AI for personalized and interactive language learning with interactive lessons, speech recognition, and personalized feedback.",
      image: "https://placehold.co/600x400/3867D6/FFFFFF?text=Language+Learning+App",
      technologies: ["Kotlin", "Android", "TensorFlow Lite", "Speech Recognition API"],
      github: "https://github.com/RajivRanjan01",
      demo: "",
      delay: 0.8
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            delay={project.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
