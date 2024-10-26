import { SymMessage } from "../Logic";



export const SymObject = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container object-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Objetos</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-object" onClick={() => handleButtonClick("⚑", "⚑")}>⚑</button>
                <button className="button-object" onClick={() => handleButtonClick("𖣘", "𖣘")}>𖣘</button>
                <button className="button-object" onClick={() => handleButtonClick("𖧶", "𖧶")}>𖧶</button>
                <button className="button-object" onClick={() => handleButtonClick("⚐", "⚐")}>⚐</button>
                <button className="button-object" onClick={() => handleButtonClick("𖤘", "𖤘")}>𖤘</button>
                <button className="button-object" onClick={() => handleButtonClick("𖥩", "𖥩")}>𖥩</button>
                <button className="button-object" onClick={() => handleButtonClick("𓍝", "𓍝")}>𓍝</button>
                <button className="button-object" onClick={() => handleButtonClick("𓊔", "𓊔")}>𓊔</button>
                <button className="button-object" onClick={() => handleButtonClick("𖥈", "𖥈")}>𖥈</button>
                <button className="button-object" onClick={() => handleButtonClick("✒", "✒")}>✒</button>
                <button className="button-object" onClick={() => handleButtonClick("𓄲", "𓄲")}>𓄲</button>
                <button className="button-object" onClick={() => handleButtonClick("𖤠", "𖤠")}>𖤠</button>
                <button className="button-object" onClick={() => handleButtonClick("✑", "✑")}>✑</button>
                <button className="button-object" onClick={() => handleButtonClick("ꗃ", "ꗃ")}>ꗃ</button>
                <button className="button-object" onClick={() => handleButtonClick("𖣳", "𖣳")}>𖣳</button>
                <button className="button-object" onClick={() => handleButtonClick("✐", "✐")}>✐</button>
                <button className="button-object" onClick={() => handleButtonClick("𖠿", "𖠿")}>𖠿</button>
                <button className="button-object" onClick={() => handleButtonClick("𖡌", "𖡌")}>𖡌</button>
                <button className="button-object" onClick={() => handleButtonClick("✏", "✏")}>✏</button>
                <button className="button-object" onClick={() => handleButtonClick("✎", "✎")}>✎</button>
                <button className="button-object" onClick={() => handleButtonClick("✉", "✉")}>✉</button>
                <button className="button-object" onClick={() => handleButtonClick("✈", "✈")}>✈</button>
                <button className="button-object" onClick={() => handleButtonClick("✇", "✇")}>✇</button>
                <button className="button-object" onClick={() => handleButtonClick("✆", "✆")}>✆</button>
                <button className="button-object" onClick={() => handleButtonClick("✄", "✄")}>✄</button>
                <button className="button-object" onClick={() => handleButtonClick("✃", "✃")}>✃</button>
                <button className="button-object" onClick={() => handleButtonClick("✂", "✂")}>✂</button>
                <button className="button-object" onClick={() => handleButtonClick("✁", "✁")}>✁</button>
                <button className="button-object" onClick={() => handleButtonClick("☏", "☏")}>☏</button>
                <button className="button-object" onClick={() => handleButtonClick("⛃", "⛃")}>⛃</button>
                <button className="button-object" onClick={() => handleButtonClick("⛂", "⛂")}>⛂</button>
                <button className="button-object" onClick={() => handleButtonClick("⛁", "⛁")}>⛁</button>
                <button className="button-object" onClick={() => handleButtonClick("⛀", "⛀")}>⛀</button>
                <button className="button-object" onClick={() => handleButtonClick("ꚰ", "ꚰ")}>ꚰ</button>
            </div>
        </div>
    )
}