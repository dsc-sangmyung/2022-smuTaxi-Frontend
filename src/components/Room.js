import {React, useState} from "react";
import {useLocation} from "react-router";
import { useNavigate } from "react-router-dom";
import logoPath from '../components/arrow.png';
import dummy from "../db/data.json"
import "./Box.css";
import "./Time.css";
import "./Room.css";



const Room = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const [roomId, setRoomid] =  useState();

    const clickRoom = (event) => {
        setRoomid(event.target.value);
    }
    
    const clickCompleteButton = () => {
        navigate('/inside',{
            state : {
                start : location.state.start,
                dst:location.state.dst,
                time : location.state.time
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
                <div className="FinalTime">{location.state.time}</div>
                <div className="inner_box">
                    { 
                    <div className="peopleNum">
                        <div>
                            {dummy.data.map((item, ind)=>{
                                return (
                                    <button key={ind} className={item.member.length ==4 ? "full":""} value={item.roomId} onClick={clickRoom}>{item.member.length}/4</button>
                                );
                            })}
                        <button className="plus"> + </button>
                        </div>
                    </div> 
                    }
                </div>
                </div>
                <button onClick={clickCompleteButton} className={roomId? "button_true" : "button_false"}>
                    선택완료
                </button>
            </div>
    
            
        )   
    }

export default Room;