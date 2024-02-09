import { copyText } from "../Logic"



export const Sym = () => {

    return (
        <div className="buttons-container ???-container">
            <div className="buttons-title-container">
                <h2>Símbolos De </h2>
            </div>
            <div className="button-symbols-container">
                <button className="button-" onClick={() => copyText("")}></button>
                <button className="button-" onClick={() => copyText("")}></button>
            </div>
        </div>
    )
}