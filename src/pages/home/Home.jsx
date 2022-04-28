import React from "react";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Side from "../../components/side/Side";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <main id="main">
                <Post />
                <Side />
            </main>
        </>
    );
}

export default Home;
