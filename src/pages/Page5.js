import React from "react";
import * as c from "../components/Common/CommonStyle";
import Title from "../components/Title";
import TopBar from "../components/Header";
import Room from "../components/Room";

const Page5 = (props) => {
  return (
    <c.TotalMainFrame>
      <c.ScreenComponent>
        <TopBar></TopBar>
        <Title title={props.title}></Title>
        <Room></Room>
      </c.ScreenComponent>
    </c.TotalMainFrame>
  );
};

export default Page5;
