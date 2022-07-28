import {React, useState} from "react";
import logoPath from '../components/intro.gif';
import { useNavigate } from "react-router-dom";
import "./Intro.css"
const Intro = () =>{
    const navigate = useNavigate();

    // useEffect(() => {
    //     let timer = setTimeout(() => {navigate('.go_back') 
    //     }, 2000);  
    // });

    return(
        <div className="full_box">
            <img src={logoPath} className="img_intro"></img>
        </div>
    )
}

export default Intro