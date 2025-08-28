import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="experience">
        <h1 className="border_new"><i className="fa fa-briefcase"></i> Experience</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              
              {/* Work Experience Timeline */}
              <div className="experience-timeline">
                {data.workExperience && data.workExperience.map((job, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-icon">
                        <i className="fa fa-briefcase"></i>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <div className="job-header">
                        <h3 className="job-title">{job.position}</h3>
                        <div className="job-meta">
                          <span className="company">
                            <i className="fa fa-building"></i>
                            {job.companyUrl ? 
                              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a>
                              : job.company
                            }
                          </span>
                          <span className="duration">
                            <i className="fa fa-calendar"></i>
                            {job.duration}
                          </span>
                          <span className="location">
                            <i className="fa fa-map-marker"></i>
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="job-description">
                        <p>{job.description}</p>
                        {job.achievements && (
                          <ul className="achievements-list">
                            {job.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {job.technologies && (
                        <div className="job-technologies">
                          <h5><i className="fa fa-code"></i> Technologies Used:</h5>
                          <div className="tech-tags">
                            {job.technologies.map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education Section */}
              {data.education && (
                <div className="education-section">
                  <h2 className="section-subtitle">
                    <i className="fa fa-graduation-cap"></i> Education
                  </h2>
                  <div className="education-timeline">
                    {data.education.map((edu, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-marker">
                          <div className="timeline-icon">
                            <i className="fa fa-graduation-cap"></i>
                          </div>
                        </div>
                        <div className="timeline-content">
                          <div className="edu-header">
                            <h3 className="degree-title">{edu.degree}</h3>
                            <div className="edu-meta">
                              <span className="institution">
                                <i className="fa fa-university"></i>
                                {edu.institutionUrl ? 
                                  <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer">{edu.institution}</a>
                                  : edu.institution
                                }
                              </span>
                              <span className="duration">
                                <i className="fa fa-calendar"></i>
                                {edu.year}
                              </span>
                              {edu.gpa && (
                                <span className="gpa">
                                  <i className="fa fa-star"></i>
                                  GPA: {edu.gpa}
                                </span>
                              )}
                            </div>
                          </div>
                          {edu.description && (
                            <p className="edu-description">{edu.description}</p>
                          )}
                          {edu.coursework && (
                            <div className="coursework">
                              <h5><i className="fa fa-book"></i> Relevant Coursework:</h5>
                              <div className="course-tags">
                                {edu.coursework.map((course, i) => (
                                  <span key={i} className="course-tag">{course}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience;