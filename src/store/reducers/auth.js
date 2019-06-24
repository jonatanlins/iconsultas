const initialState = {
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, user: 'coloque a autenticação aqui' };

    case 'SIGN_UP':
      return { ...state, user: 'coloque a autenticação aqui' };

    case 'LOGIN_WITH_FACEBOOK':
      return { ...state, user: 'coloque a autenticação aqui' };

    case 'LOGOUT':
      return { ...state, user: null };

    default:
      return state;
  }
}
