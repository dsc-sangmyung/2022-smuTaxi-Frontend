import {React, useState, useEffect } from "react";
import {useLocation} from "react-router";
import { useNavigate } from "react-router-dom";
import logoPath from '../components/arrow.png';
import dummy from "../db/data.json"
import "./Box.css";
import "./Time.css";
import "./Room.css";
import axios from "axios";





const Room = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [rooms, setRooms] = useState({data: []});
    const [roomId, setRoomid] = useState();
    const getToday = () => {
        const today = new Date();
        let dateFormat = today.getFullYear() +
            '-' + ( (today.getMonth()+1) <9 ? "0" + (today.getMonth()+1) : (today.getMonth()+1)) +
            '-' + ( (today.getDate()) < 9 ? "0" + (today.getDate()) : (today.getDate()) );
        return dateFormat;
    }
    const today = getToday();

    const createRoom = async () => {
        const res = await axios.post(
            "http://localhost:3000/rooms",
            {
                "source": location.state.start,
                "destination": location.state.dst,
                "date": today,
                "time": location.state.time
            },
            {
                withCredentials: true
            }
        );
        window.location.reload();
    };

    const getRooms = async () => {
        const res = await axios.post(
            "http://localhost:3000/rooms/find",
            {
                "source": location.state.start,
                "destination": location.state.dst,
                "date": today,
                "time": location.state.time
            },
            {
                withCredentials: true
            }
        );
        setRooms(res);
    };

    useEffect(() => {
       getRooms();
    }, [])

    const clickRoom = (event) => {
        setRoomid(event.target.value);
    }
    
    const clickCompleteButton = () => {
        navigate('/inside',{
            state : {
                start : location.state.start,
                dst:location.state.dst,
                time : location.state.time,
                roomId: roomId
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
                            {rooms.data.map((item, ind)=>{
                                return (
                                    <button key={ind} className={item.member.length ==4 ? "full":""} value={item.room_id} onClick={clickRoom}>{item.member.length}/4</button>
                                );
                            })}
                        <button className="plus" onClick={createRoom}> + </button>
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