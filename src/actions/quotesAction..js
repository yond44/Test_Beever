import { GET_KANYE_QUOTES, GET_MY_QUOTES } from "./actions";
import axios from "axios";

export const getKanyeQuotes = () => async (dispatch) => {
  await axios
    .get("https://api.kanye.rest")
    .then((response) =>
      dispatch({ type: GET_KANYE_QUOTES, payload: response.data.quote })
    )
    .catch((error) => console.log(error));
};

export const getMyQuotes = (myQuotes) => async (dispatch) => {
  dispatch({ type: GET_MY_QUOTES, payload: myQuotes });
};
