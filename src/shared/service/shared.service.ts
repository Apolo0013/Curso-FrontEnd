import type {
    ParamGetAllCoursesPurchased,
    ResponseGetAllCourses,
    ResponseGetAllCoursesPurchased,
} from "./service.type";

//Pegar todos os cursos compradoss
export async function APIGetAllCoursesPurchased({idUser}: ParamGetAllCoursesPurchased): Promise<ResponseGetAllCoursesPurchased> {
    try {
        const res = await fetch(`http://localhost:5182/course/users/get?idUser=${idUser}`, {
            method: "GET"
        })
        return await res.json() as ResponseGetAllCoursesPurchased
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}

//Pegar todos os curso que existi
export async function APIGetAllCourses(): Promise<ResponseGetAllCourses> {
    try {
        const res = await fetch("http://localhost:5182/course/get/information", {
            method: "GET"
        })
        return await res.json() as ResponseGetAllCourses
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}