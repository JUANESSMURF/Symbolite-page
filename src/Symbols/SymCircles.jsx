import { copyText } from "../Logic"



export const SymCircles = () => {

    return (
        <div id="circle-container-id">
            <h2>Símbolos De Círculos</h2>
            <div className="button-circle-container">
                <button className="button-circle" onClick={() => copyText("○")}>○</button>
                <button className="button-circle" onClick={() => copyText("◌")}>◌</button>
            </div>
        </div>
    )
}