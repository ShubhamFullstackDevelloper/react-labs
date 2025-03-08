import React, { Component } from "react";
import CoinGame from "./RJ_Coins/CoinGame";
import Actor from "./ActorMovies/Actor";
import ImdbDashboard from "./IMDb/ImdbDashboard.js";
import Bulb from "./Bulb/Bulb.js"
import AmazonPage from "./Amazon_page/Amazon.js"
import "./Dashboard.css";

// ProjectBox Component (Reusable)
const ProjectBox = ({ project, isActive, onClick }) => (
  <div
    className={`project-box ${isActive ? "active" : ""}`}
    onClick={onClick}
    role="button"
    aria-label={`Select ${project.name} project`}
    tabIndex={0}
  >
    {project.name}
  </div>
);

// Dashboard Component
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "IMDb", component: <ImdbDashboard /> },
        { name: "Coin Game", component: <CoinGame /> },
        { name: "Actor Page", component: <Actor /> },
        { name: "AmazonPage", component: <AmazonPage /> },
      ],
      selectedProject: null,
      activeProject: null,
    };
  }

  // Handle Project Selection
  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component, activeProject: project.name });
  };

  // Render Method
  render() {
    const { projects, selectedProject, activeProject } = this.state;

    return (
      <div className="dashboard-main-container">
        <h1>React Projects</h1>

        {/* Project Selection Area */}
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              project={project}
              isActive={activeProject === project.name}
              onClick={() => this.handleProjectClick(project)}
            />
          ))}
        </div>

        {/* Display Selected Project */}
        <div className="project-content">
          {selectedProject ? (
            <>
              <button
                className="back-button"
                onClick={() => this.setState({ selectedProject: null, activeProject: null })}
              >
                Back to Projects
              </button>
              <div className="selected-project">{selectedProject}</div>
            </>
          ) : (
            <p>Select a project to get started!</p>
          )}
        </div>
      </div>
    );
  }
}