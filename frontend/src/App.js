import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Container } from "./layouts";
import { store } from "./services/store";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Container} />
      </Switch>
    </Router>
  );
}

export default App;
