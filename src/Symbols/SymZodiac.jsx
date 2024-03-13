import { SymMessage } from "../Logic";



export const SymZodiac = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container zodiac-container">
            <div className="buttons-title-container">
                <h2>Símbolos Del Zodiaco</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-zodiac" onClick={() => handleButtonClick("♓", "♓")}>♓</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♒", "♒")}>♒</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♑", "♑")}>♑</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♐", "♐")}>♐</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♏", "♏")}>♏</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♎", "♎")}>♎</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♍", "♍")}>♍</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♌", "♌")}>♌</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♋", "♋")}>♋</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♊", "♊")}>♊</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♉", "♉")}>♉</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♈", "♈")}>♈</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("☉", "☉")}>☉</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("☽", "☽")}>☽</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("☿", "☿")}>☿</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♀", "♀")}>♀</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("⊕", "⊕")}>⊕</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♁", "♁")}>♁</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♂", "♂")}>♂</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♃", "♃")}>♃</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♄", "♄")}>♄</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♅", "♅")}>♅</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("⛢", "⛢")}>⛢</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♆", "♆")}>♆</button>
                <button className="button-zodiac" onClick={() => handleButtonClick("♇", "♇")}>♇</button>
            </div>
        </div>
    )
}