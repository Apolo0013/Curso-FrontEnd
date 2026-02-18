import type { Classes, CourseContent } from "../../dashboard/services/service.types"

export type ParamIsAvaliable = {
    idCourse: string,
    idUser: string,
    idClass: string
}

export type ParamGetContentPlayer = {
    data: CourseContent[],
    idClass: string
}
export type ContentInfoList = {classes: Classes[], idModule: string}[]
export type ContentInfo = {classes: Classes | null, idModule: string}