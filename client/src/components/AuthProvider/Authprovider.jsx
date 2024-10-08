import React, { useEffect, useState } from 'react'
import { getToken } from '../../helpers';

import {AuthContext} from "../../context/AuthContext";
import { message } from "antd";
import { API, BEARER } from "../../constants";


const Authprovider = ({children}) => {

    const [userData, setUserData] =useState();
    const [isLoading, setIsLoading] =useState(false);

    const authToken = getToken();
    const fetchLoggedInUser = async (token) =>{
        setIsLoading(true);
        try{
            const response = await fetch(`${API}/users/me`,{
                headers:{Authorization:`${BEARER} ${token}`},
            });
            const data = await response.json();
            
            setUserData(data);
        }catch(error){
            console.error(error);
            message.error("Error while getting logged in ")
           }finally{
            setIsLoading(false);
           }
        };
        const handleUser = (user) =>{
            setUserData(user);
        };
        useEffect(()=>{
            if(authToken){
                fetchLoggedInUser(authToken);
            }
        }, [authToken]);
  return (
   <AuthContext.Provider value={{user:userData, setUser: handleUser,isLoading}}>
    {children}
   </AuthContext.Provider>
  );
    };


export default Authprovider;
