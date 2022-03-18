import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
// import { authReducer } from "../reducer/auth-reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    // const [authState, authDispatch] = useReducer(authReducer, null)
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signUp = (user) => {
        try {
            const response = axios.post("/api/auth/signup", user);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return { signUp };
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
