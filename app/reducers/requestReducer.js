// Request Reducer

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REQUEST':
      return [...state, action.request];
    case 'REMOVE_REQUEST':
      return state;
    case 'EDIT_REQUEST':
      return state;
    default:
      return state;
  }
};

export default requestReducer;
