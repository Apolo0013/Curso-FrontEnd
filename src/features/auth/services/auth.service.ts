//type
import type {
    TRegistrarParam,
    TLoginParam,
    TMeResponse,
    TCodeResponse
} from './service.type'

export async function APILogin(data: TLoginParam): Promise<TCodeResponse> {
    try {
        const res = await fetch('http://localhost:3333/auth/login', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await res.json() as TCodeResponse
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}

export async function APIRegistrar(data: TRegistrarParam): Promise<TCodeResponse> {
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
        return await res.json() as TCodeResponse
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}


export async function APIMe(): Promise<TMeResponse>  {
    try {
        const res = await fetch("http://localhost:5182/auth/Me", {
            method: "GET",
            credentials: "include"  
        })
        return {
            response: await res.json(),
            resquestSucesso: res.status == 200
        }
    }
    catch (error) {
        console.log(error)
        throw(error)
    }
}


//Essa rota, ele vai retorna se o email é valido ou nao
// Email deve existi
// Email nao deve esta em uso.
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