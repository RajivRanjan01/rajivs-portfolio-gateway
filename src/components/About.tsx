
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="mb-4">
            Hello! I'm Rajiv Ranjan, a dedicated Java and Kotlin Android Developer currently pursuing my education at Kalinga Institute of Industrial Technology.
          </p>
          <p className="mb-4">
            I've completed the "Master Android Development" course, building 82 apps with Java and Kotlin, which has given me hands-on experience in creating functional and user-friendly mobile applications. My internship at InternPe as a Java developer further strengthened my programming skills and understanding of software development lifecycles.
          </p>
          <p className="mb-4">
            As a Campus Ambassador at Hunch, I've developed valuable soft skills in communication, marketing, and team collaboration that complement my technical abilities. I'm fluent in both English and Hindi, allowing me to effectively communicate with diverse teams.
          </p>
          <p>
            I'm actively seeking internship or entry-level opportunities in Android/Mobile Development to apply my skills in a professional environment and gain valuable industry experience. I'm eager to learn, adapt, and contribute to innovative mobile solutions.
          </p>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-1 rounded-lg shadow-xl">
            <div className="bg-card p-6 rounded-lg">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
                <img
                  src="https://placehold.co/400x400/3B82F6/FFFFFF?text=RR"
                  alt="Rajiv Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold">Rajiv Ranjan</h3>
                <p className="text-foreground/70">Java & Kotlin Android Developer</p>
                <p className="text-sm mt-2">Kalinga Institute of Industrial Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
