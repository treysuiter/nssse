import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NSSSE from './components/NSSSE'


ReactDOM.render(
    <Router>
      <NSSSE />
    </Router>,
    document.getElementById("root")
  );
