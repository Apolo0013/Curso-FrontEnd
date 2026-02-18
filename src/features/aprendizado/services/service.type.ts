export type ParamGetProgress = {
    idCourse: string,
    idUser: string
}

export type ClassesProgres = {
    id: string,
    idClass: string,
    idCourse: string,
    idModule: string,
    idUser: string
}

export type ResponseGetProgress = {
    sucesso: boolean,
    code: string,
    data: ClassesProgres[]
}

//CompletedCourse
export type ParamCompletedClass = {
    idCourse: string,
    idModule: string,
    idClass: string,
    idUser: string
}

export type ResponseCompletedClass = {}