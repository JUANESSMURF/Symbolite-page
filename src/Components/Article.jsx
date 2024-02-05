
import { Symbols } from "./Symbols"


export const Article = () => {
    return (
        <main className='article'>       
          <div className='content-article'>
            <h2>Encuentra el símbolo que necesitas de una forma rápida y fácil</h2>
            <p>Si estas buscando símbolos para tu proyecto, pagina web o por simple diversion
                estas en el lugar indicado!</p>
            <p>Con un simple click podrás copiar cualquier símbolo que estés buscando.</p>
          </div>
          <Symbols/>
        </main>
    )
}