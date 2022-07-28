import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import closePath from "../static/img/close.png";
import logoPath from '../components/arrow.png'
import People from "./People";
import Enter from "./Enter";
import "./Pick.css";
import "./Inside.css";
import "./Box.css";
import axios from "axios";

const Inside = () => {

    const [room, setRoom] = useState({data: {
        people: []
    }});
    const location = useLocation();
    const getRooms = async () => {
        const res = await axios.get(`http://localhost:3000/rooms/${location.state.roomId}`);
        setRoom(res);
        console.log(res);
    };
    
    useEffect(() => {
        getRooms();
     }, [])

    return (
        <div className="box">
            <div className="pin_height">
                <div className="place">
                    <button>{location.state.start}</button>
                    <img src={logoPath}></img>
                    <button>{location.state.dst}</button>
                </div>
                <div className="FinalTime">
                        {location.state.time}
                </div>
                <div className="room">
                    <div className="room_head">
                        <span>{room.data.room == null? "0":room.data.room.member.length}/4</span>
                        <img src={closePath}></img>
                    </div>
                    <div className="people_box">
                        {room.data.people.map((item, ind)=>{
                                return (
                                    <People key={ind} data={item}/>
                                );
                        })}
                        <Enter/>
                        <Enter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inside;
