import type {
    ParamCompletedClass,
    ParamGetCourseCompleted,
    ParamGetClassProgress,
    ResponseGetCourseCompleted,
    ResponseCompletedClass,
    ResponseGetProgress
} from "./service.type"

//Essa requisicao pegar as aulas ja completa
export async function APIGetClassProgress({idCourse, idUser}: ParamGetClassProgress): Promise<ResponseGetProgress> {
    try {
        const res = await fetch(`http://localhost:5182/course/get/class/progress?idCourse=${idCourse}&idUser=${idUser}`, {
            method: "GET"
        })
        return await res.json() as ResponseGetProgress
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}

export async function APIGetCourseCompleted({idUser}: ParamGetCourseCompleted): Promise<ResponseGetCourseCompleted> {
    try {
        const res = await fetch(`http://localhost:5182/course/get/course/completed?idUser=${idUser}`, {
            method: "GET"
        })
        return await res.json() as ResponseGetCourseCompleted
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}


//Essa requisicao vai add o ja "concluido" na aula
export async function APICompletedClass(body: ParamCompletedClass): Promise<ResponseCompletedClass> {
    try {
        const res = await fetch("http://localhost:5182/course/completedclasse   ", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        return await res.json() as ResponseCompletedClass
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}