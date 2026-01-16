//type
import type {
    TRegistrarParam,
    TRegistrarResponse,
    TLoginParam,
    TLoginResponse
} from './service.type'

export async function APILogin(data: TLoginParam): Promise<TLoginResponse> {
    try {
        const res = await fetch('http://localhost:5182/auth/Login', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await res.json() as TLoginResponse
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}

export async function APIRegistrar(data: TRegistrarParam): Promise<TRegistrarResponse> {
    try {
        const res = await fetch("http://localhost:5182/auth/Registrar", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        //return await res.text()
        return await res.json() as TRegistrarResponse
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}


export async function APIValideEmail(email: string) {
    try {
        const res = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email})
        })
        console.log(await res.text())
    }
    catch (error) {
        console.log(error)
    }
}