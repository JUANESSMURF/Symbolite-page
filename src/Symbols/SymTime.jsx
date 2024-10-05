import { SymMessage } from "../Logic";



export const SymTime = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container time-container">
            <div className="buttons-title-container">
                <h2>Símbolos Del Clima Y Tiempo</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-time" onClick={() => handleButtonClick("☀", "☀")}>☀</button>
                <button className="button-time" onClick={() => handleButtonClick("☁", "☁")}>☁</button>
                <button className="button-time" onClick={() => handleButtonClick("☂", "☂")}>☂</button>
                <button className="button-time" onClick={() => handleButtonClick("☃", "☃")}>☃</button>
                <button className="button-time" onClick={() => handleButtonClick("⛆", "⛆")}>⛆</button>
                <button className="button-time" onClick={() => handleButtonClick("⛇", "⛇")}>⛇</button>
                <button className="button-time" onClick={() => handleButtonClick("⛈︎", "⛈︎")}>⛈︎</button>
                <button className="button-time" onClick={() => handleButtonClick("☄", "☄")}>☄</button>
                <button className="button-time" onClick={() => handleButtonClick("☉", "☉")}>☉</button>
                <button className="button-time" onClick={() => handleButtonClick("☼", "☼")}>☼</button>
                <button className="button-time" onClick={() => handleButtonClick("☽", "☽")}>☽</button>
                <button className="button-time" onClick={() => handleButtonClick("☾", "☾")}>☾</button>
                <button className="button-time" onClick={() => handleButtonClick("♁", "♁")}>♁</button>
                <button className="button-time" onClick={() => handleButtonClick("♨", "♨")}>♨</button>
                <button className="button-time" onClick={() => handleButtonClick("❄", "❄")}>❄</button>
                <button className="button-time" onClick={() => handleButtonClick("❅", "❅")}>❅</button>
                <button className="button-time" onClick={() => handleButtonClick("❆", "❆")}>❆</button>
                <button className="button-time" onClick={() => handleButtonClick("༄", "༄")}>༄</button>
                <button className="button-time" onClick={() => handleButtonClick("࿓", "࿓")}>࿓</button>
                <button className="button-time" onClick={() => handleButtonClick("𐓷", "𐓷")}>𐓷</button>
                <button className="button-time" onClick={() => handleButtonClick("𐓏", "𐓏")}>𐓏</button>
                <button className="button-time" onClick={() => handleButtonClick("𖤓", "𖤓")}>𖤓</button>
                <button className="button-time" onClick={() => handleButtonClick("𖣔", "𖣔")}>𖣔</button>
            </div>
        </div>
    )
}