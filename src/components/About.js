import React, { Component } from 'react';

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
        <h1 className="border_new"><i className="fa fa-user"></i> About Me</h1>
        <div className="container-fluid">
          <div className="row">
            
            {/* About Content Section - Full Width */}
            <div className="col-md-12">
              <div className="about-content">
                
                {/* Introduction Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-hand-o-right"></i> Introduction</h4>
                  </div>
                  <div className="card-body">
                    <p>I'm  a <strong>{data.position}</strong> with 4 years of industry experience, specializing in ERP and E-Commerce solutions. 
                      I hold a Bachelor's Degree in Computer Science & Engineering from 
                      the <a target="_blank" 
                      href={data.universityUrl} rel="noopener noreferrer" 
                      className="company-link">{data.universityName} </a>.
                      My expertise lies in designing secure applications, optimizing complex databases, and developing scalable APIs that enhance system performance and reliability.
                      </p>
                  </div>
                </div>

                {/* Personal Interests Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-heart"></i> When I'm Not Coding</h4>
                  </div>
                  <div className="card-body">
                    <p>{data.interest}</p>
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

export default About;