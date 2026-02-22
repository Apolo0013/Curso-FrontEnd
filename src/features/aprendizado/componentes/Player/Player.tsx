import './Player.scss'
//Componentes/UI
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
//Hook
import { useParams } from 'react-router-dom'
import useContentQuery from '../../../dashboard/hook/queries/useContent'
import { useAuthStore } from '../../../../store/auth.store'
//Type
import type { Classes } from '../../../dashboard/services/service.types'
//HOOK
import usePlayer from '../../hook/logic/usePlayer'

function Player() {
    //HOOK
    const {
        handlerCompletedClass,
        GetContentPlayer,
        GetIndividualClassNumber
    } = usePlayer()
    //pegando id do curso e a aula
    const { idClass, idCourse } = useParams()
    let idModule: string | null = null
    //pegando id do usuario
    const idUser: string = useAuthStore(state => state.user.id)
    //pegando o conteudo
    const { data } = useContentQuery({ idUser: idUser })
    //conteudo dessa page
    let content: Classes | null = null
    if (data && data.data && idClass) {
        const contentData = GetContentPlayer({
            data: data.data,
            idClass: idClass
        })
        console.log(contentData)
        if (contentData) {
            idModule = contentData.idModule
            content = contentData.classes
        }
    }
    //Numero individual da aula
    const NumberClass: string | null = GetIndividualClassNumber(idCourse!, idClass!)
    return (
        <div className="Player">
            <div className="wraper-video">
                <video
                    src={content ? content.video : "#"}
                    className="w-full h-full"
                    controls
                ></video>
            </div>
            <div className='w-full flex flex-col gap-[5px]'>
                <h2 className='text-main text-2xl font-bold'>
                    {
                        content
                            ? content.title
                            : ""
                    }
                </h2>
                <h3 className='text-sg text-lg'>Aula {NumberClass ? NumberClass : 0}: 
                    {
                        content 
                            ? ' ' + content.title
                            : ""
                    }
                </h3>
                <BotaoAction
                    width='200px'
                    height='50px'
                    text='Marca como concluida'
                    color='white'
                    className='mt-2 !text-lg !w-[fit-content] p-2'
                    bg='#3D8BF2'
                    onClick={() => handlerCompletedClass({
                        idClass: idClass!,
                        idCourse: idCourse!,
                        idModule: idModule!,
                        idUser: idUser
                    })}
                />
            </div>
        </div>
    )
}

export default Player