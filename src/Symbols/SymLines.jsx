import { SymMessage } from "../Logic";



export const SymLines = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container lines-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Lineas</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-line" onClick={() => handleButtonClick("╱", "╱")}>╱</button>
                <button className="button-line" onClick={() => handleButtonClick("╲", "╲")}>╲</button>
                <button className="button-line" onClick={() => handleButtonClick("╳", "╳")}>╳</button>
                <button className="button-line" onClick={() => handleButtonClick("╭", "╭")}>╭</button>
                <button className="button-line" onClick={() => handleButtonClick("╮", "╮")}>╮</button>
                <button className="button-line" onClick={() => handleButtonClick("╯", "╯")}>╯</button>
                <button className="button-line" onClick={() => handleButtonClick("╰", "╰")}>╰</button>
                <button className="button-line" onClick={() => handleButtonClick("◜", "◜")}>◜</button>
                <button className="button-line" onClick={() => handleButtonClick("◝", "◝")}>◝</button>
                <button className="button-line" onClick={() => handleButtonClick("◞", "◞")}>◞</button>
                <button className="button-line" onClick={() => handleButtonClick("◟", "◟")}>◟</button>
                <button className="button-line" onClick={() => handleButtonClick("◠", "◠")}>◠</button>
                <button className="button-line" onClick={() => handleButtonClick("◡", "◡")}>◡</button>
                <button className="button-line" onClick={() => handleButtonClick("⌈", "⌈")}>⌈</button>
                <button className="button-line" onClick={() => handleButtonClick("⌊", "⌊")}>⌊</button>
                <button className="button-line" onClick={() => handleButtonClick("⌉", "⌉")}>⌉</button>
                <button className="button-line" onClick={() => handleButtonClick("⌋", "⌋")}>⌋</button>
                <button className="button-line" onClick={() => handleButtonClick("⎡", "⎡")}>⎡</button>
                <button className="button-line" onClick={() => handleButtonClick("⎣", "⎣")}>⎣</button>
                <button className="button-line" onClick={() => handleButtonClick("⎤", "⎤")}>⎤</button>
                <button className="button-line" onClick={() => handleButtonClick("⎦", "⎦")}>⎦</button>
                <button className="button-line" onClick={() => handleButtonClick("⎧", "⎧")}>⎧</button>
                <button className="button-line" onClick={() => handleButtonClick("⎩", "⎩")}>⎩</button>
                <button className="button-line" onClick={() => handleButtonClick("⎫", "⎫")}>⎫</button>
                <button className="button-line" onClick={() => handleButtonClick("⎭", "⎭")}>⎭</button>
                <button className="button-line" onClick={() => handleButtonClick("⎸", "⎸")}>⎸</button>
                <button className="button-line" onClick={() => handleButtonClick("⎹", "⎹")}>⎹</button>
                <button className="button-line" onClick={() => handleButtonClick("⎾", "⎾")}>⎾</button>
                <button className="button-line" onClick={() => handleButtonClick("⎿", "⎿")}>⎿</button>
                <button className="button-line" onClick={() => handleButtonClick("⏉", "⏉")}>⏉</button>
                <button className="button-line" onClick={() => handleButtonClick("⏊", "⏊")}>⏊</button>
                <button className="button-line" onClick={() => handleButtonClick("⏋", "⏋")}>⏋</button>
                <button className="button-line" onClick={() => handleButtonClick("⏌", "⏌")}>⏌</button>
                <button className="button-line" onClick={() => handleButtonClick("≡", "≡")}>≡</button>
                <button className="button-line" onClick={() => handleButtonClick("≣", "≣")}>≣</button>
                <button className="button-line" onClick={() => handleButtonClick("☰", "☰")}>☰</button>
                <button className="button-line" onClick={() => handleButtonClick("☱", "☱")}>☱</button>
                <button className="button-line" onClick={() => handleButtonClick("☲", "☲")}>☲</button>
                <button className="button-line" onClick={() => handleButtonClick("☳", "☳")}>☳</button>
                <button className="button-line" onClick={() => handleButtonClick("☴", "☴")}>☴</button>
                <button className="button-line" onClick={() => handleButtonClick("☵", "☵")}>☵</button>
                <button className="button-line" onClick={() => handleButtonClick("☶", "☶")}>☶</button>
                <button className="button-line" onClick={() => handleButtonClick("☷", "☷")}>☷</button>
                <button className="button-line" onClick={() => handleButtonClick("═", "═")}>═</button>
                <button className="button-line" onClick={() => handleButtonClick("║", "║")}>║</button>
                <button className="button-line" onClick={() => handleButtonClick("╒", "╒")}>╒</button>
                <button className="button-line" onClick={() => handleButtonClick("╓", "╓")}>╓</button>
                <button className="button-line" onClick={() => handleButtonClick("╔", "╔")}>╔</button>               
                <button className="button-line" onClick={() => handleButtonClick("╕", "╕")}>╕</button>              
                <button className="button-line" onClick={() => handleButtonClick("╖", "╖")}>╖</button>
                <button className="button-line" onClick={() => handleButtonClick("╗", "╗")}>╗</button>
                <button className="button-line" onClick={() => handleButtonClick("╘", "╘")}>╘</button>
                <button className="button-line" onClick={() => handleButtonClick("╙", "╙")}>╙</button>
                <button className="button-line" onClick={() => handleButtonClick("╚", "╚")}>╚</button>
                <button className="button-line" onClick={() => handleButtonClick("╛", "╛")}>╛</button>
                <button className="button-line" onClick={() => handleButtonClick("╜", "╜")}>╜</button>
                <button className="button-line" onClick={() => handleButtonClick("╝", "╝")}>╝</button>
                <button className="button-line" onClick={() => handleButtonClick("╞", "╞")}>╞</button>
                <button className="button-line" onClick={() => handleButtonClick("╟", "╟")}>╟</button>
                <button className="button-line" onClick={() => handleButtonClick("╠", "╠")}>╠</button>
                <button className="button-line" onClick={() => handleButtonClick("╡", "╡")}>╡</button>
                <button className="button-line" onClick={() => handleButtonClick("╢", "╢")}>╢</button>
                <button className="button-line" onClick={() => handleButtonClick("╣", "╣")}>╣</button>
                <button className="button-line" onClick={() => handleButtonClick("╤", "╤")}>╤</button>
                <button className="button-line" onClick={() => handleButtonClick("╥", "╥")}>╥</button>
                <button className="button-line" onClick={() => handleButtonClick("╦", "╦")}>╦</button>
                <button className="button-line" onClick={() => handleButtonClick("╧", "╧")}>╧</button>
                <button className="button-line" onClick={() => handleButtonClick("╨", "╨")}>╨</button>
                <button className="button-line" onClick={() => handleButtonClick("╩", "╩")}>╩</button>
                <button className="button-line" onClick={() => handleButtonClick("╪", "╪")}>╪</button>
                <button className="button-line" onClick={() => handleButtonClick("╫", "╫")}>╫</button>
                <button className="button-line" onClick={() => handleButtonClick("╬", "╬")}>╬</button>
                <button className="button-line" onClick={() => handleButtonClick("ˍ", "ˍ")}>ˍ</button>
                <button className="button-line" onClick={() => handleButtonClick("‐", "‐")}>‐</button>
                <button className="button-line" onClick={() => handleButtonClick("⎯", "⎯")}>⎯</button>
                <button className="button-line" onClick={() => handleButtonClick("‒", "‒")}>‒</button>
                <button className="button-line" onClick={() => handleButtonClick("―", "―")}>―</button>
                <button className="button-line" onClick={() => handleButtonClick("⎺", "⎺")}>⎺</button>
                <button className="button-line" onClick={() => handleButtonClick("⎻", "⎻")}>⎻</button>
                <button className="button-line" onClick={() => handleButtonClick("⎼", "⎼")}>⎼</button>
                <button className="button-line" onClick={() => handleButtonClick("⎽", "⎽")}>⎽</button>
                <button className="button-line" onClick={() => handleButtonClick("‗", "‗")}>‗</button>
                <button className="button-line" onClick={() => handleButtonClick("‖", "‖")}>‖</button>
                <button className="button-line" onClick={() => handleButtonClick("─", "─")}>─</button>
                <button className="button-line" onClick={() => handleButtonClick("━", "━")}>━</button>
                <button className="button-line" onClick={() => handleButtonClick("│", "│")}>│</button>
                <button className="button-line" onClick={() => handleButtonClick("┃", "┃")}>┃</button>
                <button className="button-line" onClick={() => handleButtonClick("┄", "┄")}>┄</button>
                <button className="button-line" onClick={() => handleButtonClick("┅", "┅")}>┅</button>
                <button className="button-line" onClick={() => handleButtonClick("┆", "┆")}>┆</button>
                <button className="button-line" onClick={() => handleButtonClick("┇", "┇")}>┇</button>
                <button className="button-line" onClick={() => handleButtonClick("┈", "┈")}>┈</button>
                <button className="button-line" onClick={() => handleButtonClick("┉", "┉")}>┉</button>
                <button className="button-line" onClick={() => handleButtonClick("┊", "┊")}>┊</button>
                <button className="button-line" onClick={() => handleButtonClick("┋", "┋")}>┋</button>
                <button className="button-line" onClick={() => handleButtonClick("╌", "╌")}>╌</button>
                <button className="button-line" onClick={() => handleButtonClick("╍", "╍")}>╍</button>
                <button className="button-line" onClick={() => handleButtonClick("╎", "╎")}>╎</button>
                <button className="button-line" onClick={() => handleButtonClick("╴", "╴")}>╴</button>
                <button className="button-line" onClick={() => handleButtonClick("╵", "╵")}>╵</button>
                <button className="button-line" onClick={() => handleButtonClick("╶", "╶")}>╶</button>
                <button className="button-line" onClick={() => handleButtonClick("╷", "╷")}>╷</button>
                <button className="button-line" onClick={() => handleButtonClick("╸", "╸")}>╸</button>
                <button className="button-line" onClick={() => handleButtonClick("╹", "╹")}>╹</button>
                <button className="button-line" onClick={() => handleButtonClick("╺", "╺")}>╺</button>
                <button className="button-line" onClick={() => handleButtonClick("╻", "╻")}>╻</button>
                <button className="button-line" onClick={() => handleButtonClick("╼", "╼")}>╼</button>
                <button className="button-line" onClick={() => handleButtonClick("╽", "╽")}>╽</button>
                <button className="button-line" onClick={() => handleButtonClick("╾", "╾")}>╾</button>
                <button className="button-line" onClick={() => handleButtonClick("╿", "╿")}>╿</button>
                <button className="button-line" onClick={() => handleButtonClick("▏", "▏")}>▏</button>
                <button className="button-line" onClick={() => handleButtonClick("▕", "▕")}>▕</button>
                <button className="button-line" onClick={() => handleButtonClick("╏", "╏")}>╏</button>
                <button className="button-line" onClick={() => handleButtonClick("–", "–")}>–</button>
                <button className="button-line" onClick={() => handleButtonClick("—", "—")}>—</button>
                <button className="button-line" onClick={() => handleButtonClick("⌌", "⌌")}>⌌</button>
                <button className="button-line" onClick={() => handleButtonClick("⌍", "⌍")}>⌍</button>
                <button className="button-line" onClick={() => handleButtonClick("⌎", "⌎")}>⌎</button>
                <button className="button-line" onClick={() => handleButtonClick("⌏", "⌏")}>⌏</button>
                <button className="button-line" onClick={() => handleButtonClick("⌜", "⌜")}>⌜</button>
                <button className="button-line" onClick={() => handleButtonClick("⌝", "⌝")}>⌝</button>
                <button className="button-line" onClick={() => handleButtonClick("⌞", "⌞")}>⌞</button>
                <button className="button-line" onClick={() => handleButtonClick("⌟", "⌟")}>⌟</button>
                <button className="button-line" onClick={() => handleButtonClick("┌", "┌")}>┌</button>
                <button className="button-line" onClick={() => handleButtonClick("┍", "┍")}>┍</button>
                <button className="button-line" onClick={() => handleButtonClick("┎", "┎")}>┎</button>
                <button className="button-line" onClick={() => handleButtonClick("┏", "┏")}>┏</button>
                <button className="button-line" onClick={() => handleButtonClick("┐", "┐")}>┐</button>
                <button className="button-line" onClick={() => handleButtonClick("┑", "┑")}>┑</button>
                <button className="button-line" onClick={() => handleButtonClick("┒", "┒")}>┒</button>
                <button className="button-line" onClick={() => handleButtonClick("┓", "┓")}>┓</button>
                <button className="button-line" onClick={() => handleButtonClick("└", "└")}>└</button>
                <button className="button-line" onClick={() => handleButtonClick("┕", "┕")}>┕</button>
                <button className="button-line" onClick={() => handleButtonClick("┖", "┖")}>┖</button>
                <button className="button-line" onClick={() => handleButtonClick("┗", "┗")}>┗</button>
                <button className="button-line" onClick={() => handleButtonClick("┘", "┘")}>┘</button>
                <button className="button-line" onClick={() => handleButtonClick("┙", "┙")}>┙</button>
                <button className="button-line" onClick={() => handleButtonClick("┚", "┚")}>┚</button>
                <button className="button-line" onClick={() => handleButtonClick("┛", "┛")}>┛</button>
                <button className="button-line" onClick={() => handleButtonClick("├", "├")}>├</button>
                <button className="button-line" onClick={() => handleButtonClick("┝", "┝")}>┝</button>
                <button className="button-line" onClick={() => handleButtonClick("┞", "┞")}>┞</button>
                <button className="button-line" onClick={() => handleButtonClick("┟", "┟")}>┟</button>
                <button className="button-line" onClick={() => handleButtonClick("┠", "┠")}>┠</button>
                <button className="button-line" onClick={() => handleButtonClick("┡", "┡")}>┡</button>
                <button className="button-line" onClick={() => handleButtonClick("┢", "┢")}>┢</button>
                <button className="button-line" onClick={() => handleButtonClick("┣", "┣")}>┣</button>
                <button className="button-line" onClick={() => handleButtonClick("┤", "┤")}>┤</button>
                <button className="button-line" onClick={() => handleButtonClick("┥", "┥")}>┥</button>
                <button className="button-line" onClick={() => handleButtonClick("┦", "┦")}>┦</button>
                <button className="button-line" onClick={() => handleButtonClick("┧", "┧")}>┧</button>
                <button className="button-line" onClick={() => handleButtonClick("┨", "┨")}>┨</button>
                <button className="button-line" onClick={() => handleButtonClick("┩", "┩")}>┩</button>
                <button className="button-line" onClick={() => handleButtonClick("┪", "┪")}>┪</button>
                <button className="button-line" onClick={() => handleButtonClick("┫", "┫")}>┫</button>
                <button className="button-line" onClick={() => handleButtonClick("┬", "┬")}>┬</button>
                <button className="button-line" onClick={() => handleButtonClick("┭", "┭")}>┭</button>
                <button className="button-line" onClick={() => handleButtonClick("┮", "┮")}>┮</button>
                <button className="button-line" onClick={() => handleButtonClick("┯", "┯")}>┯</button>
                <button className="button-line" onClick={() => handleButtonClick("┰", "┰")}>┰</button>
                <button className="button-line" onClick={() => handleButtonClick("┱", "┱")}>┱</button>
                <button className="button-line" onClick={() => handleButtonClick("┲", "┲")}>┲</button>
                <button className="button-line" onClick={() => handleButtonClick("┳", "┳")}>┳</button>
                <button className="button-line" onClick={() => handleButtonClick("┴", "┴")}>┴</button>
                <button className="button-line" onClick={() => handleButtonClick("┵", "┵")}>┵</button>
                <button className="button-line" onClick={() => handleButtonClick("┶", "┶")}>┶</button>
                <button className="button-line" onClick={() => handleButtonClick("┷", "┷")}>┷</button>
                <button className="button-line" onClick={() => handleButtonClick("┸", "┸")}>┸</button>
                <button className="button-line" onClick={() => handleButtonClick("┹", "┹")}>┹</button>
                <button className="button-line" onClick={() => handleButtonClick("┺", "┺")}>┺</button>
                <button className="button-line" onClick={() => handleButtonClick("┻", "┻")}>┻</button>
                <button className="button-line" onClick={() => handleButtonClick("┼", "┼")}>┼</button>
                <button className="button-line" onClick={() => handleButtonClick("┽", "┽")}>┽</button>
                <button className="button-line" onClick={() => handleButtonClick("┾", "┾")}>┾</button>
                <button className="button-line" onClick={() => handleButtonClick("┿", "┿")}>┿</button>
                <button className="button-line" onClick={() => handleButtonClick("╀", "╀")}>╀</button>
                <button className="button-line" onClick={() => handleButtonClick("╁", "╁")}>╁</button>
                <button className="button-line" onClick={() => handleButtonClick("╂", "╂")}>╂</button>
                <button className="button-line" onClick={() => handleButtonClick("╃", "╃")}>╃</button>
                <button className="button-line" onClick={() => handleButtonClick("╄", "╄")}>╄</button>
                <button className="button-line" onClick={() => handleButtonClick("╅", "╅")}>╅</button>
                <button className="button-line" onClick={() => handleButtonClick("╆", "╆")}>╆</button>
                <button className="button-line" onClick={() => handleButtonClick("╇", "╇")}>╇</button>
                <button className="button-line" onClick={() => handleButtonClick("╈", "╈")}>╈</button>
                <button className="button-line" onClick={() => handleButtonClick("╉", "╉")}>╉</button>
                <button className="button-line" onClick={() => handleButtonClick("╊", "╊")}>╊</button>
                <button className="button-line" onClick={() => handleButtonClick("╋", "╋")}>╋</button>
            </div>
        </div>
    )
}