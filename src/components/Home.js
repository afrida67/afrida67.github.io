import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import Typer from './Typer';
export class Home extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="home">
        <div className="home-background">
          <div className="home-overlay">
            <Jumbotron className="home">
                
                <div className="home-content">
                  <div className="intro-section">
                    <div className="greeting">
                      <h1 className="main-title">
                        <span className="bracket">&lt;</span>
                        Hello, World!
                        <span className="bracket">/&gt;</span>
                      </h1>
                    </div>
                    
                    <div className="profile-intro">
                      <div className="profile-image-home">
                        <img src={data.profileImage} alt="Profile" className="home-avatar"/>
                      </div>
                      <div className="profile-details">
                        <h5>I am</h5>
                        <h2 className="name-title">
                          <span className="code-comment">// </span>
                          {data.name}
                        </h2>
                        <h3 className="position-title">
                          <i className="fa fa-code"></i>
                          {data.position}
                        </h3>
                      </div>
                    </div>
                  </div>

                {/* Social Connect */}

                   <div className="social-connect">

                    <div className="social-links">
                        {
                            data.socialProfiles && data.socialProfiles.map(item => {
                              return(
                                      <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" 
                                        className="social-link" title={item.title}>
                                        <div className="social-icon">
                                          { 
                                            item.className? 
                                            <i className={item.className}></i> : 
                                            <img src={item.imageUrl} alt="social" />
                                          }
                                        </div>
                                      </a>
                                    )
                              }
                            )
                          }
                    </div>
                  </div>
                   {/* Terminal*/}
                  <div className="terminal-container">
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="terminal-buttons">
                          <span className="btn-close"></span>
                          <span className="btn-minimize"></span>
                          <span className="btn-maximize"></span>
                        </div>
                        <div className="terminal-title">~/afridapc</div>
                      </div>
                      
                      <div className="terminal-body">
                        <div className="terminal-prompt">
                          <span className="user">root@afrida</span>
                          <span className="separator">:</span>
                          <span className="path">~</span>
                          <span className="dollar">$</span>
                          <span className="command">
                            <Typer dataText={data.typewriter} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
               {/* Scroll */}
                <div className="scroll-indicator"
                  onClick={() => {
                    const nextSection = document.getElementById("about");
                    nextSection.scrollIntoView({ behavior: "smooth" });
                  }}
                
                >
                    <div className="scroll-arrow">
                      <i className="fa fa-chevron-down"></i>
                    </div>
                  </div> 


                </div>
            </Jumbotron>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;