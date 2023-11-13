import React from "react";
import * as c from "../components/Common/CommonStyle";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Pick from "../components/Pick";


const Page2 = (props) => {

    return (
        <c.TotalMainFrame>
            <c.ScreenComponent>
                <TopBar/>
                <Title title={'출발지 선택'}/>
                <Pick/>
            </c.ScreenComponent>
        </c.TotalMainFrame>
    );
};

export default Page2;