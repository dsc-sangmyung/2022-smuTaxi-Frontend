import React from "react";
import styled from 'styled-components';

const Button = styled.div`
    position: fixed;
    bottom: 40px;
    display: flex;
    justify-content: center;
    height: 70px;
    width:310px;
    align-items: center;
    border-radius: 20px;
    background-color: ${(props) => props.isSelected ? '#4F66E3' : '#fff'};
    color: ${(props) => props.isSelected ? '#fff' : '#000'};
    cursor: pointer;
`;

const Text = styled.div`
    font-family: Noto Sans KR;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;    
`;
const BottomBtn = (props) => {
    return(
        <Button isSelected={props.isSelected}>
            <Text>{props.btnName}</Text>
        </Button>
    );

};
export default BottomBtn;