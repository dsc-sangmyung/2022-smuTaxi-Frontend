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
    
    const clickCompleteButton = () => {

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
                        <button>4/4</button>
                        <button>2/4</button>
                        <div>
                            {dummy.map((roomId)=>(
                                <button key={roomId.id}>
                                    roomId {roomId.roomId}
                                </button>
                            ))}
                        </div>
                        <button className="plus"> + </button>
                    </div> 
                    }
                </div>
                </div>
                <button onClick={clickCompleteButton} className="button_true">
                    선택완료
                </button>
            </div>
    
            
        )   
    }


export default Room;