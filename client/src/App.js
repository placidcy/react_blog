import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import View from "./pages/view/View";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/join">
                    <Join />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/write">
                    <Write />
                </Route>

                <Route path="/view">
                    <View />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
