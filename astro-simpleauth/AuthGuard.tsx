import type { ComponentChildren } from "preact";
import { useAuth } from "./hooks";

export default function AuthGuard({ children }: { children: ComponentChildren }) {
    const { user } = useAuth();
    if (!user) {
        return <div>Login</div>;
    }
    return children;
}