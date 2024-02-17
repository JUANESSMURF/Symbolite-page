import { copyText } from "../Logic";
import { SymArrowMessage } from "../Logic";






export const SymArrows = () => {

    const { message, handleButtonClick } = SymArrowMessage();
    

    return (
        <div className="buttons-container arrows-container">
            <div className="buttons-title-container">
                <h2>Símbolos De Flecha</h2>
            </div>   
            <div className="button-symbols-container">
                {message && (
                    <div className="message">
                        {message}
                    </div>
                )}
                <button className="button-arrow" onClick={() => handleButtonClick("⬆")}>⬆</button>
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


