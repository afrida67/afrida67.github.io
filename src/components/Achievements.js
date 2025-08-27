import React, { Component } from 'react';

export class Achievements extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="achievements">
        <h1 className="border_new"><i className="fa fa-trophy"></i> Achievements</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              
              {/* Awards & Recognition */}
              <div className="row">
                <div className="col-md-6">
                  <h4><i className="fa fa-star"></i> Awards & Recognition</h4>
                  <div className="achievement-list">
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

                {/* Certifications */}
                <div className="col-md-6">
                  <h4><i className="fa fa-certificate"></i> Certifications</h4>
                  <div className="achievement-list">
                    {data.certifications && data.certifications.map((cert, index) => (
                      <div key={index} className="achievement-item">
                        <div className="achievement-icon">
                          <i className={cert.icon}></i>
                        </div>
                        <div className="achievement-content">
                          <h5>
                            {cert.url ? 
                              <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.title}</a> 
                              : cert.title
                            }
                          </h5>
                          <p className="achievement-org">{cert.issuer}</p>
                          <p className="achievement-year">{cert.year}</p>
                          {cert.description && <p className="achievement-desc">{cert.description}</p>}
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