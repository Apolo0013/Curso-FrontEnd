// APIGetClassProgress
export type ParamGetClassProgress = {
    idCourse: string,
    idUser: string
}

export type ClassesProgres = {
    id: string,
    idClass: string,
    idCourse: string,
    idModule: string,
    idUser: string
    position: number
}

export type ResponseGetProgress = {
    sucesso: boolean,
    code: string,
    data: ClassesProgres[]
}

// APICompletedClass
export type ParamCompletedClass = {
    idCourse: string,
    idModule: string,
    idClass: string,
    idUser: string
}

//
export type ResponseCompletedClass = {}

// APIGetCourseProgress
export type ParamGetCourseCompleted = { idUser: string }
type CourseCompleted = {
    id: string,
    idUser: string,
    idCourse: string
}
export type ResponseGetCourseCompleted = {
    sucesso: boolean,
    code: string,
    data: CourseCompleted[]
}