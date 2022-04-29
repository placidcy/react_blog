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
                <Route path="/">
                    <Home />
                </Route>

                <Route path="./pages/join/Join.jsx">
                    <Join />
                </Route>

                <Route path="./pages/login/Login.jsx">
                    <Login />
                </Route>

                <Route path="./pages/write/Write.jsx">
                    <Write />
                </Route>

                <Route path="/view">{/* <View /> */}</Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
