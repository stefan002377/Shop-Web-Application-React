import React from 'react';
import {Link} from 'react-router-dom';

class Content extends React.Component {

  render() {

    let serchKey = this.props.searchKey;
    let listProducts = this.props.listProducts.filter( cat => {
          return (cat.slug === this.props.match.params.slug || this.props.match.params.slug === undefined);
    })
    let categoryTitle = (this.props.match.params.slug !== undefined)? listProducts.map( cat => { return cat.category; }) : 'All Products';

    return (
      <div>
        <h3 className="page-header">{categoryTitle}</h3>
        <div className="row products">
          {listProducts.map(cat=>
            cat.products.map(pro=>
            pro.title.toLowerCase().search(serchKey.toLowerCase()) >= 0 &&
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
    );
  }
}

export default Content;
