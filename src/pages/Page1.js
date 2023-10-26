import React from "react";
import Title from "../components/Title";
import * as c from "../components/Common/CommonStyle";
import TopBar from "../components/Header";
import Box from "../components/Box/Box";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Page1 = () => {
    return (
        <c.TotalMainFrame>
            <c.ScreenComponent>
                <TopBar/>
                <Title title="등하교 선택"></Title>
                <Box/>
            </c.ScreenComponent>
        </c.TotalMainFrame>
    );
};

export default Page1;