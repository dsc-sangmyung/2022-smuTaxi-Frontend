import {React, useState} from "react";
import styled from 'styled-components';
import {useLocation} from "react-router";
import { useNavigate } from "react-router-dom";
import * as box from "./Box/BoxStyle";
import BottomBtn from "./Common/BottomBtn";
import logoPath from '../components/arrow.png';

const Place = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PlaceBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 129px;
    height: 3.90vh;
    border: none;
    border-radius: 24px;
    background: #FFF;
    color: #4F66E3;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
`;
const Arrow = styled.img`
    margin: 0px 13px;
`;
const FinalTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 196px;
    height: 4.14vh;
    border-radius: 12px;
    background: #FFF;
    margin: 0 auto;
    margin-top: 5.62vh;
    margin-bottom: 1.65vh;
    color: #778EFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
`;
const InnerBox = styled.div`
    width: 100%;
    height: 39.69vh;
    background-color: #fff;
    border-radius: 20px;
    padding: 3.79vh 29px;
    overflow : auto;
    &::-webkit-scrollbar{
        display:none;
    }
`;
const TimeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > button {
        width: 70px;
        height: 6.04vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        margin-bottom: 1.65vh;
        border-radius: 12px;
        border: none;
        background: #F1F1F1;

        color: #778EFF;
        text-align: center;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
    }
`;
const Time = () => {
    const [time, setTime] = useState('시간');
    const times = [
        '14:00', '14:15', '14:30', '14:45', '15:00', '15:15',
        '15:30', '15:45', '16:00', '16:15', '16:30', '16:45',
        '17:00', '17:15', '17:30', '17:45', '18:00', '18:15',
        '18:30', '18:45', '19:00', '19:15', '19:30', '19:45',
        '20:00', '20:15', '20:30', '20:45', '21:00', '21:15',
        '21:30', '21:45', '22:00', '22:15', '22:30', '22:45',
        '23:00', '23:15', '23:30', '23:45', '00:00', '00:15',
        '00:30', '00:45', '01:00', '01:15', '01:30', '01:45',
        '02:00', '02:15', '02:30', '02:45', '03:00', '03:15',
        '03:30', '03:45', '04:00', '04:15', '04:30', '04:45'
    ];
    const [btn, setBtn] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const pickTime = (event) => {
        setTime(event.target.value);
        setBtn(true);
    };

    const clickCompleteButton = () => {
        navigate('/room',{
            state : {
                start : location.state.start,
                dst:location.state.dst,
                time : time
            }
        });
    };

    return(
        <box.Box>
            <box.PinHeight>
                <Place>
                    <PlaceBtn>{location?.state.start}</PlaceBtn>
                    <Arrow src={logoPath}/>
                    <PlaceBtn>{location?.state.dst}</PlaceBtn>
                </Place>
                <FinalTime>{time}</FinalTime>
                <InnerBox>
                    <TimeBox>
                    {times.map((time, index) => (
                        <button key={index} onClick={pickTime} value={time}>
                            {time}
                        </button>
                        ))
                    }
                    </TimeBox>
                </InnerBox>
                <BottomBtn onClick={clickCompleteButton} btnName={'선택완료'} isSelected={btn}/>
            </box.PinHeight>
        </box.Box>

    )
}
export default Time;