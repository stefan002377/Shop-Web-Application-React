import React from 'react';
import {Link} from 'react-router-dom';

class HeaderTop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {searchInput: ''};
      this.searchTop = this.searchTop.bind(this);
    }

    searchTop(event){
        this.setState({searchInput: event.target.value});
        this.props.searchProducts(event.target.value);
        console.log(event);
    }

   render() {
     return (
          <nav className = "navbar navbar-inverse navbar-fixed-top" >
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to={`/`} className="navbar-brand">SHOP React</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to={`/`}>Vesion 0.0.1</Link>
                  </li>
                </ul>
                {this.state.searchInput}
                <form className="navbar-form navbar-right">
                  <input type="text" value={this.state.searchInput} onChange={this.searchTop} className="form-control" placeholder="Search..."/>
                </form>
              </div>
            </div>
          </nav>
     );
   }
 }

export default HeaderTop;
