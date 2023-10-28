import React from "react";
import styled from 'styled-components';

const TotalPlaceBoxstart = styled.div`
    border-radius: 12px;
    background: ${(props)=>props.isSelected ? '#778EFF' : '#FFF'};
    color: ${(props)=>props.isSelected ? '#FFF' : '#778EFF'};
    height: 12.44vh;
    width: 92px;
    cursor: pointer;
`;

const TotalPlaceBox = styled.div`
    border-radius: 12px;
    background: ${(props)=>props.isSelected ? '#778EFF' : '#FFF'};
    color: ${(props)=>props.isSelected ? '#FFF' : '#778EFF'};
    height: 12.44vh;
    width: 92px;
    cursor: pointer;
`;

const PalceText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
const PlaceBox = (props) => {
    return(
        <TotalPlaceBox isSelected={props.isSelected} onClick={props.onClick} isStart={props.start}>
            <PalceText>{props.place}</PalceText>
        </TotalPlaceBox>
    );
}
export default PlaceBox;