import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {

  componentWillMount() {
      window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  deleteProductCart(id_p){
    this.props.deleteProductCart(id_p);
  }

  render() {

    let cartProduct = this.props.listProducts.filter(c => this.props.cartInfo.indexOf(c.id_p) !== -1);

    return (
      <div className="col-md-12 col-lg-12 col-sm-12 cart">
        <h3 className="page-header">Cart</h3>
        <div className="row cart">
          {cartProduct.map(pro=>
            <div className="col-md-12 col-lg-12 col-sm-12" key={pro.id_p}>
              <div className="box-product clearfix">
                <div className="col-md-1 col-lg-1 col-sm-1">
                  <Link to={'/product/'+pro.id_p}><img src={pro.images} className="img-responsive pull-left" alt=""/></Link>
                </div>
                <div className="col-md-7 col-lg-7 col-sm-7">
                  <h4 className="clearfix title-product"><Link to={'/product/'+pro.id_p}>{pro.title}</Link></h4>
                  <p>{pro.shortdesc}</p>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <div className="price pull-right" >{pro.price}$</div>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <span onClick={this.deleteProductCart.bind(this, pro.id_p)} className="glyphicon glyphicon-remove"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cart-button text-center">
          <Link to="/" className="btn btn-info btn-md">Continue Shop</Link>
        </div>
      </div>
    );
  }
}

export default Cart;
