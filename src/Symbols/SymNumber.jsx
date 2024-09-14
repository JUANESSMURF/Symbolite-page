import { SymMessage } from "../Logic";



export const SymNumber = (showMessage) => {

    const { message, handleButtonClick } = SymMessage(showMessage);

    return (
        <div className="buttons-container number-container">
            <div className="buttons-title-container">
                <h2>Símbolos Numéricos</h2>
            </div>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
            <div className="button-symbols-container">
                <button className="button-number" onClick={() => handleButtonClick("Ⅰ", "Ⅰ")}>Ⅰ</button>
                <button className="button-number" onClick={() => handleButtonClick("Ⅱ", "Ⅱ")}>Ⅱ</button>
                <button className="button-number" onClick={() => handleButtonClick("Ⅲ", "Ⅲ")}>Ⅲ</button>
                <button className="button-number" onClick={() => handleButtonClick("Ⅳ", "Ⅳ")}>Ⅳ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅴ", "Ⅴ")}>Ⅴ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅵ", "Ⅵ")}>Ⅵ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅶ", "Ⅶ")}>Ⅶ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅷ", "Ⅷ")}>Ⅷ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅸ", "Ⅸ")}>Ⅸ</button>     
                <button className="button-number" onClick={() => handleButtonClick("Ⅹ", "Ⅹ")}>Ⅹ</button>    
                <button className="button-number" onClick={() => handleButtonClick("⓵", "⓵")}>⓵</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓶", "⓶")}>⓶</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓷", "⓷")}>⓷</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓸", "⓸")}>⓸</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓹", "⓹")}>⓹</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓺", "⓺")}>⓺</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓻", "⓻")}>⓻</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓼", "⓼")}>⓼</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓽", "⓽")}>⓽</button>     
                <button className="button-number" onClick={() => handleButtonClick("⓾", "⓾")}>⓾</button>       
                <button className="button-number" onClick={() => handleButtonClick("⓿", "⓿")}>⓿</button>     
                <button className="button-number" onClick={() => handleButtonClick("❶", "❶")}>❶</button>     
                <button className="button-number" onClick={() => handleButtonClick("❷", "❷")}>❷</button>     
                <button className="button-number" onClick={() => handleButtonClick("❸", "❸")}>❸</button>     
                <button className="button-number" onClick={() => handleButtonClick("❹", "❹")}>❹</button>     
                <button className="button-number" onClick={() => handleButtonClick("❺", "❺")}>❺</button>     
                <button className="button-number" onClick={() => handleButtonClick("❻", "❻")}>❻</button>     
                <button className="button-number" onClick={() => handleButtonClick("❼", "❼")}>❼</button>     
                <button className="button-number" onClick={() => handleButtonClick("❽", "❽")}>❽</button>     
                <button className="button-number" onClick={() => handleButtonClick("❾", "❾")}>❾</button>     
                <button className="button-number" onClick={() => handleButtonClick("❿", "❿")}>❿</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈠", "㈠")}>㈠</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈡", "㈡")}>㈡</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈢", "㈢")}>㈢</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈣", "㈣")}>㈣</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈤", "㈤")}>㈤</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈥", "㈥")}>㈥</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈦", "㈦")}>㈦</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈧", "㈧")}>㈧</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈨", "㈨")}>㈨</button>     
                <button className="button-number" onClick={() => handleButtonClick("㈩", "㈩")}>㈩</button>     
                <button className="button-number" onClick={() => handleButtonClick("０", "０")}>０</button>     
                <button className="button-number" onClick={() => handleButtonClick("１", "１")}>１</button>     
                <button className="button-number" onClick={() => handleButtonClick("２", "２")}>２</button>     
                <button className="button-number" onClick={() => handleButtonClick("３", "３")}>３</button>
                <button className="button-number" onClick={() => handleButtonClick("４", "４")}>４</button>   
                <button className="button-number" onClick={() => handleButtonClick("５", "５")}>５</button>     
                <button className="button-number" onClick={() => handleButtonClick("６", "６")}>６</button>     
                <button className="button-number" onClick={() => handleButtonClick("７", "７")}>７</button>     
                <button className="button-number" onClick={() => handleButtonClick("８", "８")}>８</button>     
                <button className="button-number" onClick={() => handleButtonClick("９", "９")}>９</button>     
            </div>
        </div>
    )
}