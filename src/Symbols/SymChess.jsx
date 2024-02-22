import { SymMessage } from "../Logic";



export const SymChess = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container chess-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Ajedrez</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-chess" onClick={() => handleButtonClick("♔", "♔")}>♔</button>
                <button className="button-chess" onClick={() => handleButtonClick("♚", "♚")}>♚</button>
                <button className="button-chess" onClick={() => handleButtonClick("♕", "♕")}>♕</button>
                <button className="button-chess" onClick={() => handleButtonClick("♛", "♛")}>♛</button>
                <button className="button-chess" onClick={() => handleButtonClick("♖", "♖")}>♖</button>
                <button className="button-chess" onClick={() => handleButtonClick("♜", "♜")}>♜</button>
                <button className="button-chess" onClick={() => handleButtonClick("♘", "♘")}>♘</button>
                <button className="button-chess" onClick={() => handleButtonClick("♞", "♞")}>♞</button>
                <button className="button-chess" onClick={() => handleButtonClick("♗", "♗")}>♗</button>
                <button className="button-chess" onClick={() => handleButtonClick("♝", "♝")}>♝</button>
                <button className="button-chess" onClick={() => handleButtonClick("♙", "♙")}>♙</button>
                <button className="button-chess" onClick={() => handleButtonClick("♟", "♟")}>♟</button>

            </div>
        </div>
    )
}