import './BotaoAuth.scss'

//Props
type Props = {
    text: string,
    onClick?: () => void
}

function BotaoAuth({text, onClick}: Props) {
    return (
        <div className="auth-botao-enter" role='group' aria-label="Botao de autenticacao">
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default BotaoAuth