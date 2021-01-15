const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch ((action.type, action.payload)) {
    default:
      return state;
  }
};
