import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Box.css";
import "./Pick.css";
import "./Inside.css";


const Enter = () => {
    const navigate = useNavigate();
    
    const InPutInformtaion = () => {
        navigate('/information',{
            state : {
                
            }
        });
    };
    return (
        <div className="people">
            <button className="empty_box" onClick={InPutInformtaion}>
                참여하기
            </button>
            <div className="name">
                ?
            </div>
        </div>
    );
};

export default Enter;
