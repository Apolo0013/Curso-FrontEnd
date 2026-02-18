import type { Course } from "../../cursos/hooks/type"

//API Get Content
export type ParamGetContent = {
    idUser: string
}

//Course Conteudo
//Aulas do modulos
export type Classes = {
    idClass: string,
    title: string,
    description: string,    
    durationInSeconds: number,
    order: number,
    video: string
}
//Modulos
type Module = {
    idModule: string
    title: string,
    description: string,
    order: number,
    classes: Classes[]
}

export type CourseContent = {
    idCourse: string,
    modules: Module[]
}

export type ResponseGetContent = {
    code: string,
    sucesso: boolean,
    data: CourseContent[] | null
}

//================================================================
//Get Course By ID
export type ParamGetCourseByID = {
    idCourse: string
}

export type ResponseGetCourseByID = {
    code: string,
    sucesso: string,
    data: Course | null
}
