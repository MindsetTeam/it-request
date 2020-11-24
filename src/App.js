import React, { Component, Suspense } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Home Component
const Home = React.lazy(() => import("./component/Home/index"));

export class App extends Component {
   render() {
      return (
         <div className="App">
            <Router>
               <Suspense fallback={() => <p>Loading</p>}>
                  <Switch>
                     <Route path="/">
                        <Home></Home>
                     </Route>
                  </Switch>
               </Suspense>
            </Router>
         </div>
      );
   }
}

export default App;
