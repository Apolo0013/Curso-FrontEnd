//Rota apenas para admitrador
import type React from "react"
import { useAuthStore } from "../../store/auth.store"
//type
import type { Role } from "../../features/auth/services/service.type"

function ProtectedRouteAdmin({ children }: { children: React.ReactNode }) {
    const Role: Role = useAuthStore((state) => state.user.role)
    if (Role != 'ADMIN') return <h1>Somente ADMIN</h1>
    return children
}

export default ProtectedRouteAdmin