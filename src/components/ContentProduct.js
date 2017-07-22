import React from 'react';
import {Link} from 'react-router-dom';

class ContentProduct extends React.Component {

  render() {
    let listProducts = this.props.listProducts.filter( cat => {
          return (cat.slug === this.props.match.params.slug);
    })
    return (
      <div>
          {listProducts.map( cat =>
            cat.products.map( pro =>
              pro.id_p == this.props.match.params.id_p &&
              <div>
              <h3 className="page-header">{pro.title}</h3>
              <div className="row product-single">
                <div className="col-md-7 col-lg-7 col-sm-7 product-content">
                  <div className="row">
                    <div className="raiting pull-left" >
                      {[...Array(5)].map((x, i) =>
                          <span className={"glyphicon glyphicon-star " + (pro.raiting >= i ? 'activestar' : 'glyphicon glyphicon-star')}></span>
                      )}
                    </div>
                    <div className="price pull-right" >{pro.price}</div>
                  </div>
                  <div className="row">
                    <p className="clearfix">{pro.desc}</p>
                    <Link to="/cart" className="btn btn-info pull-left" role="button">Buy Now »</Link>
                    <div className="related_prod pull-left" >{pro.related_prod}</div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={pro.image} className="img-responsive left" alt=""/>
                </div>
              </div>
              </div>
            )
          )}
          <div className="related-products">
            <h3 className="page-header">Related Products</h3>
            <div className="row products">
              {listProducts.map( cat =>
                cat.products.map( pro =>
                pro.id_p != this.props.match.params.id_p &&
                <div className="col-md-4 col-lg-4 col-sm-4" key={pro.id_p}>
                  <div className="box-product clearfix">
                    <Link to={'/'+cat.slug+'/'+pro.id_p}><img src={pro.image} className="img-responsive pull-left" alt=""/></Link>
                    <h4 className="clearfix title-product"><Link to={'/'+cat.slug+'/'+pro.id_p}>{pro.title}</Link></h4>
                    <p>{pro.shortdesc}</p>
                    <div className="price pull-right" >{pro.price}</div>
                    <Link to={'/'+cat.slug+'/'+pro.id_p} className="mode-details pull-left" role="button">View details »</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }
}

export default ContentProduct;
