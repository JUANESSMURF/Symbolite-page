import { SymMessage } from "../Logic";



export const SymStar = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container star-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Star</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-Star" onClick={() => handleButtonClick("★", "★")}>★</button>
                <button className="button-Star" onClick={() => handleButtonClick("☆", "☆")}>☆</button>
                <button className="button-Star" onClick={() => handleButtonClick("✡", "✡")}>✡</button>
                <button className="button-Star" onClick={() => handleButtonClick("✦", "✦")}>✦</button>
                <button className="button-Star" onClick={() => handleButtonClick("✧", "✧")}>✧</button>
                <button className="button-Star" onClick={() => handleButtonClick("⌑", "⌑")}>⌑</button>
                <button className="button-Star" onClick={() => handleButtonClick("✩", "✩")}>✩</button>
                <button className="button-Star" onClick={() => handleButtonClick("✪", "✪")}>✪</button>
                <button className="button-Star" onClick={() => handleButtonClick("⍟", "⍟")}>⍟</button>
                <button className="button-Star" onClick={() => handleButtonClick("❂", "❂")}>❂</button>
                <button className="button-Star" onClick={() => handleButtonClick("✫", "✫")}>✫</button>
                <button className="button-Star" onClick={() => handleButtonClick("✬", "✬")}>✬</button>
                <button className="button-Star" onClick={() => handleButtonClick("✭", "✭")}>✭</button>
                <button className="button-Star" onClick={() => handleButtonClick("✮", "✮")}>✮</button>
                <button className="button-Star" onClick={() => handleButtonClick("✯", "✯")}>✯</button>
                <button className="button-Star" onClick={() => handleButtonClick("✰", "✰")}>✰</button>
                <button className="button-Star" onClick={() => handleButtonClick("☪", "☪")}>☪</button>
                <button className="button-Star" onClick={() => handleButtonClick("⚝", "⚝")}>⚝</button>
                <button className="button-Star" onClick={() => handleButtonClick("⛤", "⛤")}>⛤</button>
                <button className="button-Star" onClick={() => handleButtonClick("⛥", "⛥")}>⛥</button>
                <button className="button-Star" onClick={() => handleButtonClick("⛦", "⛦")}>⛦</button>
                <button className="button-Star" onClick={() => handleButtonClick("⛧", "⛧")}>⛧</button>
                <button className="button-Star" onClick={() => handleButtonClick("⍣", "⍣")}>⍣</button>
                <button className="button-Star" onClick={() => handleButtonClick("⍣", "⍣")}>⍣</button>
                <button className="button-Star" onClick={() => handleButtonClick("≛", "≛")}>≛</button>
                <button className="button-Star" onClick={() => handleButtonClick("𓇼", "𓇼")}>𓇼</button>
                <button className="button-Star" onClick={() => handleButtonClick("𓇻", "𓇻")}>𓇻</button>
                <button className="button-Star" onClick={() => handleButtonClick("𓇽", "𓇽")}>𓇽</button>
                <button className="button-Star" onClick={() => handleButtonClick("꙳", "꙳")}>꙳</button>
                <button className="button-Star" onClick={() => handleButtonClick("⭑", "⭑")}>⭑</button>
                <button className="button-Star" onClick={() => handleButtonClick("⭒", "⭒")}>⭒</button>
                <button className="button-Star" onClick={() => handleButtonClick("𖤐", "𖤐")}>𖤐</button>
                <button className="button-Star" onClick={() => handleButtonClick("𖣔", "𖣔")}>𖣔</button>
                <button className="button-Star" onClick={() => handleButtonClick("⟡", "⟡")}>⟡</button>
                <button className="button-Star" onClick={() => handleButtonClick("⟢", "⟢")}>⟢</button>
                <button className="button-Star" onClick={() => handleButtonClick("⟣", "⟣")}>⟣</button>
                <button className="button-Star" onClick={() => handleButtonClick("⊹", "⊹")}>⊹</button>
                


            </div>
        </div>
    )
}