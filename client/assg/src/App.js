import {BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Page1 from "./Page1";
import Page2 from "./page2"
function App() {
  return (
    <div className="App">
   <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
      </BrowserRouter>,
    </div>
  );
}

export default App;
