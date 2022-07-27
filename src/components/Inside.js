import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import closePath from "../static/img/close.png";
import "./Box.css";
import People from "./People";
import Enter from "./Enter";
import "./Pick.css";
import "./Inside.css";


const Inside = () => {

    return (
        <div className="box">
            <div className="pin_height">
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
