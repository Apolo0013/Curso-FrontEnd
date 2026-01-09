import './OpcaoAuth.scss'
//Imagens
import ImgFaceBook from '../assets/ico/ico-facebook.svg'
import ImgGoogle from '../assets/ico/ico-google.svg'
import ImgApple from '../assets/ico/ico-apple.svg'

function OpcaoAuth() {
    return (
        <div className='Opcao-auth'>
            <button
                className='Opcao-conectar'
                disabled 
                aria-label="Conectar no Facebook"
            >
                <img src={ImgFaceBook} alt="Imagem do Facebook" />
                <p>Facebook</p>
            </button>
            <button
                className='Opcao-conectar'
                disabled
                aria-label="Conectar no Google"
            >
                <img src={ImgGoogle} alt="Imagem do Google" />
                <p>Google</p>
            </button>
            <button
                className='Opcao-conectar'
                disabled
                aria-label="Conectar na Apple"
            >   
                <img src={ImgApple} alt="Imagem da Apple" />
                <p>Apple</p>
            </button>   
        </div>
    )
}

export default OpcaoAuth