import {createContext, useContext} from "react";

export const AuthContext = createContext({
    user: undefined,
    isLoading:false,
    setuser:() =>{},
});

export const useAuthContext =() =>useContext(AuthContext);