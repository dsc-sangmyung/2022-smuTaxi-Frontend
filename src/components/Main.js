import React from "react";
import Title from "./Title";
import TopBar from "./Header";
import "./Main.css"
import Box from "./Box";

const Main = () => {
    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title="등하교 선택"></Title>
            <Box text="등교"></Box>
        </div>
    );
};

export default Main;