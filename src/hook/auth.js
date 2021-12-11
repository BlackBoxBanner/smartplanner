import {createContext, useContext, useState} from "react";
import {AuthService} from "@src/service/AuthService";

const authContext = createContext();

export default function UseAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const loginWithGoogle = async () => {
        const {error, user} = await AuthService.loginWithGoogle();
        setUser(user ?? null);
        setError(error ?? "");
    };

    const logout = async () => {
        await AuthService.logout();
        setUser(null);
    };

    const createUser = async () => {
        const {error, user} = await AuthService.createUser();
        setUser(user ?? null);
        setError(error ?? "");
    }

    const value = {user, error, loginWithGoogle, createUser, logout, setUser};

    return <authContext.Provider value={value} {...props} />;
}