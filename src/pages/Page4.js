import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Time from "../components/Time";

const Page4 = (props) => {

    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Time></Time>
        </div>
    );
};

export default Page4;