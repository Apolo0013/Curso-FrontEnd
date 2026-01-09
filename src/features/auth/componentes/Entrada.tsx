import { useRef, useState } from 'react'
import './Entrada.scss'
//Imagens svg
import ImgEmail from '../assets/ico/ico-email.svg'
import ImgSenha from '../assets/ico/ico-senha.svg'
import ImgOlhoOn from '../assets/ico/ico-olho.svg'
import ImgOlhoOff from '../assets/ico/ico-olho-fechado.svg'
//
type typeInput = 'text' | "password" | 'email'

const ICONS: Record<typeInput, string> = {
    password: ImgSenha,
    email: ImgEmail,
    text: ImgEmail
}

//Props
type Props = {
    label: string,
    inputType: typeInput
}

function Entrada({ label, inputType }: Props) {
    //conteudo da entrada.
    const RefInput = useRef<HTMLInputElement | null>(null)
    //state responsavel pelo pleceholder
    //funcao para onBlur
    function onFocus() {
        Setph('0%')
        SetSenhaViewOpacity(1) // mostrar o senha view
    }

    function onBlur() {
        if (!RefInput.current || RefInput.current.value.length > 1) return // retorna, quando: o ref for nulo e o conteudo estive com conteudo dentro.
        SetSenhaViewOpacity(0) // esconder o senha view
        Setph('50%')
    }

    const [ph, Setph] = useState<"0%" | '50%'>('50%') // state responsavel por isso
    //Caso seja do tipo senha.
    //State responsavel por mudar src, a imagem.
    const [StateSenha, SetStateSenha] = useState<boolean>(false)
    //manipualado da opacidade do viewsenha
    const [SenhaViewOpacity, SetSenhaViewOpacity] = useState<0 | 1>(0)

    return (
        <div className="conteiner-entrada">
            {/*o placeholder pensonalizador*/}
            <label htmlFor={inputType} id={inputType}
                className="placeholder-entrada"
                style={{
                    top: ph,
                    //color: ph == '0%' ? '#3f75e2' : "#aeaeae"
                }}
            >
                <img
                    className='auth-ph-img'
                    src={ICONS[inputType]}
                />
                <p className='auth-ph-label'>{label}</p>
            </label>
            {/*O Input ondem vai receber a entrada*/}
            <input
                id={inputType}
                name={inputType}
                required
                //
                placeholder={""}
                className='entrada-input'
                type={
                    //caso for diferente de senha, vamos add o inputtype normal
                    inputType != 'password'
                        ? inputType // normal
                        //para senha:
                        : StateSenha ? 'text' :  'password'
                    }
                //events
                onFocusCapture={onFocus}
                onBlurCapture={onBlur}
                //Ref
                ref={RefInput}
            />
            {/*Se for do tipo  senha*/}
            {
                inputType == 'password'
                    ? //se for do tipo senha
                    <span
                        style={{
                            opacity: SenhaViewOpacity,
                            //se ele estive visivel
                            pointerEvents: SenhaViewOpacity == 1
                                ? 'all' // interativade ativa
                                : 'none' // interativade desativada
                        }}
                        className='auth-show-senha'
                        onClick={() => SetStateSenha(prev => !prev) } // mudar de view
                    >
                        <img src={StateSenha ? ImgOlhoOn : ImgOlhoOff} alt="Imagem do olho aberto ou fechado"
                        />
                    </span>
                    //senao for
                    : null
            }
        </div>
    )
}

export default Entrada