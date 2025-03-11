import Button from './Button';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <Button onClick={() => window.open(githubUrl, '_blank')}>
            View Code
          </Button>
          {liveUrl && (
            <Button variant="secondary" onClick={() => window.open(liveUrl, '_blank')}>
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 