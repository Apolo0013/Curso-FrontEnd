import { useParams } from 'react-router-dom'
import './ComprarCurso.scss'
import { useCourseStore, type Course } from '../../../../store/curso.store'
import BotaoAction from '../../../../shared/UI/ButtonAction'

function ComprarCurso() {
    //peganddo o id do curso via rota
    const { idCourse } = useParams()
    //pegando o curso pelo store
    const course: Course | undefined = useCourseStore((state) => state.Course).find(info => info.id == idCourse)
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