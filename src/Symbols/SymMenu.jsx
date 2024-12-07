import { SymMessage } from "../Logic";



export const SymMenu = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container menu-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Menu</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-menu" onClick={() => handleButtonClick("☰", "☰")}>☰</button>
                <button className="button-menu" onClick={() => handleButtonClick("≡", "≡")}>≡</button>
                <button className="button-menu" onClick={() => handleButtonClick("Ξ", "Ξ")}>Ξ</button>
                <button className="button-menu" onClick={() => handleButtonClick("㊂", "㊂")}>㊂</button>
                <button className="button-menu" onClick={() => handleButtonClick("≣", "≣")}>≣</button>
                <button className="button-menu" onClick={() => handleButtonClick("⁝", "⁝")}>⁝</button>
                <button className="button-menu" onClick={() => handleButtonClick("⋮", "⋮")}>⋮</button>
                <button className="button-menu" onClick={() => handleButtonClick("︙", "︙")}>︙</button>
                <button className="button-menu" onClick={() => handleButtonClick("⦙", "⦙")}>⦙</button>
                <button className="button-menu" onClick={() => handleButtonClick("⁞", "⁞")}>⁞</button>
                <button className="button-menu" onClick={() => handleButtonClick("⋯", "⋯")}>⋯</button>
                <button className="button-menu" onClick={() => handleButtonClick("…", "…")}>…</button>
                <button className="button-menu" onClick={() => handleButtonClick("∷", "∷")}>∷</button>
                <button className="button-menu" onClick={() => handleButtonClick("▲", "▲")}>▲</button>
                <button className="button-menu" onClick={() => handleButtonClick("▼", "▼")}>▼</button>
                <button className="button-menu" onClick={() => handleButtonClick("▶", "▶")}>▶</button>
                <button className="button-menu" onClick={() => handleButtonClick("△", "△")}>△</button>
                <button className="button-menu" onClick={() => handleButtonClick("▽", "▽")}>▽</button>
                <button className="button-menu" onClick={() => handleButtonClick("▷", "▷")}>▷</button>
                <button className="button-menu" onClick={() => handleButtonClick("⌃", "⌃")}>⌃</button>
                <button className="button-menu" onClick={() => handleButtonClick("⌄", "⌄")}>⌄</button>
                <button className="button-menu" onClick={() => handleButtonClick("︿", "︿")}>︿</button>
                <button className="button-menu" onClick={() => handleButtonClick("﹀", "﹀")}>﹀</button>
                <button className="button-menu" onClick={() => handleButtonClick("︽", "︽")}>︽</button>
                <button className="button-menu" onClick={() => handleButtonClick("︾", "︾")}>︾</button>
                <button className="button-menu" onClick={() => handleButtonClick("⌵", "⌵")}>⌵</button>
                <button className="button-menu" onClick={() => handleButtonClick("𓏬", "𓏬")}>𓏬</button>
                <button className="button-menu" onClick={() => handleButtonClick("𓃑", "𓃑")}>𓃑</button>
                <button className="button-menu" onClick={() => handleButtonClick("𓏧", "𓏧")}>𓏧</button>
                <button className="button-menu" onClick={() => handleButtonClick("⸬", "⸬")}>⸬</button>
                <button className="button-menu" onClick={() => handleButtonClick("⛶", "⛶")}>⛶</button>
            </div>
        </div>
    )
}