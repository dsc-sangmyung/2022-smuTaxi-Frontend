import {React, useState} from "react";
import {useLocation} from "react-router";
import closePath from "../static/img/close.png";
import logoPath from '../components/arrow.png'
import People from "./People";
import Enter from "./Enter";
import "./Pick.css";
import "./Inside.css";
import "./Box.css";

const Inside = () => {

    const location = useLocation();
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
                        <span>2/4</span>
                        <img src={closePath}></img>
                    </div>
                    <div className="people_box">
                        <People/>
                        <People/>
                        <Enter/>
                        <Enter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inside;
