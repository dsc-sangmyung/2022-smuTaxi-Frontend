import React from "react";
import styled from 'styled-components';

const TitleName = styled.div`
    font-size: 25px;
    text-align: center;
    margin-bottom: 7.58vh;
    font-family: "Noto Sans KR";
    font-weight: 700;
    color: #424242;
`;
const Title = (props) => {
    return (
        <TitleName>
            {props.title}
        </TitleName>
    );
};

export default Title;