import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        let data = this.props.data;
        return (
            <div id="footer" className="footer-containers">
            <div className="row">
              <div className="section">
                <div className="col-md-12">
                      <p className="copyright">Made with <i className="fa fa-coffee"></i>
                        &nbsp;and <i className="fa fa-music"></i> by <span style={{ color: '#007BFF' }}>{data.name}</span>  {data.year} <i className="fa fa-smile-o"></i></p>
                  </div>
              </div> 
            </div> 
          </div>
        )
    }
}

export default Footer
