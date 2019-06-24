const initialState = {
  city: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CITY':
      return { ...state, city: action.city };

    default:
      return state;
  }
}
