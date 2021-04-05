import "./App.css";
import React from "react";
import Nav from "./components/Nav";
// import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import MovieSearch from "./components/MovieSearch";
import ImageSearch from "./components/ImageSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Watched" component={MovieSearch} />
        <Route path="/WatchList" component={ImageSearch} />

        <Route path="/Watched">
          <Watched />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
