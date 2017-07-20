import React from 'react';
import {Link} from 'react-router-dom';

class ContentProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayList: true};
  }

  render() {
    let listProducts = this.props.listProducts.filter( cat => {
          return (cat.slug === this.props.match.params.slug);
    })
    return (
      <div className="col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 main">
          {listProducts.map( cat =>
            cat.products.map( pro =>
              pro.id_p == this.props.match.params.id_p &&
              <div>
              <h2 className="page-header">{pro.title}</h2>
              <div className="row">

                <div className="col-md-7">
                  {pro.stock===1 && <div className="stock">In stock</div> }
                  <div className="raiting" >
                      <span className={pro.raiting >= 1 ? 'glyphicon glyphicon-star activestar' : 'glyphicon glyphicon-star'}></span>
                      <span className={pro.raiting >= 2 ? 'glyphicon glyphicon-star activestar' : 'glyphicon glyphicon-star'}></span>
                      <span className={pro.raiting >= 3 ? 'glyphicon glyphicon-star activestar' : 'glyphicon glyphicon-star'}></span>
                      <span className={pro.raiting >= 4 ? 'glyphicon glyphicon-star activestar' : 'glyphicon glyphicon-star'}></span>
                      <span className={pro.raiting >= 5 ? 'glyphicon glyphicon-star activestar' : 'glyphicon glyphicon-star'}></span>
                  </div>
                  <p className="clearfix">{pro.desc}</p>
                  <div className="price pull-left" >{pro.price}</div>
                  <Link to={'/cart/'+pro.id_p} className="btn btn-default pull-right" role="button">Buy Now »</Link>
                  <div className="related_prod pull-left" >{pro.related_prod}</div>
                </div>
                <div className="col-md-5">
                  <img src={pro.image} className="img-responsive left" alt=""/>
                </div>          
              </div>
              </div>
            )
          )}
      </div>
    );
  }
}

export default ContentProduct;
