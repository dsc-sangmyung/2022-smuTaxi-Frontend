import React from "react";
import styled from 'styled-components';
import * as box from "./BoxStyle";
import BottomBtn from '../Common/BottomBtn';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClickBtn = styled.div`
    margin: 0 auto;
    width: 106px;
    height: 106px;
    border-radius: 50%;
    box-shadow: 5px 4px 15px 1px rgba(0, 0, 0, 0.25) inset;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? '#778EFF' : '#fff')};
`;
const Box = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [btn, setBtn] = useState(false);
    const navigate = useNavigate();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setBtn(true);
    };

    return (
        <box.Box>
            <box.PinHeight>
                <box.ContentBox>
                    <ClickBtn isSelected={selectedOption === '등교'} onClick={() => handleOptionChange('등교')}/>
                    <box.Text>등교</box.Text>
                </box.ContentBox>
                <box.ContentBox>
                <ClickBtn isSelected={selectedOption === '하교'} onClick={() => handleOptionChange('하교')}/>
                    <box.Text>하교</box.Text>
                </box.ContentBox>
            </box.PinHeight>
            
            <BottomBtn btnName={'선택완료'} isSelected={btn}/>
        </box.Box>
    );
};

export default Box;