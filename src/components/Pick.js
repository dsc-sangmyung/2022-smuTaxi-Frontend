import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Box.css";
import "./Pick.css";


const Pick = () => {
    const [state, setState] = useState(false);
    const [start, setStart] = useState('출발지');
    const [dst, setDst] = useState('도착지');
   
    const navigate = useNavigate();

    const clickStart = (event) => {
        if (state==='start') {
            setState(false);
        } else {
            setState('start');
        }
    };

    const clickDst = () => {
        if (state==='dst') {
            setState(false);
        } else {
            setState('dst');
        }
    };

    const pickStart = (event) => {
        setStart(event.target.value);
        
    };

    const pickDst = (event) => {
        setDst(event.target.value);
    };

    const clickCompleteButton = () => {
        navigate('/time',{
            state : {
                start : start,
                dst:dst
            }
        });
    };

    return (
        <div className="box">
            <div className="pin_height">
                <button onClick={clickStart} className={state === 'start'? "start_button_true":"start_button_false"}>{start}</button>
                {state==='start' && <div className="start_list">
                    <button onClick={pickStart  } value='두정역'>두정역</button>
                    <button onClick={pickStart} value='천안역'>천안역</button>
                    <button onClick={pickStart} value='터미널'>터미널</button>
                </div> }
                <div></div>
                <button onClick={clickDst} className={state === 'dst'? "start_button_true":"start_button_false"}>{dst}</button>
                { state === 'dst' && <div className="start_list">
                    <div>
                        <button onClick={pickDst} value='정문'>정문</button>
                        <button onClick={pickDst} value='한누리관'>한누리관</button>
                        <button onClick={pickDst} value='기숙사'>기숙사</button>
                    </div>
                    <div>
                        <button onClick={pickDst} value='안서 동보'>안서 동보</button>
                        <button onClick={pickDst} value='디대'>디대</button>
                        <button onClick={pickDst} value='굴다리'>굴다리</button>
                    </div>
                </div> }
            </div>

            <button onClick={clickCompleteButton} className="button_true">
                선택완료
            </button>
        </div>
    );
};

export default Pick;
