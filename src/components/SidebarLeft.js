import React from 'react';
import {NavLink} from 'react-router-dom';


class SidebarLeft extends React.Component {
   constructor(props) {
     super(props);
     this.state = {displayInput: false, inputCategory: ''};
     this.displyFormAdd = this.displyFormAdd.bind(this);
     this.changeCategory = this.changeCategory.bind(this);
     this.submitCategory = this.submitCategory.bind(this);
   }

   displyFormAdd() {
      this.setState({displayInput: !this.state.displayInput});
   }

   changeCategory(event){
       this.setState({inputCategory: event.target.value});
   }

   submitCategory(event){
       this.props.addNewCategory(this.state.inputCategory);
       this.setState({displayInput: false, inputCategory: ''});
       event.preventDefault();
   }

   render() {
     return (
         <div className="col-sm-3 col-md-2 sidebar">
           <ul className="nav nav-sidebar">
             {this.props.listCategory.map( cat =>
             <li key={cat.id_c}><NavLink to={'/'+cat.slug} activeClassName="active">{cat.category}</NavLink></li>
             )}
             {this.state.displayInput && <li>
               <form onSubmit={this.submitCategory}>
                 <input className="add-input-category" name="category" value={this.state.inputCategory} onChange={this.changeCategory}/>
               </form>
             </li>}
           </ul>
          <button type="button" className="btn btn-primary add-category" onClick={this.displyFormAdd}>{this.state.displayInput ? 'Cancel' : 'Add Category'}</button>
         </div>
     );
   }
 }

export default SidebarLeft;
