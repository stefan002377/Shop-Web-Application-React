import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import Header from './components/Header';
import Products from './components/Products';
import ProductSingle from './components/ProductSingle';
import Cart from './components/Cart';

class ShopReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCategory: [],
      listProducts: [],
      cart: []
    };
    this.addProductCart = this.addProductCart.bind(this);
    this.deleteProductCart = this.deleteProductCart.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    $.ajax({
      method: 'GET',
      url: '/data/products.json',
      success: (listProducts) => {
        this.setState({
          listCategory: listProducts[0].categories,
          listProducts: listProducts[0].products
        });
      }
    });
  }

  addProductCart(id_p) {
    let tempCart = this.state.cart;
    if(tempCart.indexOf(id_p) === -1){
      tempCart.push(id_p);
      this.setState({
        cart: tempCart
      });
    }
  }

  deleteProductCart(id_p) {
    let tempCart = this.state.cart;
    tempCart = tempCart.filter(d => d!==id_p);
    this.setState({
      cart: tempCart
    });
  }

  render() {
    return (
      <Router>
      <div>
        <Header cartProduct={this.state.cart}/>
        <div className="container">
          <div className="row content">
            <Switch>
              <Route exact path="/reactjs-shop/" render={props => <Products listCategory={this.state.listCategory} listProducts={this.state.listProducts} {...props} />} />
              <Route exact path="/reactjs-shop/cart" render={props => <Cart listProducts={this.state.listProducts} cartInfo={this.state.cart} deleteProductCart={this.deleteProductCart}  {...props}/>} />
              <Route exact path="/reactjs-shop/:slug" render={props => <Products listCategory={this.state.listCategory} listProducts={this.state.listProducts} {...props} />} />
              <Route path="/reactjs-shop/product/:id_p" render={props => <ProductSingle listProducts={this.state.listProducts} cartInfo={this.state.cart} addProductCart={this.addProductCart}  {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<ShopReact/>, document.getElementById('root'));
