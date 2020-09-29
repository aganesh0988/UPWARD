// const UPDATE_PRODUCTS = 'lecture/movies/UPDATE_MOVIES';

// const updateMovies = movies => ({ type: UPDATE_MOVIES, movies });

// export const actions = {
//   updateMovies,
// };

// const getMovies = () => {
//   return async (dispatch, getState) => {
//     const { auth: { token } } = getState();
//     const response = await fetch("http://localhost:8000/api/movies", {
//       headers: { 'Authorization': `Bearer ${token}` },
//     });
//     const data = await response.json();
//     dispatch(updateMovies(data));
//   }
// }

// export const thunks = {
//   getMovies,
// };

const initialState = [
  {
    name: 'Gabrielle Robe Dress, Teal', designerId: 1, categoryId: 5,
    description: `Wrap front with velvet waist tie closure. Paillette sequin embellished fabric. Self & Lining: 100% viscose. Dry clean only. Made in India.`,
    image: 'retrofeteg.png', price: 635, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
  },
];

function reducer(state = initialState, action) {
  // switch (action.type) {
  //   case UPDATE_MOVIES: {
  //     return action.movies;
  //   }
  //   default: {
  return state;
  //   }
  // }
}

export default reducer;
