import React, { Component } from 'react';

export class Achievements extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="achievements">
        <h1 className="section-title"><i className="fa fa-star"></i> Achievements</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              
              {/* Awards & Recognition */}
              <div className="row">
                <div className="col-md-12">
                  <div className="awards-grid">
                    {data.awards && data.awards.map((award, index) => (
                      <div key={index} className="achievement-item">
                        <div className="achievement-icon">
                          <i className={award.icon}></i>
                        </div>
                        <div className="achievement-content">
                          <h5>{award.title}</h5>
                          <p className="achievement-org">{award.organization}</p>
                          <p className="achievement-year">{award.year}</p>
                          <p className="achievement-desc">{award.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Projects & Publications */}
              <div className="row" style={{marginTop: '2rem'}}>
                <div className="col-md-12">
                  <h4><i className="fa fa-lightbulb-o"></i> Notable Projects</h4>
                  <div className="projects-grid">
                    {data.notableProjects && data.notableProjects.map((project, index) => (
                      <div key={index} className="project-card">
                        <div className="project-header">
                          <h5>
                            {project.url ? 
                              <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <i className={project.icon}></i> {project.title}
                              </a> 
                              : <><i className={project.icon}></i> {project.title}</>
                            }
                          </h5>
                          <span className="project-year">{project.year}</span>
                        </div>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                          {project.technologies && project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Achievements;