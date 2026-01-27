import { toast } from "react-toastify"
import { useCartStore } from "../../../store/cart.store"
import { CursoMensagem } from "../../../shared/mensagem/curso.mensagem"


function useCarrinho() {
    function onClickRemoveCarrinho(id: string) {
        useCartStore.setState(prev => ({
            Itens: prev.Itens.filter(
                (info, _) => info.id != id
            )
        }))
        //mandando a notificao de sucesso
        toast.success(CursoMensagem.SUCESSO_CURSO_REMOVIDO, {
            autoClose: 3000
        })
    }
    return {
        onClickRemoveCarrinho
    }
}

export default useCarrinho