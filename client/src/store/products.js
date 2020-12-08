import { removeUser } from './auth';

const LOAD = "products/LOAD";
const SET_CURRENT = "products/SET_CURRENT";

const load = (products) => {
  return {
    type: LOAD,
    products
  };
};

const setCurrent = (products) => {
  return {
    type: SET_CURRENT,
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

export const getOneProduct = (id) => async (dispatch) => {
  const res = await fetch(`/api/products/detail/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setCurrent(data));
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
