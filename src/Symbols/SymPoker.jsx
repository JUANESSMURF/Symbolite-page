import { SymMessage } from "../Logic";



export const SymPoker = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container poker-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Poker</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-poker" onClick={() => handleButtonClick("♡", "♡")}>♡</button>
                <button className="button-poker" onClick={() => handleButtonClick("♢", "♢")}>♢</button>
                <button className="button-poker" onClick={() => handleButtonClick("♤", "♤")}>♤</button>
                <button className="button-poker" onClick={() => handleButtonClick("♧", "♧")}>♧</button>
                <button className="button-poker" onClick={() => handleButtonClick("♣", "♣")}>♣</button>
                <button className="button-poker" onClick={() => handleButtonClick("♦", "♦")}>♦</button>
                <button className="button-poker" onClick={() => handleButtonClick("♥", "♥")}>♥</button>
                <button className="button-poker" onClick={() => handleButtonClick("♠", "♠")}>♠</button>

            </div>
        </div>
    )
}