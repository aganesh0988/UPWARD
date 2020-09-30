// import { Products } from "../components/Products";

// const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

// const updateProducts = products => ({ type: UPDATE_PRODUCTS, products });

// export const actions = {
//   updateProducts,
// };

// const getProducts = () => {
//   return async (dispatch, getState) => {
//     const { auth: { token } } = getState();
//     const response = await fetch("http://localhost:8000/api/products", {
//       headers: { 'Authorization': `Bearer ${token}` },
//     });
//     const data = await response.json();
//     dispatch(updateProducts(data));
//   }
// }

// export const thunks = {
//   getProducts,
// };

// const initialState = [
//   {
//     name: 'Gabrielle Robe Dress, Teal', designerId: 1, categoryId: 5,
//     description: `Wrap front with velvet waist tie closure. Paillette sequin embellished fabric. Self & Lining: 100% viscose. Dry clean only. Made in India.`,
//     image: 'retrofeteg.png', price: 635, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
//   },
// ];

// function reducer(state = initialState, action) {
//   // switch (action.type) {
//   //   case UPDATE_PRODUCTS: {
//   //     return [...action.products];
//   //   }
//   //   default: {
//   return state;
// }
// //   }
// // }

//export default reducer;

import { removeUser } from './auth';

const LOAD = "products/LOAD";

const load = (products) => {
  return {
    type: LOAD,
    products
  };
};

export const getProducts = () => async dispatch => {
  const res = await fetch('/api/products');
  if (res.ok) {
    const data = await res.json();
    dispatch(load(data));
    return data;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
};


export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return action.products;
    default:
      return state;
  }
}
