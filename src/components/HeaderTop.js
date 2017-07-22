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
         <div className="col-md-12 col-lg-12 col-sm-12">
           <h2 className="logo pull-left"><Link to="/">Shop React</Link></h2>
           <div className="cart-button pull-right">
              <Link to="/cart" className="btn btn-warning btn-md"><span className="glyphicon glyphicon-shopping-cart"></span>Cart Empty</Link>
           </div>
        </div>
     );
   }
 }

export default HeaderTop;
