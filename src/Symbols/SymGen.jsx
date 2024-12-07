import { SymMessage } from "../Logic";



export const SymGen = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container gen-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Genero</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-gen" onClick={() => handleButtonClick("⚤", "⚤")}>⚤</button>
                <button className="button-gen" onClick={() => handleButtonClick("♂", "♂")}>♂</button>
                <button className="button-gen" onClick={() => handleButtonClick("♀", "♀")}>♀</button>
                <button className="button-gen" onClick={() => handleButtonClick("☿", "☿")}>☿</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚣", "⚣")}>⚣</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚥", "⚥")}>⚥</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚦", "⚦")}>⚦</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚧", "⚧")}>⚧</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚨", "⚨")}>⚨</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚢", "⚢")}>⚢</button>
                <button className="button-gen" onClick={() => handleButtonClick("⚲", "⚲")}>⚲</button>
            </div>
        </div>
    )
}