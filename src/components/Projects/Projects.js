import { Fade } from "react-reveal";
import "./Projects.scss"
import { majorProjects } from "../../Portfolio"

const Projects = () => {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }
    return (
        <Fade bottom duration={1000} distance={"40px"}>
            <div className="main" id="projects">
                <div className="skills-heading ">
                    {/* <h1>dfghj</h1> */}
                    <h1 className="blur-heading">{majorProjects.title}</h1>
                    <p>{majorProjects.subtitle}</p>
                    <div className="projects-container">
                        {majorProjects.projects.map((project) => (
                            <div className="project-card project-card-dark">
                                <img className="card-img" src={project.image} alt={project.projectName}></img>
                                <div className="project-details">
                                    <h5 className="card-title">{project.projectName}</h5>
                                    <p className="card-subtitle">{project.projectDesc}</p>
                                    <div className="project-card-footer">
                                        {project.footerLink.map((link) => (

                                            <span className="project-tag" onClick={() => openUrlInNewTab(link.url)}>{link.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    )
}


export default Projects;