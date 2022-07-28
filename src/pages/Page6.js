import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Inside from "../components/Inside";

const Page6 = (props) => {

    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Inside></Inside>
        </div>
    );
};

export default Page6;