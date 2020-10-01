import React from 'react';
import { getProducts } from '../store/products';
import { connect } from "react-redux";
import ProductsDisplayed from './ProductsDisplayed';
import './Products.css';


class Products extends React.Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (Object.keys(this.props.products).length === 0) return null;
    const items = this.props.products.map(product => {
      return <ProductsDisplayed key={product.name} product={product} />
    })
    return (
      <div className='divBox'>{items}</div>
    )

  }

}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
