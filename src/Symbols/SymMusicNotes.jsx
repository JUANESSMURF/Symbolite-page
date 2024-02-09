import { copyText } from "../Logic"



export const SymMusic = () => {

    return (
        <div className="buttons-container music-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Notas Musicales</h2>
            </div>
            <div className="button-symbols-container">
                <button className="button-music" onClick={() => copyText("♩")}>♩</button>
                <button className="button-music" onClick={() => copyText("♪")}>♪</button>
                <button className="button-music" onClick={() => copyText("♫")}>♫</button>
                <button className="button-music" onClick={() => copyText("♬")}>♬</button>
                <button className="button-music" onClick={() => copyText("♭")}>♭</button>
                <button className="button-music" onClick={() => copyText("♮")}>♮</button>
                <button className="button-music" onClick={() => copyText("♯")}>♯</button>
                <button className="button-music" onClick={() => copyText("𝄞")}>𝄞</button>
                <button className="button-music" onClick={() => copyText("𝄡")}>𝄡</button>
                <button className="button-music" onClick={() => copyText("𝄢")}>𝄢</button>
                <button className="button-music" onClick={() => copyText("𝄫")}>𝄫</button>
                <button className="button-music" onClick={() => copyText("🎵")}>🎵</button>
                <button className="button-music" onClick={() => copyText("🎶")}>🎶</button>
                <button className="button-music" onClick={() => copyText("🎼")}>🎼</button>
                <button className="button-music" onClick={() => copyText("𓏢")}>𓏢</button>      
            </div>
        </div>
    )
}