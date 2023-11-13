import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import BottomBtn from "./Common/BottomBtn";
import PlaceBox from "./Box/PlaceBox";
import * as box from "./Box/BoxStyle";
import styled from 'styled-components';
import "./Pick.css";

const PlaceTitleBtn = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 224px;
    height: 6.87vh;
    background-color: #4F66E3;
    color: #fff;
    border-radius: 20px;
    margin-bottom: 3.79vh;
    margin-top: ${(props)=>(props.destination ? '4.05vh' : '0vh' )};
    cursor: pointer;
    /* text */
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;

`;
const RowPlaceBox = styled.div`
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 13px;
    display: ${(props)=>(props.isDisplay ? 'grid' : 'none')};
`;
const Pick = () => {
    const [selectPlace, setSelectPlace] = useState(null);
    const [selectDstPlace, setSelectDstPlace] = useState(null);
    const [state, setState] = useState(false);
    const [start, setStart] = useState(false);
    const [dst, setDst] = useState(false);
    const [btn, setBtn] = useState(false);
   
    const navigate = useNavigate();

    const handlePlaceBtn = (isStart) => {
        if (isStart === '출발지') {
            setStart(true);
            setDst(false);
            
        } else if (isStart === '도착지') {
            setDst(true);
            setStart(false);
        }
    }
    const handlePlaceVal = (place) => {
        setSelectPlace(place);
        setBtn(true);
        localStorage.setItem('place', place);
    }
    const handleDstPlaceVal = (dstPlace) => {
        setSelectDstPlace(dstPlace);
        setBtn(true);
        localStorage.setItem('dstPlace', dstPlace);
    }
    const startPlace =[
        { name: '두정역' },
        { name: '천안역' },
        { name: '터미널' },
    ]
    const dstPlace = [
        { name : '정문'},
        { name : '한누리관'},
        { name : '기숙사'},
        { name : '안서 동보'},
        { name : '디자인대학'},
        { name : '굴다리'},
    ]
    return(
        <box.Box>
            <box.PinHeight>
                <PlaceTitleBtn onClick={()=>handlePlaceBtn('출발지')}>출발지</PlaceTitleBtn>
                <RowPlaceBox isDisplay={start}>
                    {startPlace.map(item => (
                        <PlaceBox start={'start'} place={item.name} isSelected={selectPlace == item.name}
                        onClick={() => handlePlaceVal(item.name)}/>
                    ))}
                </RowPlaceBox>
                <PlaceTitleBtn destination={'도착지'} onClick={()=>handlePlaceBtn('도착지')}>도착지</PlaceTitleBtn>
                <RowPlaceBox isDisplay={dst}>
                    {dstPlace.map(item => (
                        <PlaceBox dst={'dst'} place={item.name} isSelected={selectDstPlace == item.name}
                        onClick={() => handleDstPlaceVal(item.name)}/>
                    ))}
                </RowPlaceBox>
            </box.PinHeight>
            <BottomBtn btnName={'선택완료'} isSelected={btn}/>
        </box.Box>
    )
};

export default Pick;
