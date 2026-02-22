import { toast } from "react-toastify"
import { useCartStore, type ItemCart } from "../../../../store/cart.store"
import type { Course } from "./type"
//mensagens
import { CursoMensagem } from "../../../../shared/mensagem/curso.mensagem"
import { useNavigate } from "react-router-dom"


function useVerCurso() {
    function onClickAddCarrinho(course: Course) {
        //verificando se ele ja add no carrinhho
        if (Itens.some(info => info.id == course.id)) {
            toast.error(CursoMensagem.ERROR_CURSO_JA_ADD, {
            autoClose: 3000
        })
            return
        }
        //criando item
        const item: ItemCart = {
            author: {
                name: course.author.name,
                srcAvatar: course.author.srcAvatar
            },
            id: course.id,
            title: course.title,
            price: course.price,
            thumbnailUrl: course.thumbnailUrl
        }
        //add na lista
        Add(item)
        //add no carrinho. Manda um aviso
        toast.success(CursoMensagem.SUCESSO_ADD_CURSO, {
            autoClose: 3000,
            onClick: () => {
                nv('/cursos/carrinho')
            }
        })
    }

    //Store carrinho/cart
    const {Add, Itens} = useCartStore()
    //nevegador
    const nv = useNavigate()

    return {
        onClickAddCarrinho,
    }
}

export default useVerCurso