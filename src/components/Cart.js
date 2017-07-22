import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartProducts: []
    }
  }

  render() {
    return (
      <div>
        <h3 className="page-header">Cart</h3>
        <div className="row cart">
          {this.props.listProducts.map(cat=>
            cat.products.map(pro=>
            <div className="col-md-12 col-lg-12 col-sm-12" key={pro.id_p}>
              <div className="box-product clearfix">
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <Link to={'/'+cat.slug+'/'+pro.id_p}><img src={pro.image} className="img-responsive pull-left" alt=""/></Link>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <h4 className="clearfix title-product"><Link to={'/'+cat.slug+'/'+pro.id_p}>{pro.title}</Link></h4>
                  <p>{pro.shortdesc}</p>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <div className="price pull-right" >{pro.price}</div>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <Link to={'/cart/delete/'+pro.id_p} className="btn btn-danger btn-md">
                  <span className="glyphicon glyphicon-remove"></span>Delete</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-button pull-right">
           <Link to="/cart" className="btn btn-warning btn-md"><span className="glyphicon glyphicon-shopping-cart"></span>Checkout</Link>
        </div>
      </div>
    );
  }
}

export default Cart;
