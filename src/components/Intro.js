import {React, useState} from "react";
import logoPath from '../components/intro.gif';
import { useNavigate } from "react-router-dom";
import "./Intro.css"
const Intro = () =>{
    const navigate = useNavigate();

    function Timer () {
        setTimeout(() => {
            navigate('./go_back')
        }, 3000);
    }

    return(
        <div className="full_box">
            <img src={logoPath} className="img_intro" onload={Timer()}></img>
        </div>
    )
}

export default Intro