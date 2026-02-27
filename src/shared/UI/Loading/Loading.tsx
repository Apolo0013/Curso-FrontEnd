import './Loading.scss'

function Loading() {
    return (
        <section className="page-loading">
            <h1>Carregando, por favor aguarde.</h1>
            <div className='loading'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Loading