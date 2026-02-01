import { toast } from "react-toastify"
import { useCartStore } from "../../../store/cart.store"
import { CursoMensagem } from "../../../shared/mensagem/curso.mensagem"


function useCarrinho() {
    function SumOfPurchases(): number {
        return Itens.reduce((acc, item) => acc + item.price, 0)
    }

    function onClickRemoveCarrinho(id: string) {
        Remove(id)
        //mandando a notificao de sucesso
        toast.success(CursoMensagem.SUCESSO_CURSO_REMOVIDO, {
            autoClose: 3000
        })
    }

    const {Remove, Itens} = useCartStore()

    return {
        onClickRemoveCarrinho,
        SumOfPurchases
    }
}

export default useCarrinho