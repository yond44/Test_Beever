import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getKanyeQuotes } from "./actions/quotesAction.";
import Image from "./component/Image";

function App() {
  const [refresh, setRefresh] = useState(false)
  const [myQuotes, setMyQuotes] = useState('')
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getKanyeQuotes());
  }, []);

  let favoriteQoute = ''


  console.log(favoriteQoute);
  return (
    <div>
      <div
        className="App"
        style={{
          marginTop: 100,
          marginLeft: 30,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <a href="https://api.kanye.rest/">API SITE</a>
      </div>
      <Image style={{ marginTop: 100 }}></Image>

      <form style={{ marginTop: 10, textAlign: "center" }}>
        <h3 refresh={refresh} setRefresh={setRefresh}>
          <b>{reduxState.QuoteReducer.kanyeQuotes}</b>
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => dispatch(getKanyeQuotes())}>Get Quote</button>
          <button
            onClick={() =>
              favoriteQoute != reduxState.QuoteReducer.kanyeQuotes &&
              favoriteQoute.push(reduxState.QuoteReducer.kanyeQuotes)
            }
          >
            Add Favorite
          </button>
        </div>
      </form>

      <div>
        <hr style={{ maxWidth: '30%', marginTop: 90}}></hr>
        <form style={{display : 'flex'}}>
        <label>
          <h2></h2>
        </label>
          <input type='text'></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
