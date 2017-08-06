import React from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends React.Component {

   render() {
     return (
        <nav className="navbar navbar-default">
         <div className="container">
           <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
             <Link className="navbar-brand"  to="/">Shop React</Link>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav navbar-right">
               <li><NavLink exact to="/"  activeClassName="active">Start Page</NavLink></li>
               <li><NavLink exact to="/cart"  activeClassName="active"><span className="glyphicon glyphicon-shopping-cart"></span> {this.props.cartProduct.length} Products</NavLink></li>
             </ul>
           </div>
         </div>
        </nav>
     );
   }
 }
export default Header;
