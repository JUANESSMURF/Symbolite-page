import { copyText } from "../Logic"



export const SymCircles = () => {

    return (
        <div>
            <h2>Símbolos De Círculos</h2>
            <div>
                <button onClick={() => copyText("")}></button>
                <button onClick={() => copyText("")}></button>
            </div>
        </div>
    )
}