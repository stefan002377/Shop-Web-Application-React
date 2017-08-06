import React from 'react';
import ProductBox from './ProductBox';
import {Link} from 'react-router-dom';

class ProductSingle extends React.Component {

  componentWillMount() {
      window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  addProductCart(id) {
    this.props.addProductCart(id);
  }

  render() {

    let id_cat;
    this.props.listProducts.map(c => {
      if(parseInt(this.props.match.params.id_p,0) === c.id_p) {
        id_cat = c.cat;
      }
      return c;
    });

    let relatedProducts =  this.props.listProducts.filter( r => r.cat === id_cat);

    return (
      <div className="row content">
        {this.props.listProducts.map( (pro, i) =>
          pro.id_p === parseInt(this.props.match.params.id_p,0) &&
          <div className="col-md-12 col-lg-12 col-sm-12 contentinfo" key={i}>
            <h3 className="page-header">{pro.title}</h3>
            <div className="row product-single">
              <div className="col-md-5 col-lg-5 col-sm-5">
                <img src={pro.images} className="img-responsive left" alt=""/>
              </div>
              <div className="col-md-7 col-lg-7 col-sm-7 products">
                <div className="row">
                  <p className="clearfix">{pro.description}</p>
                  <div className="raiting pull-left" >
                    {[...Array(5)].map((x, i) =>
                        <span key={i} className={"glyphicon glyphicon-star " + (pro.rating >= i ? 'activestar' : 'glyphicon glyphicon-star')}></span>
                    )}
                  </div>
                  <div className="price pull-right">{pro.price}$</div>
                  <div className="text-center buy-button">
                    <Link to={"/cart/"} onClick={this.addProductCart.bind(this, pro.id_p)} className="btn btn-info" role="button">{(this.props.cartInfo.indexOf(pro.id_p) === -1) ? 'Buy Now »': 'Go Cart' }</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-md-12 col-lg-12 col-sm-12">
          <div className="related-products">
            <h3 className="page-header">Related Products</h3>
            <div className="row products">
              {relatedProducts.map( pro =>
                pro.id_p !== parseInt(this.props.match.params.id_p,0) &&
                <div className="col-md-3 col-lg-3 col-sm-3" key={pro.id_p}>
                  <ProductBox id_p={pro.id_p}  images={pro.images} title={pro.title} price={pro.price} shortdesc={pro.shortdesc}/>
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
    );
  }
}
export default ProductSingle;
