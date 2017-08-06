import React from 'react';
import {NavLink} from 'react-router-dom';

class SidebarProducts extends React.Component {

   searchProducts (event) {
    this.props.searchProducts(event.target.value);
   }

   render() {
     return (
       <div className="col-md-3 col-lg-3 col-sm-3 sidebar">
         <h3 className="page-header">Filter</h3>
         <div className="serch-form">
           <form className="form-inline">
             <input type="text" value={this.props.searchKey} onChange={this.searchProducts.bind(this)} className="form-control" placeholder="Search Products..."/>
           </form>
         </div>
         <div className="list-group">
           {this.props.listCategory.map( cat =>
           <NavLink to={'/'+cat.slug} key={cat.id_cat} className="list-group-item info" activeClassName="active">{cat.title} </NavLink>
           )}
         </div>
       </div>
     );
   }
 }

export default SidebarProducts;
