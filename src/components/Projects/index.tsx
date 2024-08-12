const projects = [
  {
    title: "Projeto 1",
    image: "/assets/projeto1.png",
    link: "https://github.com/seuusuario/projeto1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
