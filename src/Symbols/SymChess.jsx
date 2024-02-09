import { copyText } from "../Logic"



export const SymChess = () => {

    return (
        <div className="buttons-container chess-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Ajedrez</h2>
            </div>
            <div className="button-symbols-container">
                <button className="button-chess" onClick={() => copyText("♔")}>♔</button>
                <button className="button-chess" onClick={() => copyText("♕")}>♕</button>
                <button className="button-chess" onClick={() => copyText("♖")}>♖</button>
                <button className="button-chess" onClick={() => copyText("♗")}>♗</button>
                <button className="button-chess" onClick={() => copyText("♘")}>♘</button>
                <button className="button-chess" onClick={() => copyText("♙")}>♙</button>
                <button className="button-chess" onClick={() => copyText("♚")}>♚</button>
                <button className="button-chess" onClick={() => copyText("♛")}>♛</button>
                <button className="button-chess" onClick={() => copyText("♜")}>♜</button>
                <button className="button-chess" onClick={() => copyText("♝")}>♝</button>
                <button className="button-chess" onClick={() => copyText("♞")}>♞</button>
                <button className="button-chess" onClick={() => copyText("♟")}>♟</button>

            </div>
        </div>
    )
}