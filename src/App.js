import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getKanyeQuotes } from "./actions/quotesAction.";
import Image from "./component/Image";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [myQuotes, setMyQuotes] = useState("");
  const dispatch = useDispatch();
  const [favoriteQoute, setfavoriteQuote] = useState([])
  const reduxState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getKanyeQuotes());
  }, [refresh]);

  const quotes = async (e) => {
    e.preventDefault();

    setRefresh(!refresh)
  };

  
  const favQuotes = async (e) => {
    e.preventDefault();
    
        // const duplicate = [...favoriteQoute];
        // duplicate.push(reduxState.QuotesReducer.kanyeQuotes);
        // setFavoriteQuote(duplicate);
      
    // for(let i = 0; i < favoriteQoute.length; i++) {
    //   if(favoriteQoute[i] == reduxState.QuoteReducer.kanyeQuotes) {
        favoriteQoute.push(reduxState.QuoteReducer.kanyeQuotes);
        setRefresh(!refresh)
    //     console.log(favoriteQoute[i]);
    //   } else {
    //     console.log("duplicate");
    //   }
    // /}

//     const duplicate = [...favoriteQoute];
// duplicate.push(reduxState.QuotesReducer?.kanyeQuotes)
// setfavoriteQuote(duplicate);
    console.log(favoriteQoute);
    
  };

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
          <button onClick={quotes}>Get Quote</button>
          <button onClick={favQuotes}>Add Favorite</button>
        </div>
      </form>
      {favoriteQoute?.map((quotes) => (
        <p style={{ textAlign: 'center' }}>{quotes} </p>
      ))}

      <div style={{ textAlign: "center" }}>
        <hr style={{ maxWidth: "30%", marginTop: 90 }}></hr>
        <h2>My Quotes</h2>
        <form style={{ display: "flex", justifyContent: "center" }}>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
