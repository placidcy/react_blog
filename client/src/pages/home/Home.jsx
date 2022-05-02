import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <main id="main">
                <Posts />
            </main>
        </>
    );
}

export default Home;
