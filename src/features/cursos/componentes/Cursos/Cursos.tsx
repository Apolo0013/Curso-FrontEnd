import CardCurso from './CardCurso'
import './Cursos.scss'

function Cursos() {

    type Curso = {
        title: string;
        autor: string,
        description: string;
        price: number;
        thumbnailURL: string
    }

    const Cursos: Curso[] = [
    {
        title: "JavaScript do Zero",
        autor: "João Silva",
        description: "Aprenda JavaScript do básico ao intermediário com exemplos práticos.",
        price: 49.99,
        thumbnailURL: "https://cdn.simpleicons.org/javascript/white"
    },
    {
        title: "TypeScript na Prática",
        autor: "Maria Oliveira",
        description: "Domine TypeScript e escreva código mais seguro e escalável.",
        price: 59.99,
        thumbnailURL: "https://cdn.simpleicons.org/typescript/white"
    },
    {
        title: "React Essencial",
        autor: "Carlos Souza",
        description: "Construa interfaces modernas usando React e hooks.",
        price: 69.99,
        thumbnailURL: "https://cdn.simpleicons.org/react/white"
    },
    {
        title: "Node.js e APIs REST",
        autor: "Ana Costa",
        description: "Crie APIs rápidas e eficientes com Node.js e Express.",
        price: 64.99,
        thumbnailURL: "https://cdn.simpleicons.org/nodedotjs/white"
    },
    {
        title: "Python para Automação",
        autor: "Pedro Lima",
        description: "Automatize tarefas e aumente sua produtividade com Python.",
        price: 54.99,
        thumbnailURL: "https://cdn.simpleicons.org/python/white"
    }
]

    return (
        <main className='cursos-main'>
            <div className='flex flex-col gap-[5px]'>
                <h1 className='text-4xl font-bold text-main'>Explore nossos Cursos</h1>
                <p className='text-sg text-xl'>Amplie seu conhecimento com nosso cursos especializados</p>
            </div>
            <div className='cursos-conteiner gap-[10px]'>
                {
                    Cursos.map((info, k) => (
                        <CardCurso
                            key={k}
                            title={info.title}
                            autor={info.autor}
                            price={info.price}
                            thumbnail={info.thumbnailURL}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Cursos