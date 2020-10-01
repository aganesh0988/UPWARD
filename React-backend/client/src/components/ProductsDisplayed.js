import React from 'react';



const ProductsDisplayed = (props) => {
  const { product } = props;
  return (
    <div className='product-img-wrapper'>
      <div className='product-img-container'>

        <div
          alt={product.name}
          className='product-img-img'
          style={{ backgroundImage: `url(/images/${product.image})` }}>
        </div>
        <div className='product-img-name'>
          <h4 className='product-img-name__designer'>{product.Designer.name.toUpperCase()}</h4>
          <h3>{product.name}</h3>
        </div>
      </div>
    </div >
  )
}



export default ProductsDisplayed;
