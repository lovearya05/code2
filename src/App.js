import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesServer from "./components/routes";
import { useDispatch } from "react-redux";
import { getAuth } from "@firebase/auth";
import { useEffect } from "react";
import { login, logout } from "./reduxStore/storeSlicer";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: '',
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <RoutesServer />
    </BrowserRouter>
  );
}

export default App;
