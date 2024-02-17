import React from "react";



export const Message = ({message, onClose}) => {
    return (
        <div className="message">
            {message}
            <button className="close-button" onClick={onClose}>
                X
            </button>
        </div>
    )
}