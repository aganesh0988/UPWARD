import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ProductDetail from './ProductDetail';


const ProductsDisplayed = (props) => {
  const { product } = props;

  let history = useHistory()

  const productHandle = () => {
    history.push(`products/detail/${product.id}`);
    let pathEnd = parseInt(history.location.pathname.split('/')[3], 10)
    if (Number(pathEnd) !== pathEnd) {
      return <Redirect exact to={`products/detail/${product.id}`} />
    }
    return <ProductDetail />
  }

  return (
    <div className='product-img-wrapper'>
      <div className='product-img-container' onClick={productHandle}>
        <div
          alt={product.name}
          className='product-img-img'
          style={{ backgroundImage: `url(/images/${product.image})` }}>
        </div>
        <div className='product-img-name'>
          <h3 className='product-img-name__designer'>{product.Designer.name.toUpperCase()}</h3>
          <h4 className='product-img-name__name'>{product.name}</h4>
          <div>${product.price}</div>
        </div>
      </div>
    </div >
  )
}



export default ProductsDisplayed;
