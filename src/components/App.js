import { useEffect, useState } from "react";
import { AuthService } from "../fbInstance";
import Introduce from "./introduce";
import Navigation from "./Navigation";
import Tweets from "./tweets";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    AuthService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
  return ( 
    <>
      {init ? <Navigation isLoggedIn={isLoggedIn} /> : "initializing...."}
      <Introduce />
      {isLoggedIn && <Tweets userObj={userObj} />}
    </>
  );
}

export default App;
