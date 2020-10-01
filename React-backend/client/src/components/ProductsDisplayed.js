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
          <h3>{product.name.toUpperCase()}</h3>
          <h4>{product.Designer.name}</h4>
        </div>
      </div>
    </div >
  )
}



export default ProductsDisplayed;
