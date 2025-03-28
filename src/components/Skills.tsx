
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "Java", "Kotlin", "Android Development", "Android Studio", 
    "Object-Oriented Programming", "DBMS", "MongoDB", 
    "Python", "Product Life Cycle", "Software Development",
    "Project Management", "Bug Fixes", "Programming Concepts"
  ];
  
  const softSkills = [
    "Communication Skills", "Teamwork", "Active Listener", 
    "Marketing", "Target Audience", "UX", 
    "Video Editing", "Presentation", "Supervision",
    "Curiosity", "Excellence", "Improvement"
  ];

  return (
    <section id="skills" className="section-container bg-secondary/50">
      <h2 className="section-title">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-card rounded-lg shadow-lg p-6 card-hover">
          <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
          <div className="flex flex-wrap">
            {technicalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="skill-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-lg p-6 card-hover">
          <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
          <div className="flex flex-wrap">
            {softSkills.map((skill, index) => (
              <span 
                key={index} 
                className="skill-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-card rounded-lg shadow-lg p-6 card-hover">
        <h3 className="text-xl font-semibold mb-4 text-primary">Education & Experience</h3>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
            <h4 className="text-lg font-medium">Kalinga Institute of Industrial Technology</h4>
            <p className="text-foreground/70">Bachelor's Degree</p>
            <p className="text-sm text-foreground/60">Current</p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
            <h4 className="text-lg font-medium">InternPe</h4>
            <p className="text-foreground/70">Java Developer Intern</p>
            <p className="text-sm text-foreground/60">Strengthened programming skills and software development practices</p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
            <h4 className="text-lg font-medium">Hunch</h4>
            <p className="text-foreground/70">Campus Ambassador</p>
            <p className="text-sm text-foreground/60">Developed communication, marketing, and teamwork skills</p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
            <h4 className="text-lg font-medium">Master Android Development Course</h4>
            <p className="text-foreground/70">Completed training building 82 apps with Java and Kotlin</p>
            <p className="text-sm text-foreground/60">Gained hands-on experience in mobile application development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
