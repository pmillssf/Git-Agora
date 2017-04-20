const comment = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state];
    default:
      return state;
  }
};


const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: comment(state.comments, action)
      };
    case 'FETCHING_COMMENTS':
      return {
        ...state,
        fetchingComments: true
      };
    case 'RECEIVED_COMMENTS':
      return {
        ...state,
        comments: action.payload,
        fetchingComments: false
      };
    default:
      return state;
  }
}



export default comments;



