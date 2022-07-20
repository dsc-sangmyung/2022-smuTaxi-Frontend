import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Pick from "../components/Pick";

const Page2 = (props) => {
    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Pick></Pick>
        </div>
    );
};

export default Page2;