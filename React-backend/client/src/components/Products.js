import React from 'react';
import { getProducts } from '../store/products';
import { connect } from "react-redux";
//import { connect } from 'react-redux';

// const ProductsTable = props =>
//   <li>
//     {props.products.map(product => <ul key={product.id} product={product} />)}
//   </li>

// ProductsTable.defaultProps = {
//   products: [],
// }

// const

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (Object.keys(this.props.products).length === 0) return null;
    const items = this.props.products.map(product => {
      return <div>{product.name}, {product.description}, {product.image}</div>//create header image tag etc(maybe another )
    })
    return (
      <div>{items}</div>
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
