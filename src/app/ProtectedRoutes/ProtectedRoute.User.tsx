//Protecao para rotas, apenas "USER" pode entrar
import type React from "react"
import { useAuthStore } from "../../store/auth.store"
//Type
import type { Role } from "../../features/auth/services/service.type"
import { Navigate } from "react-router-dom"

function ProtectedRouteUSER({children}: {children: React.ReactNode}) {
    const Role: Role = useAuthStore((state) => state.user.role)
    if (Role == "GUEST") return <Navigate to='/auth/login' />
    return children
}

export default ProtectedRouteUSER