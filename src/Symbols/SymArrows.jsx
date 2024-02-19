
import { SymMessage } from "../Logic";






export const SymArrows = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);
    

    return (
        <div className="buttons-container arrows-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Flecha</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-arrow" onClick={() => handleButtonClick("⬆", "⬆")}>⬆</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬅", "⬅")}>⬅</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⮕", "⮕")}>⮕</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬇", "⬇")}>⬇</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬉", "⬉")}>⬉</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬈", "⬈")}>⬈</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬋", "⬋")}>⬋</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬊", "⬊")}>⬊</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬍", "⬍")}>⬍</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬌", "⬌")}>⬌</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭠", "⭠")}>⭠</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭡", "⭡")}>⭡</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭣", "⭣")}>⭣</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭢", "⭢")}>⭢</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭤", "⭤")}>⭤</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭥", "⭥")}>⭥</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⮃", "⮃")}>⮃</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⮂", "⮂")}>⮂</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⮐", "⮐")}>⮐</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⮑", "⮑")}>⮑</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬎", "⬎")}>⬎</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬏", "⬏")}>⬏</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬐", "⬐")}>⬐</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬑", "⬑")}>⬑</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬿", "⬿")}>⬿</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬳", "⬳")}>⬳</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬱", "⬱")}>⬱</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭆", "⭆")}>⭆</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⭅", "⭅")}>⭅</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↞", "↞")}>↞</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↟", "↟")}>↟</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↠", "↠")}>↠</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↡", "↡")}>↡</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↩", "↩")}>↩</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↖", "↖")}>↖</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↘", "↘")}>↘</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↗", "↗")}>↗</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↙", "↙")}>↙</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↕", "↕")}>↕</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↛", "↛")}>↛</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↚", "↚")}>↚</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↝", "↝")}>↝</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↜", "↜")}>↜</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↪", "↪")}>↪</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↣", "↣")}>↣</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↢", "↢")}>↢</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↥", "↥")}>↥</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↤", "↤")}>↤</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↦", "↦")}>↦</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↧", "↧")}>↧</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↨", "↨")}>↨</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↪", "↪")}>↪</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↩", "↩")}>↩</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↱", "↱")}>↱</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↰", "↰")}>↰</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↲", "↲")}>↲</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↬", "↬")}>↬</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↫", "↫")}>↫</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↮", "↮")}>↮</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↯", "↯")}>↯</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↭", "↭")}>↭</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↳", "↳")}>↳</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↴", "↴")}>↴</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↹", "↹")}>↹</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↸", "↸")}>↸</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↷", "↷")}>↷</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↶", "↶")}>↶</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↻", "↻")}>↻</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↺", "↺")}>↺</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⟳", "⟳")}>⟳</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⟲", "⟲")}>⟲</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↽", "↽")}>↽</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↼", "↼")}>↼</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↿", "↿")}>↿</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↾", "↾")}>↾</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇁", "⇁")}>⇁</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇀", "⇀")}>⇀</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇃", "⇃")}>⇃</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇂", "⇂")}>⇂</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇄", "⇄")}>⇄</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇅", "⇅")}>⇅</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇆", "⇆")}>⇆</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇉", "⇉")}>⇉</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇇", "⇇")}>⇇</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇊", "⇊")}>⇊</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇈", "⇈")}>⇈</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇌", "⇌")}>⇌</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇋", "⇋")}>⇋</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇐", "⇐")}>⇐</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇑", "⇑")}>⇑</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇒", "⇒")}>⇒</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇓", "⇓")}>⇓</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇔", "⇔")}>⇔</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬁", "⬁")}>⬁</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬀", "⬀")}>⬀</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬄", "⬄")}>⬄</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬃", "⬃")}>⬃</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⬂", "⬂")}>⬂</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇏", "⇏")}>⇏</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇍", "⇍")}>⇍</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇎", "⇎")}>⇎</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇕", "⇕")}>⇕</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇙", "⇙")}>⇙</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇖", "⇖")}>⇖</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇗", "⇗")}>⇗</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇘", "⇘")}>⇘</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇛", "⇛")}>⇛</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇚", "⇚")}>⇚</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇝", "⇝")}>⇝</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇜", "⇜")}>⇜</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇟", "⇟")}>⇟</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇞", "⇞")}>⇞</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇠", "⇠")}>⇠</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇣", "⇣")}>⇣</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇡", "⇡")}>⇡</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇢", "⇢")}>⇢</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇥", "⇥")}>⇥</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇤", "⇤")}>⇤</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇿", "⇿")}>⇿</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇽", "⇽")}>⇽</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇾", "⇾")}>⇾</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇨", "⇨")}>⇨</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇦", "⇦")}>⇦</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇧", "⇧")}>⇧</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇪", "⇪")}>⇪</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇩", "⇩")}>⇩</button>
                <button className="button-arrow" onClick={() => handleButtonClick("▶", "▶")}>▶</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⌅", "⌅")}>⌅</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⌆", "⌆")}>⌆</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⌤", "⌤")}>⌤</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⏎", "⏎")}>⏎</button>
                <button className="button-arrow" onClick={() => handleButtonClick("☇", "☇")}>☇</button>
                <button className="button-arrow" onClick={() => handleButtonClick("☈", "☈")}>☈</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➔", "➔")}>➔</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➘", "➘")}>➘</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➙", "➙")}>➙</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➚", "➚")}>➚</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➛", "➛")}>➛</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➜", "➜")}>➜</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➝", "➝")}>➝</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➞", "➞")}>➞</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➟", "➟")}>➟</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➠", "➠")}>➠</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➡", "➡")}>➡</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➢", "➢")}>➢</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➣", "➣")}>➣</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➤", "➤")}>➤</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➥", "➥")}>➥</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➦", "➦")}>➦</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➧", "➧")}>➧</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➨", "➨")}>➨</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➪", "➪")}>➪</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➩", "➩")}>➩</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➬", "➬")}>➬</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➫", "➫")}>➫</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➮", "➮")}>➮</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➭", "➭")}>➭</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➱", "➱")}>➱</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➯", "➯")}>➯</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➲", "➲")}>➲</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➴", "➴")}>➴</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➳", "➳")}>➳</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➵", "➵")}>➵</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➷", "➷")}>➷</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➶", "➶")}>➶</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➹", "➹")}>➹</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➸", "➸")}>➸</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➻", "➻")}>➻</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➺", "➺")}>➺</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➽", "➽")}>➽</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➼", "➼")}>➼</button>
                <button className="button-arrow" onClick={() => handleButtonClick("➾", "➾")}>➾</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⤴", "⤴")}>⤴</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⤵", "⤵")}>⤵</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↵", "↵")}>↵</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↓", "↓")}>↓</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↔", "↔")}>↔</button>
                <button className="button-arrow" onClick={() => handleButtonClick("←", "←")}>←</button>
                <button className="button-arrow" onClick={() => handleButtonClick("→", "→")}>→</button>
                <button className="button-arrow" onClick={() => handleButtonClick("↑", "↑")}>↑</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⍇", "⍇")}>⍇</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⍈", "⍈")}>⍈</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⍐", "⍐")}>⍐</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⍗", "⍗")}>⍗</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇫", "⇫")}>⇫</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇬", "⇬")}>⇬</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇭", "⇭")}>⇭</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇮", "⇮")}>⇮</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇯", "⇯")}>⇯</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇰", "⇰")}>⇰</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇱", "⇱")}>⇱</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇲", "⇲")}>⇲</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇳", "⇳")}>⇳</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇴", "⇴")}>⇴</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇵", "⇵")}>⇵</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇶", "⇶")}>⇶</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇷", "⇷")}>⇷</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇸", "⇸")}>⇸</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇹", "⇹")}>⇹</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇺", "⇺")}>⇺</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇻", "⇻")}>⇻</button>
                <button className="button-arrow" onClick={() => handleButtonClick("⇼", "⇼")}>⇼</button>
                <button className="button-arrow" onClick={() => handleButtonClick("𖤂", "𖤂")}>𖤂</button>
                <button className="button-arrow" onClick={() => handleButtonClick("𖣫", "𖣫")}>𖣫</button>             
            </div>
        </div>
    )
}


