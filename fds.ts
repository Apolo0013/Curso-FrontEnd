export async function ValideEmail(email: string) {
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

ValideEmail('apolonio')