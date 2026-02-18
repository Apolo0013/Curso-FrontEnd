import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import { useAuthStore } from '../../../../store/auth.store'
import useContentQuery from '../../hook/useContentQuery'
import './HeaderDashBoard.scss'

function HeaderDashBoard() {
    const {data} = useContentQuery({idUser: 'user-001'})
    //store
    const nome = useAuthStore(state => state.user.nome)
    return (
        <ObserverWrapper
            duration='0.5s'
            opacity={0}
            timing_function='ease-in-out'
            x='-50px'
            y='0'
        >
            <header className='head-dashboard'>
                <h1 className='text-4xl font-semibold text-main '>Bem-vindo de volta, {nome}</h1>
                <span className='flex gap-[10px] h-[30px] items-center mt-2'>
                    <h3 className='text-xl text-sg'>Voce esta matriculado em {
                        data
                            ? data.data?.length
                            : '0'
                    } Cursos</h3>
                    <div className='asp-1-1 circle-gray'></div>
                    <span className='flex gap-[5px]'>
                        <h3 className='text-xl text-sg'>Progresso Medio: </h3>
                        <h3 className='text-xl text-main'>100%</h3>
                    </span>
                </span>
            </header >
        </ ObserverWrapper >
    )
}

export default HeaderDashBoard