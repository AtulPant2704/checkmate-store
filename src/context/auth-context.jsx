import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/auth-reducer";
import { getAddressService } from "../services";

const initialState = {
  user: "",
  token: "",
  addresses: []
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const checkUser = async () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const response = token ? await getAddressService(token) : [];
    authDispatch({ type: "CHECK_USER", payload: { user, token, addresses: response?.data?.address || [] } });
  };

  useEffect(() => checkUser(), []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
