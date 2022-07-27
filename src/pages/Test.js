import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
// import Pick from "../components/Time";
import Inside from "../components/Inside";

const Page4 = (props) => {

    return (
        <div className="main">
            <TopBar></TopBar>
            <Title title="테스트 페이지"></Title>
            <Inside></Inside>
        </div>
    );
};

export default Page4;