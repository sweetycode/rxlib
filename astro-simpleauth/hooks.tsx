import { useEffect, useState } from "preact/hooks";

// TODO
export function useAuth() {
    const [user, setUser] = useState(null);
    useEffect(() => {
    }, [])
    return { user: true };
}