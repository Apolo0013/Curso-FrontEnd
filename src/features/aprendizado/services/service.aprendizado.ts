import type { ParamCompletedClass, ParamGetProgress, ResponseCompletedClass, ResponseGetProgress } from "./service.type"

export async function APIGetProgress({idCourse, idUser}: ParamGetProgress): Promise<ResponseGetProgress> {
    try {
        const res = await fetch(`http://localhost:5182/course/get/progress?idCourse=${idCourse}&idUser=${idUser}`, {
            method: "GET"
        })
        return await res.json() as ResponseGetProgress
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}


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