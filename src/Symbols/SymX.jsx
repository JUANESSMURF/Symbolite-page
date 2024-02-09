import { copyText } from "../Logic"



export const SymX = () => {

    return (
        <div className="buttons-container x-container">
            <div className="buttons-title-container">
                <h2>Símbolos De X</h2>
            </div>
            <div className="button-symbols-container">
                <button className="button-x" onClick={() => copyText("×")}>×</button>
                <button className="button-x" onClick={() => copyText("☓")}>☓</button>
                <button className="button-x" onClick={() => copyText("✕")}>✕</button>
                <button className="button-x" onClick={() => copyText("✖")}>✖</button>
                <button className="button-x" onClick={() => copyText("❌")}>❌</button>
                <button className="button-x" onClick={() => copyText("❎")}>❎</button>
                <button className="button-x" onClick={() => copyText("⨉")}>⨉</button>
                <button className="button-x" onClick={() => copyText("⨯")}>⨯</button>
                <button className="button-x" onClick={() => copyText("☐")}>☐</button>
                <button className="button-x" onClick={() => copyText("☒")}>☒</button>
                <button className="button-x" onClick={() => copyText("✗")}>✗</button>
                <button className="button-x" onClick={() => copyText("✘")}>✘</button>
                <button className="button-x" onClick={() => copyText("Χ")}>Χ</button>
                <button className="button-x" onClick={() => copyText("χ")}>χ</button>
                <button className="button-x" onClick={() => copyText("ꭓ")}>ꭓ</button>
                <button className="button-x" onClick={() => copyText("ᚷ")}>ᚷ</button>
                <button className="button-x" onClick={() => copyText("⊗")}>⊗</button>
                <button className="button-x" onClick={() => copyText("⨷")}>⨷</button>
                <button className="button-x" onClick={() => copyText("ₓ")}>ₓ</button>
                <button className="button-x" onClick={() => copyText("ˣ")}>ˣ</button>
                <button className="button-x" onClick={() => copyText("𒉽")}>𒉽</button>
                <button className="button-x" onClick={() => copyText("⛌")}>⛌</button>
                <button className="button-x" onClick={() => copyText("⛒")}>⛒</button>
                <button className="button-x" onClick={() => copyText("⛝")}>⛝</button>
            </div>
        </div>
    )
}