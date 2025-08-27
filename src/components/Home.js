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
            <h1 className="display-3">Hello, World!</h1>

                      
            <div style={{ position: "relative", width: "100%", marginTop: "2rem", textAlign: "center" }}>
              <span style={{
                fontFamily: "'VT323', monospace",
                fontSize: "1.7rem",
                color: "black",
                display: "inline-block",
                position: "relative",
                left: "-6ch" 
              }}>
                root:~$&nbsp;


                <span style={{
                  position: "absolute",
                  left: "100%",  
                  top: 0,
                  whiteSpace: "nowrap",
                  fontFamily: "'VT323', monospace",
                  fontSize: "1.7rem"
                }}>
                  <Typer dataText={data.typewriter} />
                </span>
              </span>
            </div>


            <div className="linkNew">
            <nav>
            <ul className="social">
                {
                    data.socialProfiles && data.socialProfiles.map(item => {
                      return(
                              <li key={item.id}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title} style={{ }}>
                                { 
                                  item.className? <i className={item.className}></i> : <img src={item.imageUrl} alt="social" style={{ "margin-top":"-10px" }}/>
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
