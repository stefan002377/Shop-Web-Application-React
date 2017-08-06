import React from 'react';
import {Link} from 'react-router-dom';

class ProductBox extends React.Component {

   render() {
     return (
       <div className="box-product clearfix">
         <div className="text-center"><Link to={'/reactjs-shop/product/'+this.props.id_p}><img src={this.props.images} className="img-responsive" alt=""/></Link></div>
         <div className="content-box-pro">
               <h4 className="clearfix title-product"><Link to={'/reactjs-shop/product/'+this.props.id_p}>{this.props.title}</Link></h4>
               <p>{this.props.shortdesc}</p>
         </div>
         <div className="price pull-right" >{this.props.price}$</div>
         <Link to={'/reactjs-shop/product/'+this.props.id_p} className="mode-details pull-left" role="button">View details »</Link>
       </div>
     );
   }
 }

export default ProductBox;
