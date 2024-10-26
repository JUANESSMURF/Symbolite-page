import { SymMusic } from "../Symbols/SymMusicNotes"
import { SymArrows } from "../Symbols/SymArrows"
import { SymChess } from "../Symbols/SymChess"
import { SymCircles } from "../Symbols/SymCircles"
import { SymLines } from "../Symbols/SymLines"
import { SymX } from "../Symbols/SymX"
import { SymZodiac } from "../Symbols/SymZodiac"
import { SymPoker } from "../Symbols/SymPoker"
import { SymDices } from "../Symbols/SymDices"
import { SymNumber } from "../Symbols/SymNumber"
import { SymTime } from "../Symbols/SymTime"
import { SymObject } from "../Symbols/SymObject"



export const Symbols = ( showMessage ) => {
    return (
        <div className="symbols-container">
            <SymArrows showMessage={showMessage}/>
            <SymCircles />
            <SymChess />
            <SymZodiac />
            <SymMusic />
            <SymPoker/>
            <SymLines />
            <SymX />
            <SymDices/>
            <SymNumber />
            <SymTime />
            <SymObject />

            
        </div>
    )
}