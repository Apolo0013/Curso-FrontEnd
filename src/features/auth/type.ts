//User e Admin
type Role = "USER" | "ADMIN"

//Usuario em si.
type User = {
    role: Role,
    Nome: string,
}

//Type
type CategoriaCurso = "Java" | "TypeScript" | "JavaScript" | "C#"

interface Aprensent { 
    titulo: string,
    descricao: string,
}

interface Aulas extends Aprensent {
    urlVideo: string
}

interface Curso extends Aprensent {
    urlThumbnail: string
    categoria: CategoriaCurso
    aulas: Aulas[]
}
