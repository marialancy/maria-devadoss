import React from 'react';

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular",
  "Accessibility(a11y)", "SEO"
];

const projects = [
  { name: 'Kids Read world', description: 'explore best kids book', image: 'kids-read-site.jpeg' },
  { name: 'Compound Interest Calculator', description: 'calculate returns', image: 'compound-interest-calculator.jpeg' },
  { name: 'Interactive PDF Viewer', description: 'PDF viewer setup using pdfjs', image: 'pdfjs-setup.jpeg' },
  { name: 'Random team picker', description: 'random team generator', image: 'random-team-picker.jpeg' },
];

const App = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <header style={{ background: 'linear-gradient(135deg, #f4c8e5, #d9b4f3)' }}>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Hey I'm Maria</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I love to develop simple and intuitive web experiences that users love.
          </p>
          <img src="avatar.jpeg" alt="Your Name" className="rounded-full w-64 h-64 mx-auto mb-4 border-4 border-white" />
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">ABOUT ME</h2>
          <div style= {{backgroundColor:'#c7a4f4'}} className="w-16 h-1 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4">
                Front-end Developer with over <strong>6 years</strong> of experience in creating intuitive and efficient web applications 
                in the fintech and education sectors. I specialize in building scalable, responsive interfaces that prioritize user experience and adhere to 
                modern web standards and accessibility guidelines.
              </p>
              <p className="mb-4">
              My expertise includes using <strong>Playwright</strong> for automated testing, ensuring high code quality and seamless functionality 
              across applications. My passion lies in tackling complex challenges, optimizing performance, and 
              enhancing the overall user experience.
              </p>
              <p className="mb-8">
              Open to opportunities where I can contribute my skills, learn, and grow. 
              If you have a position that aligns with my experience and expertise, please feel free to 
              connect on my <a href="https://www.linkedin.com/in/maria-lancy/" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline text-lg">Linkedin</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} style= {{backgroundColor:'#fdeaf4'}} className="text-gray-700 py-2 px-4 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ background: 'linear-gradient(135deg, #f4c8e5, #d9b4f3)' }} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Personal projects</h2>
          <p className="text-center mb-12">Here are a few personal projects I've worked on.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-4/5 mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-md group">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="text-white text-lg mb-4">{project.name}</div>
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-full">View Project</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;