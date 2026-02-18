import type { Course } from "../hooks/type"

interface TGetAllCourseResponse {
    code: string,
    sucesso: boolean,
    data: Course[]
}

export async function APIGetAllCourse(): Promise<TGetAllCourseResponse> {
    try {
        const res = await fetch('http://localhost:5182/course/get/information', {
            method: "GET"
        })
        return await res.json() as TGetAllCourseResponse
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}