import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Box.css";
import "./Pick.css";
import "./Inside.css";


const People = () => {

    return (
        <div className="people">
            <div className="item_box">
                <div className="item">
                    파란모자
                </div>
                <div className="item">
                    청바지
                </div>
            </div>
            <div className="name">
                김수지 (여)
            </div>
        </div>
    );
};

export default People;
