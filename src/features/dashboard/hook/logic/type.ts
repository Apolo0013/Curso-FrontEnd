import type { ClassesProgres } from "../../../aprendizado/services/service.type"

export type ParamCurrentClass = {
    ClasseProgress: ClassesProgres[] | null,
    idCourse: string
}

export type ReturnCurrentClass = {
    NumberClass: string,
    NameClass: string
}
