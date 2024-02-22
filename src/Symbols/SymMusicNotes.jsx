import { SymMessage } from "../Logic";



export const SymMusic = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container music-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Notas Musicales</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-music" onClick={() => handleButtonClick("♩", "♩")}>♩</button>
                <button className="button-music" onClick={() => handleButtonClick("♪", "♪")}>♪</button>
                <button className="button-music" onClick={() => handleButtonClick("♫", "♫")}>♫</button>
                <button className="button-music" onClick={() => handleButtonClick("♬", "♬")}>♬</button>
                <button className="button-music" onClick={() => handleButtonClick("♭", "♭")}>♭</button>
                <button className="button-music" onClick={() => handleButtonClick("♮", "♮")}>♮</button>
                <button className="button-music" onClick={() => handleButtonClick("♯", "♯")}>♯</button>
                <button className="button-music" onClick={() => handleButtonClick("𝄞", "𝄞")}>𝄞</button>
                <button className="button-music" onClick={() => handleButtonClick("𝄡", "𝄡")}>𝄡</button>
                <button className="button-music" onClick={() => handleButtonClick("𝄢", "𝄢")}>𝄢</button>
                <button className="button-music" onClick={() => handleButtonClick("𝄫", "𝄫")}>𝄫</button>
                <button className="button-music" onClick={() => handleButtonClick("🎵", "🎵")}>🎵</button>
                <button className="button-music" onClick={() => handleButtonClick("🎶", "🎶")}>🎶</button>
                <button className="button-music" onClick={() => handleButtonClick("🎼", "🎼")}>🎼</button>
                <button className="button-music" onClick={() => handleButtonClick("𓏢", "𓏢")}>𓏢</button>      
            </div>
        </div>
    )
}