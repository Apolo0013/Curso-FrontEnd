//esse componentes sevira como background dos selecionado ao auth/autentica
import './BackAuth.scss'

function BackAuth({children}: {children: React.ReactNode}) {
    return (
        <div className="conteiner-backauth">
            <section className='conteiner-auth'>
                {children}
                {
                    /*
                    <svg viewBox='0 0 100 100' style={{ position: 'absolute', height: '100%', filter: "blur(40px)"}}>
                    <path
                        d="M0 100 L100 100 L100 0 Q70 70, 0 100 Z"
                        fill='#ffffff0c'
                    />
                </svg >
                    */
                }
            </section>
        </div>
    )
}

export default BackAuth