import './BackCurso.scss'

type Props = {
    children: React.ReactNode,
    className?: string
}

function BackCurso({children, className}: Props) {
    return (
        <main className={`${className ? className : ''} BackCurso`}>
            {children}
        </main>
    )
}

export default BackCurso