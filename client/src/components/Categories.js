import React from 'react';
import { getCategories } from '../store/categories';
import { connect } from "react-redux";
import SideCategories from './SideCategories';
import ProductDetail from './ProductDetail';


class Categories extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    if (Object.keys(this.props.categories).length === 0) return null;
    const items = this.props.categories.map(category => {
      return <SideCategories key={category.name} category={category} />
    })
    return (
      <div className='categories-side-panel__category'>{items}</div>
    )

  }

}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
