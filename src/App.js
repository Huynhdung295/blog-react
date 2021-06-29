import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import BlogDetails from "./components/BlogDetail/BlogDetails";
import NotFound from "./components/NotFound/NotFound";
import EditBlog from "./components/Edit/EditBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create/Create";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/update/:id">
              <EditBlog />
            </Route>
            <Route path="*">
              {/* Không cần path cũng được */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
