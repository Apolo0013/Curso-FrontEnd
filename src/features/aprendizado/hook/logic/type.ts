import type { Classes, CourseContent } from "../../../dashboard/services/service.types"
import type { ClassesProgres } from "../../services/service.type"

export type ParamIsAvaliable = {
    idCourse: string,
    idUser: string,
    idClass: string
}

export type ParamGetContentPlayer = {
    data: CourseContent[],
    idClass: string
}
//usePlayer
export type ContentInfoList = {classes: Classes[], idModule: string}[]
export type ContentInfo = { classes: Classes | null, idModule: string }

//Parametro ThisClassCompleted
export type ParamThisClassCompleted = {
    idClass: string,
    idCourse: string | undefined,
    ClasseProgress: ClassesProgres[] | null
}
