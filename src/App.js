import React, { useState } from "react";
import "./App.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//router-router
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//Firebase
import firebase from "firebase/app";
import "firebase/auth";

//Components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";

import { UserContext } from "./Contexts/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import firebaseConfig from "./Config/firebaseConfig";
//init Firebase Authentication

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
