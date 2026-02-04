import './MainGrid.scss'

function MainGrid({ children }: { children: React.ReactNode }) {
    return (
        <main className="main-grid-dashboard">  
            {children}
        </main>
    )
}

export default MainGrid