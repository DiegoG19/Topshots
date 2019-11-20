import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Games from "./Pages/Games";
import ReactDOM from "react-dom";
import Toolbar from './component/Toolbar/Toolbar';
import AccountPage from './Pages/Account';
import FavoritesPage from './Pages/Favorites';
import NewPage from './Pages/New';
import LoginPage from './Pages/Login';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Toolbar />
        <Route exact path="/" component={Games} />
        <Route path="/account" component={AccountPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/new" component={NewPage} />
        <Route path="/login" component={LoginPage} />
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
