import React from 'react';
import {Link} from 'react-router-dom';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayList: true};
  }

  render() {

    let serchKey = this.props.searchKey;
    let listProducts = this.props.listProducts.filter( cat => {
          return (cat.slug === this.props.match.params.slug || this.props.match.params.slug === undefined);
    })
    let categoryTitle = (this.props.match.params.slug !== undefined)? listProducts.map( cat => { return cat.category; }) : 'All Products';

    return (
      <div className="col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 main">
        <h2 className="page-header">{categoryTitle}</h2>
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Sort By
          <span className="caret"></span></button>
          <ul className="dropdown-menu activedrop">
            <li><a href="#">Default</a></li>
            <li><a href="#">Title ASC</a></li>
            <li><a href="#">Title DESC</a></li>
            <li><a href="#">Price ASC</a></li>
            <li><a href="#">Price DESC</a></li>
            <li><a href="#">Stars</a></li>
          </ul>
        </div>
        <div className="row">
          {listProducts.map(cat=>
            cat.products.map(pro=>
            pro.title.toLowerCase().search(serchKey.toLowerCase()) >= 0 &&
            <div className="col-md-6 listProducts" key={pro.id_p}>
              <div className="col-md-6 nopadding">
              <h4><Link to={'/'+cat.slug+'/'+pro.id_p}>{pro.title}</Link></h4>
              <p>{pro.shortdesc}</p>
              <div className="price pull-left" >{pro.price}</div>
              <Link to={'/'+cat.slug+'/'+pro.id_p} className="mode-details pull-right" role="button">View details »</Link>
              </div>
              <div className="col-md-6">
                <Link to={'/'+cat.slug+'/'+pro.id_p}><img src={pro.image} className="img-responsive pull-left" alt=""/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
