import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { Symbols } from "./Symbols"


export const Article = () => {
    return (
        <main className='article'>
          <Logo/>
          <Navbar />
          <div className='contentArticle'>
            <p>Si estas buscando símbolos para tu proyecto, pagina web o por simple diversion
                estas en el lugar indicado!</p>
            <p>Con un simple click podrás copiar cualquier símbolo que estés buscando.</p>
          </div>
          <Symbols/>
        </main>
    )
}