import { useParams } from 'react-router-dom'
import ProgressBar from '../../../../shared/UI/ProgressBar/ProgressBar'
import ProgressCircle from '../../../../shared/UI/ProgressCircle/ProgressCircle'
import useDashBoard from '../../../dashboard/hook/logic/useDashBoard'
import './ProgressoGeral.scss'

function ProgressoGeral() {
    //id do curso
    const { idCourse } = useParams()
    //HOOK
    const { GetProgressCourse } = useDashBoard()
    const porcent: string = GetProgressCourse(idCourse!) + "%"
    return (
        <div className='progresso-geral'>
            <ProgressCircle porcento={porcent} />
            <h2 className='text-main text-3xl self-center'>Progresso Geral</h2>
            <h2 className='w-full h-full flex flex-center text-lg text-main'>{porcent}</h2>
            <div className='w-full h-full col-start-1 col-end-4 flex items-center'>
                <ProgressBar porcento={porcent} withText={false} />
            </div>
        </div>  
    )
}

export default ProgressoGeral