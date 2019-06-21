import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from './pages/Home'
import Search from './pages/Search'
import Trainer from './pages/Trainer'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/trainer" component={Trainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
