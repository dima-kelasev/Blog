const initialState = {
  posts: [],
  name: 'vasya'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...initialState,
        posts: action.dataPosts
      }
    default:
      return state;
  }
};