import React from "react";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Box from "../components/Box";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Page1 = () => {
    return (
        <div className="main">
            <TopBar>
            </TopBar>
            <Title title="등하교 선택"></Title>
            <Box></Box>
        </div>
    );
};

export default Page1;