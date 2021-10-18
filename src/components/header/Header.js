import React from "react";
import kclogo from '../../assets/kclogo.png';

function Header() {
    return (
        <div className="headWrap">
            <div className="logoWrap">
            <img src={kclogo} />
            </div>
            <div className="headTextWrap">
            <h1>Welcome to Kennetic Concepts</h1>
            <h4>Official site for the 2022 relaunch</h4>
            </div>
        </div>
    );
}

export default Header;