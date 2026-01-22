//Protecao das rotas, apenas "GUEST" pode acessa
import type React from "react"
import { useAuthStore } from "../../store/auth.store"
//type
import type { Role } from "../../features/auth/services/service.type"

function ProtectedRouteGuest({ children }: { children: React.ReactNode }) {
    const Role: Role = useAuthStore((state) => state.user.role)
    if (Role == "USER") return <h1>SOMENTE GUEST</h1>
    return children
}

export default ProtectedRouteGuest