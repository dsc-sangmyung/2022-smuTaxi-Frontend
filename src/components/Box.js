import React from "react";
import { useState } from "react";
import "./Box.css";

const Box = (props) => {
    const [value, setValue] = useState(false);
    const [btn, setBtn] = useState('button_false');

    const handleGoChange = () => {
        setValue('등교');
        setBtn('button_true');
    };

    const handleBackChange = () => {
        setValue('하교');
        setBtn('button_true');
    };

    const clickButton = () => {
        if(btn === 'button_false') {
            console.log("완료할 수 없습니다");
        } else {
            console.log(value, "를 선택하셨습니다.");
        }
    };


    return (
        <div className="box">
            <div className="content_box">
                <RadioButton
                    // label="등교"
                    value={value === '등교'}
                    onChange={handleGoChange}
                />
                <p>등교</p>
            </div>
            <div className="content_box">
                <RadioButton
                    // label="하교"
                    value={value === '하교'}
                    onChange={handleBackChange}
                />
                <p>하교</p>
            </div>

            <button onClick={clickButton} className={btn}>
                선택완료
            </button>
        </div>
    );
};

const RadioButton = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="radio" checked={value} onChange={onChange}/>
            {label}
        </label>
    );
};

export default Box;