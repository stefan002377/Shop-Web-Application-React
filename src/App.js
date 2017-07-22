import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderTop from './components/HeaderTop';
import SidebarLeft from './components/SidebarLeft';
import Content from './components/Content';
import ContentProduct from './components/ContentProduct';
import Cart from './components/Cart';
import $ from "jquery";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataInfo: [],
      dataSearch: '',
      cartProducts: []
    };
    this.addProductCart = this.addProductCart.bind(this);
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

  addProductCart(newProduct) {
    alert(newProduct);
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
            <SidebarLeft listCategory={this.state.dataInfo} searchKey={this.state.dataSearch} />
          </div>
          <div className="col-md-9 col-lg-9 col-sm-9 contentinfo">
            <Route exact path="/" render={props => <Content listProducts={this.state.dataInfo} searchKey={this.state.dataSearch} {...props} />} />
            <Route exact path="/cart" render={props => <Cart listProducts={this.state.dataInfo}  {...props}/>} />
            <Route exact path="/:slug" render={props => <Content listProducts={this.state.dataInfo} searchKey={this.state.dataSearch} {...props} />} />
            <Route path="/cart/:id_p" render={props => <Cart listProducts={this.state.dataInfo}  {...props}/>} />
            <Route path="/:slug/:id_p" render={props => <ContentProduct listProducts={this.state.dataInfo} addProductCart={this.addProductCart}  {...props} />} />
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
