import type React from "react"
import './BackAprendizado.scss'

function BackAprendizado({children}: {children: React.ReactNode}) {
    return (
        <main className='BackAprendizado'>
            {children}
        </main>
    )
}

export default BackAprendizado