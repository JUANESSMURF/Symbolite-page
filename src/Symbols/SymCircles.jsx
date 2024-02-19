
import { SymMessage } from "../Logic"



export const SymCircles = (showMessage) => {
    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container circles-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Círculos</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-circle" onClick={() => handleButtonClick("○", "○")}>○</button>
                <button className="button-circle" onClick={() => handleButtonClick("◌", "◌")}>◌</button>
                <button className="button-circle" onClick={() => handleButtonClick("◐", "◐")}>◐</button>
                <button className="button-circle" onClick={() => handleButtonClick("◑", "◑")}>◑</button>
                <button className="button-circle" onClick={() => handleButtonClick("◒", "◒")}>◒</button>
                <button className="button-circle" onClick={() => handleButtonClick("◓", "◓")}>◓</button>
                <button className="button-circle" onClick={() => handleButtonClick("◔", "◔")}>◔</button>
                <button className="button-circle" onClick={() => handleButtonClick("◕", "◕")}>◕</button>
                <button className="button-circle" onClick={() => handleButtonClick("◯", "◯")}>◯</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊖", "⊖")}>⊖</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊘", "⊘")}>⊘</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊙", "⊙")}>⊙</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊚", "⊚")}>⊚</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊛", "⊛")}>⊛</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊜", "⊜")}>⊜</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊝", "⊝")}>⊝</button>
                <button className="button-circle" onClick={() => handleButtonClick("◉", "◉")}>◉</button>
                <button className="button-circle" onClick={() => handleButtonClick("◍", "◍")}>◍</button>
                <button className="button-circle" onClick={() => handleButtonClick("◎", "◎")}>◎</button>
                <button className="button-circle" onClick={() => handleButtonClick("●", "●")}>●</button>
                <button className="button-circle" onClick={() => handleButtonClick("◖", "◖")}>◖</button>
                <button className="button-circle" onClick={() => handleButtonClick("◗", "◗")}>◗</button>
                <button className="button-circle" onClick={() => handleButtonClick("◦", "◦")}>◦</button>
                <button className="button-circle" onClick={() => handleButtonClick("◴", "◴")}>◴</button>
                <button className="button-circle" onClick={() => handleButtonClick("◵", "◵")}>◵</button>
                <button className="button-circle" onClick={() => handleButtonClick("◶", "◶")}>◶</button>
                <button className="button-circle" onClick={() => handleButtonClick("◷", "◷")}>◷</button>
                <button className="button-circle" onClick={() => handleButtonClick("❍", "❍")}>❍</button>
                <button className="button-circle" onClick={() => handleButtonClick("ₒ", "ₒ")}>ₒ</button>
                <button className="button-circle" onClick={() => handleButtonClick("॰", "॰")}>॰</button>
                <button className="button-circle" onClick={() => handleButtonClick("°", "°")}>°</button>
                <button className="button-circle" onClick={() => handleButtonClick("৹", "৹")}>৹</button>
                <button className="button-circle" onClick={() => handleButtonClick("๐", "๐")}>๐</button>
                <button className="button-circle" onClick={() => handleButtonClick("º", "º")}>º</button>
                <button className="button-circle" onClick={() => handleButtonClick("𐤏", "𐤏")}>𐤏</button>
                <button className="button-circle" onClick={() => handleButtonClick("Ｏ", "Ｏ")}>Ｏ</button>
                <button className="button-circle" onClick={() => handleButtonClick("⦿", "⦿")}>⦿</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊕", "⊕")}>⊕</button>
                <button className="button-circle" onClick={() => handleButtonClick("⊗", "⊗")}>⊗</button>
                <button className="button-circle" onClick={() => handleButtonClick("⨷", "⨷")}>⨷</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖥕", "𖥕")}>𖥕</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖥞", "𖥞")}>𖥞</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖦹", "𖦹")}>𖦹</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖥚", "𖥚")}>𖥚</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖤞", "𖤞")}>𖤞</button>
                <button className="button-circle" onClick={() => handleButtonClick("𒊹", "𒊹")}>𒊹</button>
                <button className="button-circle" onClick={() => handleButtonClick("⭕", "⭕")}>⭕</button>
                <button className="button-circle" onClick={() => handleButtonClick("🅞", "🅞")}>🅞</button>
                <button className="button-circle" onClick={() => handleButtonClick("Ⓞ", "Ⓞ")}>Ⓞ</button>
                <button className="button-circle" onClick={() => handleButtonClick("ⓞ", "Ⓞ")}>ⓞ</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖣠", "𖣠")}>𖣠</button>
                <button className="button-circle" onClick={() => handleButtonClick("𖣐", "𖣐")}>𖣐</button>
                <button className="button-circle" onClick={() => handleButtonClick("᪤", "᪤")}>᪤</button>
            </div>
        </div>
    )
}