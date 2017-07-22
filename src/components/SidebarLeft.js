import React from 'react';
import {NavLink, Link} from 'react-router-dom';

class SidebarLeft extends React.Component {

   constructor(props) {
     super(props);
     this.state = {searchKey: ''};
     this.searchProducts = this.searchProducts.bind(this);
   }

   searchProducts (event) {
     this.setState({
       searchKey: event.target.value
     });
   }

   render() {
     return (
       <div>
         <div className="serch-form">
           <form className="form-inline">
             <input type="text" value={this.state.searchKey} onChange={this.searchProducts} className="form-control" placeholder="Search Products..."/>
           </form>
           {this.state.searchKey.length>0 &&
           <div className="list-group">
               {this.props.listCategory.map(cat=>
                 cat.products.map(pro=>
                 pro.title.toLowerCase().search(this.state.searchKey.toLowerCase()) >= 0 &&
                 <NavLink to={'/'+cat.slug+'/'+pro.id_p} key={pro.id_p} className="list-group-item info" activeClassName="active">{pro.title} </NavLink>
               ))}
           </div>
           }
         </div>
         <div className="list-group">
           {this.props.listCategory.map( cat =>
           <NavLink to={'/'+cat.slug} key={cat.id_c} className="list-group-item info" activeClassName="active">{cat.category} </NavLink>
           )}
         </div>
       </div>
     );
   }
 }

export default SidebarLeft;
