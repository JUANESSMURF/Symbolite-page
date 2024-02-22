import { SymMessage } from "../Logic";



export const SymX = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container x-container">
            <div className="buttons-title-container">
                <h2>Símbolos De X</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-x" onClick={() => handleButtonClick("×", "×")}>×</button>
                <button className="button-x" onClick={() => handleButtonClick("☓", "☓")}>☓</button>
                <button className="button-x" onClick={() => handleButtonClick("✕", "✕")}>✕</button>
                <button className="button-x" onClick={() => handleButtonClick("✖", "✖")}>✖</button>
                <button className="button-x" onClick={() => handleButtonClick("❌", "❌")}>❌</button>
                <button className="button-x" onClick={() => handleButtonClick("❎", "❎")}>❎</button>
                <button className="button-x" onClick={() => handleButtonClick("⨉", "⨉")}>⨉</button>
                <button className="button-x" onClick={() => handleButtonClick("⨯", "⨯")}>⨯</button>
                <button className="button-x" onClick={() => handleButtonClick("☐", "☐")}>☐</button>
                <button className="button-x" onClick={() => handleButtonClick("☒", "☒")}>☒</button>
                <button className="button-x" onClick={() => handleButtonClick("✗", "✗")}>✗</button>
                <button className="button-x" onClick={() => handleButtonClick("✘", "✘")}>✘</button>
                <button className="button-x" onClick={() => handleButtonClick("Χ", "Χ")}>Χ</button>
                <button className="button-x" onClick={() => handleButtonClick("χ", "χ")}>χ</button>
                <button className="button-x" onClick={() => handleButtonClick("ꭓ", "ꭓ")}>ꭓ</button>
                <button className="button-x" onClick={() => handleButtonClick("ᚷ", "ᚷ")}>ᚷ</button>
                <button className="button-x" onClick={() => handleButtonClick("⊗", "⊗")}>⊗</button>
                <button className="button-x" onClick={() => handleButtonClick("⨷", "⨷")}>⨷</button>
                <button className="button-x" onClick={() => handleButtonClick("ₓ", "ₓ")}>ₓ</button>
                <button className="button-x" onClick={() => handleButtonClick("ˣ", "ˣ")}>ˣ</button>
                <button className="button-x" onClick={() => handleButtonClick("𒉽", "𒉽")}>𒉽</button>
                <button className="button-x" onClick={() => handleButtonClick("⛌", "⛌")}>⛌</button>
                <button className="button-x" onClick={() => handleButtonClick("⛒", "⛒")}>⛒</button>
                <button className="button-x" onClick={() => handleButtonClick("⛝", "⛝")}>⛝</button>
            </div>
        </div>
    )
}