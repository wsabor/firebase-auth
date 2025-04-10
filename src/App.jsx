import Login from "./components/Login";
import Logout from "./components/Logout";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <>
      <h1>Autenticação com Firebase</h1>
      {user ? <Logout user={user} /> : <Login />}
    </>
  );
}

export default App;
