import React from "react";
import * as c from "../components/Common/CommonStyle";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Time from "../components/Time";

const Page4 = (props) => {
  return (
    <c.TotalMainFrame>
      <c.ScreenComponent>
        <TopBar></TopBar>
        <Title title={props.title}></Title>
        <Time></Time>
      </c.ScreenComponent>
    </c.TotalMainFrame>
  );
};

export default Page4;
