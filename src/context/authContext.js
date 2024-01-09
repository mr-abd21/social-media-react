import React, { useEffect, useState, createContext } from "react";

 
export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

    const login = () => {
        // something here
        setCurrentUser({
            id : 1,
            name : "Maaz Ali",
            profilePic : "https://static.vecteezy.com/system/resources/thumbnails/022/716/824/small/cute-cool-boy-dabbing-pose-cartoon-icon-illustration-people-fashion-icon-concept-isolated-generat-ai-free-photo.jpg",
        })
    }
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser]);

    return(
        <>
            <AuthContext.Provider value={{currentUser, login}}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
