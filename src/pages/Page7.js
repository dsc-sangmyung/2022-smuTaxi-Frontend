import React from "react";
import TopBar from "../components/Header";
import Title from "../components/Title";
import Informtaion from "../components/Informtaion";

const Page7 = (props) => {

    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Informtaion></Informtaion>
        </div>
    );
};

export default Page7;