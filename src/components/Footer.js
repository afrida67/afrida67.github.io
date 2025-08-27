import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        let data = this.props.data;
        return (
            <div id="footer" className="my-containers">
            <div className="row">
              <div className="section">
                <div className="col-md-12">
                      <p className="copyright">Made with <i className="fa fa-coffee"></i>
                        &nbsp;and <i className="fa fa-music"></i> by <a href="#a" target="_blank">
                        {data.name}</a>  {data.year} <i className="fa fa-smile-o"></i></p>
                  </div>
              </div> 
            </div> 
          </div>
        )
    }
}

export default Footer
