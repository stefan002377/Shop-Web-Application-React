import React from 'react';
import SidebarProducts from './SidebarProducts';
import ProductBox from './ProductBox';

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    };
    this.searchProducts = this.searchProducts.bind(this);
  }

  searchProducts(key) {
    this.setState({
      searchKey: key
    });
  }

  componentWillMount() {
      window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {

    let listProducts = this.props.listProducts;
    let id_cat = 0;
    let title_cat = 'All Products';

    if(this.props.match.params.slug) {
      this.props.listCategory.map(c => {
        if(this.props.match.params.slug===c.slug) {
          id_cat = c.id_cat;
          title_cat = c.title;
        }
        return c;
      });
    }

    if(id_cat !== 0) {
      listProducts = listProducts.filter( s => s.cat === id_cat);
    }

    if(this.state.searchKey.length > 0) {
      listProducts = listProducts.filter( s => (s.title.toLowerCase().search(this.state.searchKey.toLowerCase()) >= 0))
    }

    return (
    <div className="row content">
      <SidebarProducts listCategory={this.props.listCategory} searchKey={this.state.searchKey} searchProducts={this.searchProducts}/>
      <div className="col-md-9 col-lg-9 col-sm-9 contentinfo">
        <h3 className="page-header">{title_cat}</h3>
        <div className="row products">
          {listProducts.map(pro=>
            <div className="col-md-4 col-lg-4 col-sm-4" key={pro.id_p}>
              <ProductBox id_p={pro.id_p}  images={pro.images} title={pro.title} price={pro.price} shortdesc={pro.shortdesc}/>
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }
}

export default Products;
