import type {
    ParamGetContent,
    ResponseGetContent,
    ParamGetCourseByID,
    ResponseGetCourseByID
} from './service.types'

export async function APIGetContent({idUser}: ParamGetContent): Promise<ResponseGetContent> {
    try {
        const res = await fetch('http://localhost:5182/course/get/content?idUser=' + idUser, {
            method: "GET"
        })
        return await res.json() as ResponseGetContent
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}

export async function APIGetCourseByID({ idCourse }: ParamGetCourseByID): Promise<ResponseGetCourseByID> {
    try {
        const res = await fetch('http://localhost:5182/course/byid/' + idCourse, {
            method: "GET"
        })
        return await res.json() as ResponseGetCourseByID
    }   
    catch (error) {
        console.log(error)
        throw(error)
    }
}