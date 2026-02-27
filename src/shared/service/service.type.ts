import type { Course } from "../../features/cursos/hooks/logic/type"

export type ParamGetAllCoursesPurchased = {
    idUser: string
}

type UserCourses = {
    idUser: string,
    idCourse: string,
    purchasedAt: string
}

export type ResponseGetAllCoursesPurchased = {
    sucesso: boolean,
    data: UserCourses[],
    code: string
}

//GetAllCourses
export type ResponseGetAllCourses = {
    sucesso: boolean,
    code: string,
    data: Course[]
}