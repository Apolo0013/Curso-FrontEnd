import './HeaderCurso.scss'

function HeaderCurso() {
    return (
        <header className='head-curso'>
            <ul>
                <li aria-label='usuario' className='user-conteiner gap-[8px]'>
                    <img
                        src="https://picsum.photos/300"
                        alt="Imagens do usuario"
                        className='user-img'
                    />
                    <p
                        className='user-name'
                    >Apolonio</p>
                </li>
            </ul>
        </header>
    )
}

export default HeaderCurso