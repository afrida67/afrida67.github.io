import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import Typer from './Typer';
export class Home extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="home">
      <div>
        <Jumbotron className="home">
            
            <div className="terminal-section">
              <div className="terminal-header">
                <span className="terminal-button terminal-close"></span>
                <span className="terminal-button terminal-minimize"></span>
                <span className="terminal-button terminal-maximize"></span>
                <span className="terminal-title">portfolio.sh</span>
              </div>
              
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">root@portfolio:~$</span>
                  <span className="command">
                    <Typer dataText={data.typewriter} />
                  </span>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4 className="social-header">
                <i className="fa fa-share-alt"></i> Connect With Me
              </h4>
              <nav>
                <ul className="social">
                    {
                        data.socialProfiles && data.socialProfiles.map(item => {
                          return(
                                  <li key={item.id}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
                                    { 
                                      item.className? <i className={item.className}></i> : <img src={item.imageUrl} alt="social" />
                                    }
                                    </a>
                                  </li>
                                )
                          }
                        )
                      }
                </ul>
              </nav>
            </div>
    
      </Jumbotron>
      </div>
      </section>
    )
  }
}

export default Home;