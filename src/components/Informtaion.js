import {React, useDebugValue, useState} from "react";
import {useLocation} from "react-router";

import "./Information.css";
import "./Box.css";

const Information = () => {
    const clickCompleteButton = () => {

    }
    return (
        <div className="box">
            <div className="pin_height">
                <div className="input_inner_box">
                    <input type="text" className="input_name"></input>
                    <div className="sex">
                        <button className="female">여자</button>
                        <button className="male">남자</button>
                    </div>
                    <div className="line">
                        <span className="keyword">인상착의 키워드</span>
                    </div>
                    
                    <div className="btn_pl_mi">
                        <button className="mi">-</button>
                        <button className="plus">+</button>
                    </div>
                </div>
            </div>
            <button onClick={clickCompleteButton} className="button_true">
                    선택완료
            </button>
        </div>
    );
};

export default Information;
