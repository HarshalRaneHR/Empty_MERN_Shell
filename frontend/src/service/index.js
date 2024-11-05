const initialState = {
  JSONData: null,
  fetchedData: false,
};

const condition = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_DATA":
      return {
        ...state,
        fetchedData: action.payload,
      };
    case "JSON_DATA":
      return {
        ...state,
        JSONData: action.payload,
      };

    default:
      return state;
  }
};

export default condition;
