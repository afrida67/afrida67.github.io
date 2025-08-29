import React, { Component } from 'react';

export class Publications extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="publications">
        <h1 className="section-title"><i className="fa fa-file-text-o"></i> Publications</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              
              {/* Research Papers */}
              {data.researchPapers && data.researchPapers.length > 0 && (
                <div className="row">
                  <div className="col-md-12">
                    <h4><i className="fa fa-graduation-cap"></i> Research Papers</h4>
                    <div className="publications-grid">
                      {data.researchPapers.map((paper, index) => (
                        <div key={index} className="publication-card">
                          <div className="publication-header">
                            <h5>
                              {paper.url ? 
                                <a href={paper.url} target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-file-text"></i> {paper.title}
                                </a> 
                                : <><i className="fa fa-file-text"></i> {paper.title}</>
                              }
                            </h5>        
                          </div>
                          
                          
                          <div className="publication-venue">
                            <i className="fa fa-university"></i>
                            {paper.journal}
                          </div>
                          
                          
                        </div>
                      ))}
                    </div>
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

export default Publications;