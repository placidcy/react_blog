import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/write">
                    <Write />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
