import { removeUser } from './auth';

const LOAD = "categories/LOAD";

const load = (categories) => {
  return {
    type: LOAD,
    categories
  };
};

export const getCategories = () => async dispatch => {
  const res = await fetch('/api/categories');
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
      return action.categories;
    default:
      return state;
  }
}
