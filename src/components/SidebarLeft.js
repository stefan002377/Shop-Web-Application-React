import React from 'react';
import {NavLink} from 'react-router-dom';

class SidebarLeft extends React.Component {
   render() {
     return (
       <div>
         <div className="serch-form">
           <form className="form-inline">
             <input type="text" value="" className="form-control" placeholder="Search..."/>
           </form>
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
