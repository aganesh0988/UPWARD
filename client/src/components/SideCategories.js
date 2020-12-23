import React from 'react';
import { NavLink } from 'react-router-dom';

const SideCategories = (props) => {
  const { category } = props;
  const path = `/products/${category.id}`;
  return (
    <div className='categories-side-panel__category'>
      <NavLink to={path} exact={true} activeClassName="active">{category.name}</NavLink>
    </div>
  )
}



export default SideCategories;















// import React from 'react';

// const SideCategories = (props) => {
//   const { product } = props;
//   return (

//     <h4>{product.Category.name}</h4>

//   )
//   // product.Category.map(category => {
//   //   return <ul key={category.name} category={category}> </ul>
//   // })
// }





// <ul>
//   <li><NavLink to="/Accessories" activeClassName="active">Accessories</NavLink></li>
//   <li><NavLink to="/Activewear" activeClassName="active">Activewear</NavLink></li>
//   <li><NavLink to="/Bags" activeClassName="active">Bags</NavLink></li>
//   <li><NavLink to="/Denim" activeClassName="active">Denim</NavLink></li>
//   <li><NavLink to="/Dresses" activeClassName="active">Dresses</NavLink></li>
//   <li><NavLink to="/Jackets" activeClassName="active">Jackets and Coats</NavLink></li>
//   <li><NavLink to="/Jumpsuits" activeClassName="active">Jumpsuits and Rompers</NavLink></li>
//   <li><NavLink to="/Pants" activeClassName="active">Pants</NavLink></li>
//   <li><NavLink to="/Shoes" activeClassName="active">Shoes</NavLink></li>
//   <li><NavLink to="/Shorts" activeClassName="active">Shorts</NavLink></li>
//   <li><NavLink to="/Skirts" activeClassName="active">Skirts</NavLink></li>
//   <li><NavLink to="/" activeClassName="active"></NavLink></li>
// </ul>

//export default SideCategories;
