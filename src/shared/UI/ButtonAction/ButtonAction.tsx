import './ButtonAction.scss'

type Props = {
    bg: string,
    text: string,
    onClick?: () => void
    color?: 'white' | 'black' | string,
    height?: string
    width?: string,
    className?: string
}

function BotaoAction({ bg, text, color, height, className, width, onClick}: Props) {
    return (
        <button className={'ButtonAction ' + className}
            style={{
                background: bg,
                color: color,
                height: height ? height : '70px',
                width: width ? width : '100%'
            }}
            //Evento click
            onClick={onClick}
        >{text}</button>
    )
}

export default BotaoAction