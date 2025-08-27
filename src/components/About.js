import React, { Component } from 'react';

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
      <h1 className="border_new"><i className="fa fa-user"></i> About Me</h1>
      <div className="container-fluid">
      <div className="row">
       <div className="col-md-6">
          <p>{data.intro}...</p>
          <p>I'm {data.name}, currently working as a {data.position} at <a target="_blank" href={data.curl} rel="noopener noreferrer"> {data.company}.</a></p>
          <p>Completed my Bachelor's Degree in Computer Science & Engineering from <a target="_blank" href={data.universityUrl} rel="noopener noreferrer">{data.universityName} </a> in 2018.</p>
          <p>{data.aboutMe}</p>
          <p style={{ color: "#0080ff" }}><i>{data.quote}</i></p>
          <p>{data.interest}</p>
          {/* <p>Mail Me : <a href="mailto:">{data.mail}</a></p> */}
        </div>
      <div className="col-md-6">
         <img src={data.profileImage} alt="Afrida Logo" className="img-circle shadow up-hover avatar"/>
      </div>
    </div>
  </div>
     
   </section>
    )
  }
}

export default About;
