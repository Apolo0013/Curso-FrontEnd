import './BackCurso.scss'

function BackCurso({children}: {children: React.ReactNode}) {
    return (
        <main className='BackCurso'>
            {children}
        </main>
    )
}

export default BackCurso