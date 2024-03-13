import { SymMessage } from "../Logic";



export const SymDices = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container dices-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Dados</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-dices" onClick={() => handleButtonClick("", "")}></button>
            </div>
        </div>
    )
}