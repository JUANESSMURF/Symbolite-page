import { SymMusic } from "../Symbols/SymMusicNotes"
import { SymArrows } from "../Symbols/SymArrows"
import { SymChess } from "../Symbols/SymChess"
import { SymCircles } from "../Symbols/SymCircles"
import { SymLines } from "../Symbols/SymLines"
import { SymX } from "../Symbols/SymX"



export const Symbols = () => {
    return (
        <div className="symbols-container">
            <SymArrows />
            <SymCircles />
            <SymChess />
            <SymMusic />
            <SymLines />
            <SymX />
        </div>
    )
}