import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Catalog from "./Catalog";
import Cart from "./Cart";

 
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path='/' exact component={Catalog}/>
        <Route path='/cart'  component={Cart}/>
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
