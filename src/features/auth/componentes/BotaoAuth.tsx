import './BotaoAuth.scss'

//Props
type Props = {
    text: string,
    isPending: boolean, // true: enquanto esta percorrendo a requisicao
    onClick?: () => void
}

function BotaoAuth({ text, onClick, isPending }: Props) {
    return (
        <div className="auth-botao-enter" role='group' aria-label="Botao de autenticacao"
        >
            <button
                style={{cursor: isPending ? 'no-drop' : "pointer"}}
                onClick={onClick}
                disabled={isPending}
            >{
                isPending
                    ? <span className='londing-circle'></span>
                    : <p>{text}</p>
            }</button>
        </div>
    )
}

export default BotaoAuth