import './BackDashBoard.scss'
import type React from "react"

function BackDashBoard({children}: {children: React.ReactNode}) {
    return (
        <main className="BackDashBoard">
            {children}
        </main>
    )
}

export default BackDashBoard