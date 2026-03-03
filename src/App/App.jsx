import { useState } from "react";
import "../index.css";
import AppS from "./App.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
    return (
        <div className={AppS.container}>
            <Header />
            <Footer />
        </div>
    );
}

export default App;
