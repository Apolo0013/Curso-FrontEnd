import type React from 'react'
import './MainGridVisao.scss'

function MainGrid({ children }: {children: React.ReactNode}) {
    return (
        <main className="main-grid-visao-curso">
            {children}
        </main>
    )
}

export default MainGrid