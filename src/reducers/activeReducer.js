const activeReducer = (state = "1", action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};

export default activeReducer;
