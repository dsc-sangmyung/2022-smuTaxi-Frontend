import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Room from "../components/Room";

const Page5 = (props) => {

    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Room></Room>
        </div>
    );
};

export default Page5;