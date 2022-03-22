const initialValue = [];



const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case 'delete':
      return state.filter( (ele) => (+ele.id !== +action.payload ))
      case 'initializePosts':
        return action.payload
  }
};

export default reducer;
