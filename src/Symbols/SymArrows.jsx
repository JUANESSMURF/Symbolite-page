import { copyText } from "../Logic";
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
                <button className="button-arrow" onClick={() => copyText("⬅")}>⬅</button>
                <button className="button-arrow" onClick={() => copyText("⮕")}>⮕</button>
                <button className="button-arrow" onClick={() => copyText("⬇")}>⬇</button>
                <button className="button-arrow" onClick={() => copyText("⬉")}>⬉</button>
                <button className="button-arrow" onClick={() => copyText("⬈")}>⬈</button>
                <button className="button-arrow" onClick={() => copyText("⬋")}>⬋</button>
                <button className="button-arrow" onClick={() => copyText("⬊")}>⬊</button>
                <button className="button-arrow" onClick={() => copyText("⬍")}>⬍</button>
                <button className="button-arrow" onClick={() => copyText("⬌")}>⬌</button>
                <button className="button-arrow" onClick={() => copyText("⭠")}>⭠</button>
                <button className="button-arrow" onClick={() => copyText("⭡")}>⭡</button>
                <button className="button-arrow" onClick={() => copyText("⭣")}>⭣</button>
                <button className="button-arrow" onClick={() => copyText("⭢")}>⭢</button>
                <button className="button-arrow" onClick={() => copyText("⭤")}>⭤</button>
                <button className="button-arrow" onClick={() => copyText("⭥")}>⭥</button>
                <button className="button-arrow" onClick={() => copyText("⮃")}>⮃</button>
                <button className="button-arrow" onClick={() => copyText("⮂")}>⮂</button>
                <button className="button-arrow" onClick={() => copyText("⮐")}>⮐</button>
                <button className="button-arrow" onClick={() => copyText("⮑")}>⮑</button>
                <button className="button-arrow" onClick={() => copyText("⬎")}>⬎</button>
                <button className="button-arrow" onClick={() => copyText("⬏")}>⬏</button>
                <button className="button-arrow" onClick={() => copyText("⬐")}>⬐</button>
                <button className="button-arrow" onClick={() => copyText("⬑")}>⬑</button>
                <button className="button-arrow" onClick={() => copyText("⬿")}>⬿</button>
                <button className="button-arrow" onClick={() => copyText("⬳")}>⬳</button>
                <button className="button-arrow" onClick={() => copyText("⬱")}>⬱</button>
                <button className="button-arrow" onClick={() => copyText("⭆")}>⭆</button>
                <button className="button-arrow" onClick={() => copyText("⭅")}>⭅</button>
                <button className="button-arrow" onClick={() => copyText("↞")}>↞</button>
                <button className="button-arrow" onClick={() => copyText("↟")}>↟</button>
                <button className="button-arrow" onClick={() => copyText("↠")}>↠</button>
                <button className="button-arrow" onClick={() => copyText("↡")}>↡</button>
                <button className="button-arrow" onClick={() => copyText("↩")}>↩</button>
                <button className="button-arrow" onClick={() => copyText("↖")}>↖</button>
                <button className="button-arrow" onClick={() => copyText("↘")}>↘</button>
                <button className="button-arrow" onClick={() => copyText("↗")}>↗</button>
                <button className="button-arrow" onClick={() => copyText("↙")}>↙</button>
                <button className="button-arrow" onClick={() => copyText("↕")}>↕</button>
                <button className="button-arrow" onClick={() => copyText("↛")}>↛</button>
                <button className="button-arrow" onClick={() => copyText("↚")}>↚</button>
                <button className="button-arrow" onClick={() => copyText("↝")}>↝</button>
                <button className="button-arrow" onClick={() => copyText("↜")}>↜</button>
                <button className="button-arrow" onClick={() => copyText("↪")}>↪</button>
                <button className="button-arrow" onClick={() => copyText("↣")}>↣</button>
                <button className="button-arrow" onClick={() => copyText("↢")}>↢</button>
                <button className="button-arrow" onClick={() => copyText("↥")}>↥</button>
                <button className="button-arrow" onClick={() => copyText("↤")}>↤</button>
                <button className="button-arrow" onClick={() => copyText("↦")}>↦</button>
                <button className="button-arrow" onClick={() => copyText("↧")}>↧</button>
                <button className="button-arrow" onClick={() => copyText("↨")}>↨</button>
                <button className="button-arrow" onClick={() => copyText("↪")}>↪</button>
                <button className="button-arrow" onClick={() => copyText("↩")}>↩</button>
                <button className="button-arrow" onClick={() => copyText("↱")}>↱</button>
                <button className="button-arrow" onClick={() => copyText("↰")}>↰</button>
                <button className="button-arrow" onClick={() => copyText("↲")}>↲</button>
                <button className="button-arrow" onClick={() => copyText("↬")}>↬</button>
                <button className="button-arrow" onClick={() => copyText("↫")}>↫</button>
                <button className="button-arrow" onClick={() => copyText("↮")}>↮</button>
                <button className="button-arrow" onClick={() => copyText("↯")}>↯</button>
                <button className="button-arrow" onClick={() => copyText("↭")}>↭</button>
                <button className="button-arrow" onClick={() => copyText("↳")}>↳</button>
                <button className="button-arrow" onClick={() => copyText("↴")}>↴</button>
                <button className="button-arrow" onClick={() => copyText("↹")}>↹</button>
                <button className="button-arrow" onClick={() => copyText("↸")}>↸</button>
                <button className="button-arrow" onClick={() => copyText("↷")}>↷</button>
                <button className="button-arrow" onClick={() => copyText("↶")}>↶</button>
                <button className="button-arrow" onClick={() => copyText("↻")}>↻</button>
                <button className="button-arrow" onClick={() => copyText("↺")}>↺</button>
                <button className="button-arrow" onClick={() => copyText("⟳")}>⟳</button>
                <button className="button-arrow" onClick={() => copyText("⟲")}>⟲</button>
                <button className="button-arrow" onClick={() => copyText("↽")}>↽</button>
                <button className="button-arrow" onClick={() => copyText("↼")}>↼</button>
                <button className="button-arrow" onClick={() => copyText("↿")}>↿</button>
                <button className="button-arrow" onClick={() => copyText("↾")}>↾</button>
                <button className="button-arrow" onClick={() => copyText("⇁")}>⇁</button>
                <button className="button-arrow" onClick={() => copyText("⇀")}>⇀</button>
                <button className="button-arrow" onClick={() => copyText("⇃")}>⇃</button>
                <button className="button-arrow" onClick={() => copyText("⇂")}>⇂</button>
                <button className="button-arrow" onClick={() => copyText("⇄")}>⇄</button>
                <button className="button-arrow" onClick={() => copyText("⇅")}>⇅</button>
                <button className="button-arrow" onClick={() => copyText("⇆")}>⇆</button>
                <button className="button-arrow" onClick={() => copyText("⇉")}>⇉</button>
                <button className="button-arrow" onClick={() => copyText("⇇")}>⇇</button>
                <button className="button-arrow" onClick={() => copyText("⇊")}>⇊</button>
                <button className="button-arrow" onClick={() => copyText("⇈")}>⇈</button>
                <button className="button-arrow" onClick={() => copyText("⇌")}>⇌</button>
                <button className="button-arrow" onClick={() => copyText("⇋")}>⇋</button>
                <button className="button-arrow" onClick={() => copyText("⇐")}>⇐</button>
                <button className="button-arrow" onClick={() => copyText("⇑")}>⇑</button>
                <button className="button-arrow" onClick={() => copyText("⇒")}>⇒</button>
                <button className="button-arrow" onClick={() => copyText("⇓")}>⇓</button>
                <button className="button-arrow" onClick={() => copyText("⇔")}>⇔</button>
                <button className="button-arrow" onClick={() => copyText("⬁")}>⬁</button>
                <button className="button-arrow" onClick={() => copyText("⬀")}>⬀</button>
                <button className="button-arrow" onClick={() => copyText("⬄")}>⬄</button>
                <button className="button-arrow" onClick={() => copyText("⬃")}>⬃</button>
                <button className="button-arrow" onClick={() => copyText("⬂")}>⬂</button>
                <button className="button-arrow" onClick={() => copyText("⇏")}>⇏</button>
                <button className="button-arrow" onClick={() => copyText("⇍")}>⇍</button>
                <button className="button-arrow" onClick={() => copyText("⇎")}>⇎</button>
                <button className="button-arrow" onClick={() => copyText("⇕")}>⇕</button>
                <button className="button-arrow" onClick={() => copyText("⇙")}>⇙</button>
                <button className="button-arrow" onClick={() => copyText("⇖")}>⇖</button>
                <button className="button-arrow" onClick={() => copyText("⇗")}>⇗</button>
                <button className="button-arrow" onClick={() => copyText("⇘")}>⇘</button>
                <button className="button-arrow" onClick={() => copyText("⇛")}>⇛</button>
                <button className="button-arrow" onClick={() => copyText("⇚")}>⇚</button>
                <button className="button-arrow" onClick={() => copyText("⇝")}>⇝</button>
                <button className="button-arrow" onClick={() => copyText("⇜")}>⇜</button>
                <button className="button-arrow" onClick={() => copyText("⇟")}>⇟</button>
                <button className="button-arrow" onClick={() => copyText("⇞")}>⇞</button>
                <button className="button-arrow" onClick={() => copyText("⇠")}>⇠</button>
                <button className="button-arrow" onClick={() => copyText("⇣")}>⇣</button>
                <button className="button-arrow" onClick={() => copyText("⇡")}>⇡</button>
                <button className="button-arrow" onClick={() => copyText("⇢")}>⇢</button>
                <button className="button-arrow" onClick={() => copyText("⇥")}>⇥</button>
                <button className="button-arrow" onClick={() => copyText("⇤")}>⇤</button>
                <button className="button-arrow" onClick={() => copyText("⇿")}>⇿</button>
                <button className="button-arrow" onClick={() => copyText("⇽")}>⇽</button>
                <button className="button-arrow" onClick={() => copyText("⇾")}>⇾</button>
                <button className="button-arrow" onClick={() => copyText("⇨")}>⇨</button>
                <button className="button-arrow" onClick={() => copyText("⇦")}>⇦</button>
                <button className="button-arrow" onClick={() => copyText("⇧")}>⇧</button>
                <button className="button-arrow" onClick={() => copyText("⇪")}>⇪</button>
                <button className="button-arrow" onClick={() => copyText("⇩")}>⇩</button>
                <button className="button-arrow" onClick={() => copyText("▶")}>▶</button>
                <button className="button-arrow" onClick={() => copyText("⌅")}>⌅</button>
                <button className="button-arrow" onClick={() => copyText("⌆")}>⌆</button>
                <button className="button-arrow" onClick={() => copyText("⌤")}>⌤</button>
                <button className="button-arrow" onClick={() => copyText("⏎")}>⏎</button>
                <button className="button-arrow" onClick={() => copyText("☇")}>☇</button>
                <button className="button-arrow" onClick={() => copyText("☈")}>☈</button>
                <button className="button-arrow" onClick={() => copyText("➔")}>➔</button>
                <button className="button-arrow" onClick={() => copyText("➘")}>➘</button>
                <button className="button-arrow" onClick={() => copyText("➙")}>➙</button>
                <button className="button-arrow" onClick={() => copyText("➚")}>➚</button>
                <button className="button-arrow" onClick={() => copyText("➛")}>➛</button>
                <button className="button-arrow" onClick={() => copyText("➜")}>➜</button>
                <button className="button-arrow" onClick={() => copyText("➝")}>➝</button>
                <button className="button-arrow" onClick={() => copyText("➞")}>➞</button>
                <button className="button-arrow" onClick={() => copyText("➟")}>➟</button>
                <button className="button-arrow" onClick={() => copyText("➠")}>➠</button>
                <button className="button-arrow" onClick={() => copyText("➡")}>➡</button>
                <button className="button-arrow" onClick={() => copyText("➢")}>➢</button>
                <button className="button-arrow" onClick={() => copyText("➣")}>➣</button>
                <button className="button-arrow" onClick={() => copyText("➤")}>➤</button>
                <button className="button-arrow" onClick={() => copyText("➥")}>➥</button>
                <button className="button-arrow" onClick={() => copyText("➦")}>➦</button>
                <button className="button-arrow" onClick={() => copyText("➧")}>➧</button>
                <button className="button-arrow" onClick={() => copyText("➨")}>➨</button>
                <button className="button-arrow" onClick={() => copyText("➪")}>➪</button>
                <button className="button-arrow" onClick={() => copyText("➩")}>➩</button>
                <button className="button-arrow" onClick={() => copyText("➬")}>➬</button>
                <button className="button-arrow" onClick={() => copyText("➫")}>➫</button>
                <button className="button-arrow" onClick={() => copyText("➮")}>➮</button>
                <button className="button-arrow" onClick={() => copyText("➭")}>➭</button>
                <button className="button-arrow" onClick={() => copyText("➱")}>➱</button>
                <button className="button-arrow" onClick={() => copyText("➯")}>➯</button>
                <button className="button-arrow" onClick={() => copyText("➲")}>➲</button>
                <button className="button-arrow" onClick={() => copyText("➴")}>➴</button>
                <button className="button-arrow" onClick={() => copyText("➳")}>➳</button>
                <button className="button-arrow" onClick={() => copyText("➵")}>➵</button>
                <button className="button-arrow" onClick={() => copyText("➷")}>➷</button>
                <button className="button-arrow" onClick={() => copyText("➶")}>➶</button>
                <button className="button-arrow" onClick={() => copyText("➹")}>➹</button>
                <button className="button-arrow" onClick={() => copyText("➸")}>➸</button>
                <button className="button-arrow" onClick={() => copyText("➻")}>➻</button>
                <button className="button-arrow" onClick={() => copyText("➺")}>➺</button>
                <button className="button-arrow" onClick={() => copyText("➽")}>➽</button>
                <button className="button-arrow" onClick={() => copyText("➼")}>➼</button>
                <button className="button-arrow" onClick={() => copyText("➾")}>➾</button>
                <button className="button-arrow" onClick={() => copyText("⤴")}>⤴</button>
                <button className="button-arrow" onClick={() => copyText("⤵")}>⤵</button>
                <button className="button-arrow" onClick={() => copyText("↵")}>↵</button>
                <button className="button-arrow" onClick={() => copyText("↓")}>↓</button>
                <button className="button-arrow" onClick={() => copyText("↔")}>↔</button>
                <button className="button-arrow" onClick={() => copyText("←")}>←</button>
                <button className="button-arrow" onClick={() => copyText("→")}>→</button>
                <button className="button-arrow" onClick={() => copyText("↑")}>↑</button>
                <button className="button-arrow" onClick={() => copyText("⍇")}>⍇</button>
                <button className="button-arrow" onClick={() => copyText("⍈")}>⍈</button>
                <button className="button-arrow" onClick={() => copyText("⍐")}>⍐</button>
                <button className="button-arrow" onClick={() => copyText("⍗")}>⍗</button>
                <button className="button-arrow" onClick={() => copyText("⇫")}>⇫</button>
                <button className="button-arrow" onClick={() => copyText("⇬")}>⇬</button>
                <button className="button-arrow" onClick={() => copyText("⇭")}>⇭</button>
                <button className="button-arrow" onClick={() => copyText("⇮")}>⇮</button>
                <button className="button-arrow" onClick={() => copyText("⇯")}>⇯</button>
                <button className="button-arrow" onClick={() => copyText("⇰")}>⇰</button>
                <button className="button-arrow" onClick={() => copyText("⇱")}>⇱</button>
                <button className="button-arrow" onClick={() => copyText("⇲")}>⇲</button>
                <button className="button-arrow" onClick={() => copyText("⇳")}>⇳</button>
                <button className="button-arrow" onClick={() => copyText("⇴")}>⇴</button>
                <button className="button-arrow" onClick={() => copyText("⇵")}>⇵</button>
                <button className="button-arrow" onClick={() => copyText("⇶")}>⇶</button>
                <button className="button-arrow" onClick={() => copyText("⇷")}>⇷</button>
                <button className="button-arrow" onClick={() => copyText("⇸")}>⇸</button>
                <button className="button-arrow" onClick={() => copyText("⇹")}>⇹</button>
                <button className="button-arrow" onClick={() => copyText("⇺")}>⇺</button>
                <button className="button-arrow" onClick={() => copyText("⇻")}>⇻</button>
                <button className="button-arrow" onClick={() => copyText("⇼")}>⇼</button>
                <button className="button-arrow" onClick={() => copyText("𖤂")}>𖤂</button>
                <button className="button-arrow" onClick={() => copyText("𖣫")}>𖣫</button>
                
            </div>
        </div>
    )
}


