import { GET_KANYE_QUOTES, GET_MY_QUOTES } from "./../../actions/actions";

const initialState = {
  myQuotes: '',
  kanyeQuotes: '',
};

const quote = (state = initialState, action) => {
  switch (action.type) {
    case GET_KANYE_QUOTES:
      return { ...state, kanyeQuotes: action.payload };
    case GET_MY_QUOTES:
      return { ...state, myQuotes: action.payload };
    default:
      return state;
  }
};

export default quote;
