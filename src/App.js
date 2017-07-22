import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderTop from './components/HeaderTop';
import SidebarLeft from './components/SidebarLeft';
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

  render() {
    return (
      <Router>
      <div className="container">
        <div className="row header">
          <HeaderTop/>
        </div>
        <div className="row content">
          <div className="col-md-3 col-lg-3 col-sm-3 sidebar">
            <SidebarLeft listCategory={this.state.dataInfo} />
          </div>
          <div className="col-md-9 col-lg-9 col-sm-9 contentinfo">
            <Route exact path="/:slug" render={props => <Content listProducts={this.state.dataInfo} addNewProduct={this.addNewProduct} searchKey={this.state.dataSearch} {...props} />} />
            <Route exact path="/" render={props => <Content listProducts={this.state.dataInfo} addNewProduct={this.addNewProduct} searchKey={this.state.dataSearch} {...props} />} />
            <Route path="/:slug/:id_p" render={props => <ContentProduct listProducts={this.state.dataInfo}  {...props} />} />
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
