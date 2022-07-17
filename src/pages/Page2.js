import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Box from "../components/Box";

const Page2 = (props) => {
    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title={props.title}></Title>
            <Box></Box>
        </div>
    );
};

export default Page2;