import Header from "../../../shared/componentes/Header/Header"
import BackCurso from "../componentes/BackCurso/BackCurso"
import ItemsCarrinho from "../componentes/ItemsCart/ItemsCart"
import ResumoCart from "../componentes/ResumoCart/ResumoCart"

function CarrinhoPage() {
    return (
        <BackCurso>
            <Header/>
            <main className="p-4 flex flex-col w-10/12 mt-[30px]">
                <h1 className="text-main text-4xl">Carrinho</h1>
                <div className="grid gap-4 grid-cols-[70%_30%] grid-rows-1 w-full mt-5">
                    <ItemsCarrinho />
                    <ResumoCart />
                </div>
            </main>
        </BackCurso>
    )
}

export default CarrinhoPage