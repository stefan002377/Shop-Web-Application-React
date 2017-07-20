import React from 'react';
import {NavLink} from 'react-router-dom';


class SidebarRight extends React.Component {
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
         <div className="col-sm-3 col-md-2 sidebar-right">
              <h2 className="titlesidebar">Shop CART</h2>
         </div>
     );
   }
 }

export default SidebarRight;
