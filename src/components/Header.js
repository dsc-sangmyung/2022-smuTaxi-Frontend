import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import back from '../static/img/Back Icon.svg'

const TopBars = styled.div`
    min-height: 5vh;
`;

const Icons = styled.img`
    margin-top: 3.7vh;
    margin-bottom: 3.08vh;
`;

const TopBar = () => {
    const navigate = useNavigate();

    const back_click = () => {navigate(-1)}
    return (
        <TopBars className="top_bar">
            <Icons src={back} onClick={back_click}/>
        </TopBars>
    );
};

export default TopBar;