import './ComprarCurso.scss'
//react
import { useNavigate, useParams } from 'react-router-dom'
//type
import type { Course } from '../../hooks/logic/type'
//UI
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
//HOOK
import useVerCurso from '../../hooks/logic/useVerCurso'
import useCursos from '../../hooks/logic/useCursos'
import useGetAllCourses from '../../../../shared/hook/queries/useGetAllCourses'

function ComprarCurso() {
    //peganddo o id do curso via rota
    const { idCourse } = useParams()
    //fazendo a requisicao
    const { data } = useGetAllCourses()
    //pegando o curso alvo
    const {GetByID} = useCursos()
    const course : Course | undefined = GetByID(
        data ? data!.data: undefined,
        idCourse!
    )
    //navegador
    const nv = useNavigate()
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
                        onClick={() => nv('/cursos/carrinho')}
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