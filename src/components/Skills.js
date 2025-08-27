import React, { Component } from 'react';

export class Skills extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="skills">
        <h1 className="border_new"><i className="fa fa-code"></i> Skills</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {/* Programming Languages */}
                <div className="col-md-6">
                  <h4><i className="fa fa-laptop"></i> Programming Languages</h4>
                  <div className="tools-list">
                    {data.programmingLanguages && data.programmingLanguages.map((skill, index) => (
                      <span key={index} className="tool-badge">
                        <i className={skill.icon}></i> {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Technologies */}
                <div className="col-md-6">
                  <h4><i className="fa fa-cogs"></i> Frameworks & Technologies</h4>
                  <div className="tools-list">
                    {data.frameworks && data.frameworks.map((skill, index) => (
                      <span key={index} className="tool-badge">
                        <i className={skill.icon}></i> {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools & Databases */}
              <div className="row" style={{marginTop: '2rem'}}>
                <div className="col-md-6">
                  <h4><i className="fa fa-wrench"></i> Tools & IDEs</h4>
                  <div className="tools-list">
                    {data.tools && data.tools.map((tool, index) => (
                      <span key={index} className="tool-badge">
                        <i className={tool.icon}></i> {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  <h4><i className="fa fa-database"></i> Databases</h4>
                  <div className="tools-list">
                    {data.databases && data.databases.map((db, index) => (
                      <span key={index} className="tool-badge">
                        <i className={db.icon}></i> {db.name}
                      </span>
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

export default Skills;