// ADD_REQUEST
export const addRequest = ({ name = '', issue = '', status = 'New' }) => ({
  type: 'ADD_REQUEST',
  request: {
    name,
    issue,
    status
  }
});

// REMOVE_REQUEST
export const removeRequest = () => {
  type: 'REMOVE_REQUEST';
};

// EDIT_REQUEST
export const editRequest = () => {
  type: 'EDIT_REQUEST';
};
