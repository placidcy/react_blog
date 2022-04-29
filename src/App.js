import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
//import View from "./pages/view/View";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>

                <Route path="/join" component={Join}></Route>

                <Route path="/login" component={Login}></Route>

                <Route path="/write" component={Write}></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
