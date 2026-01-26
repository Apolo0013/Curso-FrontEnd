import './ButtonAction.scss'

type Props = {
    bg: string,
    text: string,
    color?: 'white' | 'black' | string,
    height?: string
    width?: string,
    className?: string
}

function BotaoAction({ bg, text, color, height, className, width}: Props) {
    return (
        <button className={'ButtonAction ' + className}
            style={{
                background: bg,
                color: color,
                height: height ? height : '70px',
                width: width ? width : '100%'
            }}
        >{text}</button>
    )
}

export default BotaoAction