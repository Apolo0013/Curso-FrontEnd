import './ComprarCurso.scss'
//react
import { useParams } from 'react-router-dom'
//type
import type { Course } from '../../hooks/type'
//UI
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
//HOOK
import useVerCurso from '../../hooks/useVerCurso'
import useCursos from '../../hooks/useCursos'
import useCursosQuery from '../../hooks/useCursosQuery'

function ComprarCurso() {
    //peganddo o id do curso via rota
    const { idCourse } = useParams()
    
    const { data } = useCursosQuery()
    const {GetByID} = useCursos()
    const course : Course | undefined = GetByID(
        data ? data!.data: undefined,
        idCourse!
    )
    //HOOK
    const {
        onClickAddCarrinho
    } = useVerCurso()
    return (
        <main className="wraper-comprar-curso">
            <div className='comprar-curso'>
                <h1 className='text-main text-4xl'>R$ {course ? course.price : "0"}</h1>
                <div className='w-full flex flex-col gap-[10px]'>
                    <BotaoAction
                        bg='#f4c44a'
                        text='Comprar'
                        color='black'
                    />
                    <BotaoAction
                        bg='#2f4bc9'
                        text='Adicionar ao Carrinho'
                        color='white'
                        onClick={() => onClickAddCarrinho(course!)}
                    />
                </div>
                <ul className="list-check">
                    <li>Garantia de 7 dias</li>
                    <li>Acesso vitalicio</li>
                </ul>
            </div>
        </main>
    )
}

export default ComprarCurso