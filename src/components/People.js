import {React} from "react";
import "./Box.css";
import "./Pick.css";
import "./Inside.css";


const People = (props) => {

    return (
        <div className="people">
            <div className="item_box">
                {props.data.item.map((item, ind)=>{
                    return (
                        <div key={ind} className="item">
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="name">
                {props.data.name} ({props.data.gender === "male"? "남":"여"})
            </div>
        </div>
    );
};

export default People;
