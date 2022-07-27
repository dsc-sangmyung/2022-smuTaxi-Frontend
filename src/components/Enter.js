import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Box.css";
import "./Pick.css";
import "./Inside.css";


const Enter = () => {

    return (
        <div className="people">
            <div className="empty_box">
                참여하기
            </div>
            <div className="name">
                ?
            </div>
        </div>
    );
};

export default Enter;
