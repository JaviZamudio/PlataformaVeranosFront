"use client"

import { createContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface AuthContextProps {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    token: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: any) => {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            if (pathname === '/admin/login') {
                router.push('/admin');
            }
            if (token === null) {
                // fetch('/api/admin/login?token=' + storedToken, {
                //     method: 'GET'
                // }).then(async (res) => {
                //     const resBody = await res.json();
                //     setToken(storedToken);
                // }).catch((err) => {
                //     console.log("Invalid token, logging out . . .");
                //     localStorage.removeItem('token');
                //     router.push('/admin/login');
                // });
                setToken(storedToken);
            }
        } else {
            router.push('/admin/login');
        }
    }, [token, pathname]);

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        router.push('/admin/login');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
