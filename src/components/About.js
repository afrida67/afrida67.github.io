import React, { Component } from 'react';

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
        <h1 className="border_new"><i className="fa fa-user"></i> About Me</h1>
        <div className="container-fluid">
          <div className="row">
            
            {/* Profile Image Section */}
            <div className="col-md-4">
              <div className="profile-card">
                <div className="profile-image-container">
                  <img src={data.profileImage} alt="Profile" className="img-circle shadow up-hover avatar"/>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{data.name}</h3>
                  <p className="profile-position">
                    <i className="fa fa-briefcase"></i> {data.position}
                  </p>
                  <p className="profile-company">
                    <i className="fa fa-building"></i> 
                    <a target="_blank" href={data.curl} rel="noopener noreferrer"> 
                      {data.company}
                    </a>
                  </p>
                  <p className="profile-education">
                    <i className="fa fa-graduation-cap"></i> 
                    <a target="_blank" href={data.universityUrl} rel="noopener noreferrer">
                      {data.universityName}
                    </a> (2018)
                  </p>
                </div>
              </div>
            </div>

            {/* About Content Section */}
            <div className="col-md-8">
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

                {/* Personal Interests Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-heart"></i> When I'm Not Coding</h4>
                  </div>
                  <div className="card-body">
                    <p>{data.interest}</p>
                  </div>
                </div>

                {/* Favorite Quote Card */}
                <div className="about-card">
                  <div className="card-header">
                    <h4><i className="fa fa-lightbulb-o"></i> Favorite Quote</h4>
                  </div>
                  <div className="card-body">
                    <blockquote className="philosophy-quote">
                      <i className="fa fa-quote-left"></i>
                      <span>{data.quote}</span>
                      <i className="fa fa-quote-right"></i>
                    </blockquote>
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