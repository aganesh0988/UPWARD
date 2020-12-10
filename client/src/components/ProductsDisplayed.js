import React from 'react';
import { useHistory } from 'react-router-dom';


const ProductsDisplayed = (props) => {
  const { product } = props;

  let history = useHistory()

  const productHandle = () => {
    history.push(`products/detail/${product.id}`)
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
