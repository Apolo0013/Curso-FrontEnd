import './BotaoAuth.scss'

//Props
type Props = {
    text: string
}

function BotaoAuth({text}: Props) {
    return (
        <div className="auth-botao-enter" role='group' aria-label="Botao de autenticacao">
            <button>{text}</button>
        </div>
    )
}

export default BotaoAuth