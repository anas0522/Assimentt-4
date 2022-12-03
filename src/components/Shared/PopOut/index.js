import React, { useState } from 'react';
import './style.css'
import Popup from 'reactjs-popup';
function PopOut(props) {
    const Modal = () => (
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
            <span> Modal content </span>
        </Popup>
    );
    return (
        <div>
            {Modal()}
        </div>
    )
}

export default PopOut;