import {React, useState} from "react";
import {useLocation} from "react-router";
import { useNavigate } from "react-router-dom";
import logoPath from '../components/arrow.png'
import "./Box.css";
import "./Time.css";

const Time = () => {
    const [time, setTime] = useState('시간');

    const location = useLocation();
    const navigate = useNavigate();

    const pickTime = (event) => {
        setTime(event.target.value);
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
        <div className="box">
            <div className="pin_height">
                <div className="place">
                    <button>{location.state.start}</button>
                    <img src={logoPath}></img>
                    <button>{location.state.dst}</button>
                </div>
                <div className="FinalTime">
                    {time}
                </div>
                <div className="inner_box">
                    <div className="time">
                        <div>
                            <button onClick={pickTime} value='14:00'>14:00</button>
                            <button onClick={pickTime} value='14:15'>14:15</button>
                            <button onClick={pickTime} value='14:30'>14:30</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='14:45'>14:45</button>
                            <button onClick={pickTime} value='15:00'>15:00</button>
                            <button onClick={pickTime} value='15:15'>15:15</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='14:00'>15:30</button>
                            <button onClick={pickTime} value='14:15'>15:45</button>
                            <button onClick={pickTime} value='14:30'>16:00</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='16:15'>16:15</button>
                            <button onClick={pickTime} value='16:30'>16:30</button>
                            <button onClick={pickTime} value='16:45'>16:45</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='17:00'>17:00</button>
                            <button onClick={pickTime} value='17:15'>17:15</button>
                            <button onClick={pickTime} value='17:30'>17:30</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='17:45'>17:45</button>
                            <button onClick={pickTime} value='18:00'>18:00</button>
                            <button onClick={pickTime} value='18:15'>18:15</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='18:30'>18:30</button>
                            <button onClick={pickTime} value='18:45'>18:45</button>
                            <button onClick={pickTime} value='14:30'>19:00</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='19:15'>19:15</button>
                            <button onClick={pickTime} value='19:30'>19:30</button>
                            <button onClick={pickTime} value='19:45'>19:45</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='20:00'>20:00</button>
                            <button onClick={pickTime} value='20:15'>20:15</button>
                            <button onClick={pickTime} value='20:30'>20:30</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='20:45'>20:45</button>
                            <button onClick={pickTime} value='21:00'>21:00</button>
                            <button onClick={pickTime} value='21:15'>21:15</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='21:30'>21:30</button>
                            <button onClick={pickTime} value='21:45'>21:45</button>
                            <button onClick={pickTime} value='22:00'>22:00</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='22:15'>22:15</button>
                            <button onClick={pickTime} value='22:30'>22:30</button>
                            <button onClick={pickTime} value='22:45'>22:45</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='23:00'>23:00</button>
                            <button onClick={pickTime} value='22:15'>22:15</button>
                            <button onClick={pickTime} value='23:30'>23:30</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='23:45'>23:45</button>
                            <button onClick={pickTime} value='00:00'>00:00</button>
                            <button onClick={pickTime} value='00:15'>00:15</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='00:30'>00:30</button>
                            <button onClick={pickTime} value='00:45'>00:45</button>
                            <button onClick={pickTime} value='01:00'>01:00</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='01:15'>01:15</button>
                            <button onClick={pickTime} value='01:30'>01:30</button>
                            <button onClick={pickTime} value='01:45'>01:45</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='02:00'>02:00</button>
                            <button onClick={pickTime} value='02:15'>02:15</button>
                            <button onClick={pickTime} value='02:30'>02:30</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='02:45'>02:45</button>
                            <button onClick={pickTime} value='03:00'>03:00</button>
                            <button onClick={pickTime} value='03:15'>03:15</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='03:30'>03:30</button>
                            <button onClick={pickTime} value='03:45'>03:45</button>
                            <button onClick={pickTime} value='04:00'>04:00</button>
                        </div>
                        <div>
                            <button onClick={pickTime} value='04:15'>04:15</button>
                            <button onClick={pickTime} value='04:30'>04:30</button>
                            <button onClick={pickTime} value='04:45'>04:45</button>
                        </div>
                    </div>
                
                </div>
                <button onClick={clickCompleteButton} className="button_true">
                        선택완료
                </button>
            </div>
        </div>  

    )
}
export default Time;