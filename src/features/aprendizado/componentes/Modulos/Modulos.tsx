import './Modulos.scss'
//Componentes
import ModuloVisao from '../ModuloVisao/ModuloVisao';
//Hook
import useContentQuery from '../../../dashboard/hook/useContentQuery';
import { useParams } from 'react-router-dom';
import type { CourseContent } from '../../../dashboard/services/service.types';
import { useAuthStore } from '../../../../store/auth.store';

function Modulos() {
    //pegando o id do curso via rota
    const {idCourse} = useParams()
    //pegando o id do usuario
    const idUser = useAuthStore(state => state.user.id)
    const { data } = useContentQuery({ idUser: idUser })
    let content: CourseContent | null = null
    if (data && data.data) {
        content = data.data.find(x => x.idCourse == idCourse) ?? null
    }

    return (
        <section className='modulos-main'>
            <h2 className='text-main text-2xl'>Modulos</h2>
            <div className='flex flex-col gap-2'>
                {
                    content
                        ? content.modules.map((valor, k) => (
                            <ModuloVisao
                                title={valor.title}
                                order={valor.order}
                                aulas={valor.classes}
                                key={k}
                            />
                        ))
                        : null
                }
            </div>
        </section>
    )
}

export default Modulos