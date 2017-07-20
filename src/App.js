import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderTop from './components/HeaderTop';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Content from './components/Content';
import ContentProduct from './components/ContentProduct';
import $ from "jquery";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataInfo: [],
      dataSearch: ''
    };
    this.addNewCategory = this.addNewCategory.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    $.ajax({
      method: 'GET',
      url: '/data/products.json',
      success: (listProducts) => {
        this.setState({dataInfo: listProducts});
      }
    });
  }

  searchProducts(newKey) {
    this.setState({dataSearch: newKey});
  }

  addNewProduct(newProduct) {
    console.log(newProduct);
  }

  addNewCategory(newCat) {
    let newCategory = {
        "id_c": this.state.dataInfo.length,
        "category": newCat,
        "slug": "/books-audible",
        "products": []
      }
    this.setState({dataInfo: [...this.state.dataInfo, newCategory]});
  }

  render() {
    return (
      <Router>
      <div><HeaderTop searchProducts={this.searchProducts}/>
        <div className="container-fluid">
          <div className="row">
            <SidebarLeft listCategory={this.state.dataInfo} addNewCategory={this.addNewCategory}/>
            <Route exact path="/:slug" render={props => <Content listProducts={this.state.dataInfo} addNewProduct={this.addNewProduct} searchKey={this.state.dataSearch} {...props} />} />
            <Route exact path="/" render={props => <Content listProducts={this.state.dataInfo} addNewProduct={this.addNewProduct} searchKey={this.state.dataSearch} {...props} />} />
            <Route path="/:slug/:id_p" render={props => <ContentProduct listProducts={this.state.dataInfo}  {...props} />} />
            <SidebarRight listCategory={this.state.dataInfo} addNewCategory={this.addNewCategory}/>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
