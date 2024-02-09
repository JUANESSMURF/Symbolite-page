import { SymArrows } from "../Symbols/SymArrows"
import { SymChess } from "../Symbols/SymChess"
import { SymCircles } from "../Symbols/SymCircles"



export const Symbols = () => {
    return (
        <div className="symbols-container">
            <SymArrows />
            <SymCircles />
            <SymChess />
        </div>
    )
}