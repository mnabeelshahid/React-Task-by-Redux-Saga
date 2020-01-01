const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_SAGA":
      console.log("In Reducers");
      return { ...state };
    case "FETCH_DOG_BREEDS":
      console.log("redux Folder");

      return { ...state };
    case "STORE_DOG_BREEDS":
      console.log(action.payload);
      return {
        ...state,
        dogBreeds: action.payload
      };
    case "STORE_DOG_IMAGES":
      return {
        ...state,
        dogImages: action.payload
      };
      case "GET_IMAGES":
        return {
           ...state
        }
    case "SET_SELECTED_BREED":
      return {
        ...state,
        selectedBreed: action.payload
      };

    default:
      return state;
  }
};
