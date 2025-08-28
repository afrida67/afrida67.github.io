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
                    <p>{data.intro}</p>
                    <p>I'm <strong>{data.name}</strong>, currently working as a <strong>{data.position}</strong> at 
                      <a target="_blank" href={data.curl} rel="noopener noreferrer" className="company-link"> {data.company}</a>.
                    </p>
                    <p>Completed my Bachelor's Degree in Computer Science & Engineering from <a target="_blank" href={data.universityUrl} rel="noopener noreferrer" className="company-link">{data.universityName} </a> in 2018.</p>
                  </div>
                </div>

                {/* Expertise Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-code"></i> What I Do</h4>
                  </div>
                  <div className="card-body">
                    <p>{data.aboutMe}</p>
                  </div>
                </div>

                {/* Philosophy Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-lightbulb-o"></i> My Philosophy</h4>
                  </div>
                  <div className="card-body">
                    <blockquote className="philosophy-quote">
                      <i className="fa fa-quote-left"></i>
                      <span>{data.quote}</span>
                      <i className="fa fa-quote-right"></i>
                    </blockquote>
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