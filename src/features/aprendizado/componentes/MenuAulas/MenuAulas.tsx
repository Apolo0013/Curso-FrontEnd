import { useParams } from 'react-router-dom'
import type { Classes } from '../../../dashboard/services/service.types'
import './MenuAulas.scss'
import { useAuthStore } from '../../../../store/auth.store'
import useIsAvailable from '../../hook/logic/useIsAvailable'
//imagens
import ImgPadLock from '../../assets/ico-padlock.svg'

type Props = { aulas: Classes[] }

function MenuAulas({ aulas }: Props) {
    return (
        <aside className="Menu-Aulas">
            <h2 className='text-main text-xl font-bold mt-4'>Conteudo do Curso</h2>
            { 
                aulas.map((info, key) => (
                    <OpcaoAula key={key} info={info} />        
                ))
            }
        </aside>
    )
}

//estou criando aqui por se um componentes simples,  que sera utilizado so aqui
function OpcaoAula({info}: {
    info: Classes
}) {
    //id curso/course
    const { idCourse } = useParams()
    //id do usuario
    const idUser = useAuthStore(state => state.user.id)

    const available = useIsAvailable({
        idClass: info.idClass,
        idCourse: idCourse!,
        idUser: idUser
    })
    return (
        <div className='aulas'>
            <div
                className={`opcao-aulas
                    ${available
                        ? "opcao-aula-disponivel"
                        : "opcao-aula-lock"
                    }
                    `}
                >
                <h3 className='text-main text-lg'>{info.title}</h3>
                <p className='text-base text-sg'>{Math.floor(info.durationInSeconds / 60)} min</p>

                {/*cadea em frente deles*/}
                { 
                    !available
                        ? <div className='aula-block'>
                            <img
                                className=''
                                src={ImgPadLock}
                                alt="Imagem de um cadeado" />
                        </div>
                        : null
                }

            </div>
        </div>
    )
}

export default MenuAulas






