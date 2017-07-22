import React from 'react';
import {NavLink, Link} from 'react-router-dom';

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
         <div className="col-md-12 col-lg-12 col-sm-12">
           <h2 className="logo pull-left"><Link to="/">Shop React</Link></h2>
           <div className="cart-button pull-right">
              <NavLink to="/" className="btn btn-default btn-md" activeClassName="active">Home</NavLink>
              <NavLink to="/shop" className="btn btn-default btn-md" activeClassName="active">Shop</NavLink>
              <NavLink to="/page" className="btn btn-default btn-md" activeClassName="active">Page</NavLink>
              <NavLink to="/components" className="btn btn-default btn-md" activeClassName="active">Components</NavLink>
              <NavLink to="/cart" className="btn btn-warning btn-md" activeClassName="active"><span className="glyphicon glyphicon-shopping-cart"></span>Cart</NavLink>
           </div>
        </div>
     );
   }
 }

export default HeaderTop;
