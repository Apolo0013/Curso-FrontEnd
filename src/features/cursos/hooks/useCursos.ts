import type { Course } from "./type";

function useCursos() {
    function GetByID(data: Course[] | undefined, id: string) {
        if (!data || !id) return undefined
        const course: Course | undefined = data.find(info => info.id == id)
        return course
    }
    return {
        GetByID
    }
}

export default useCursos