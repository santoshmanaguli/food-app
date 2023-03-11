import React from "react";
import Navbar from "../Components/Navbar";
import Body from "./Body";
import Footer from './Footer'

export default function homePage(){
    return(
        <>
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        </>
    )
}