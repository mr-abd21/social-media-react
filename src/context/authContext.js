import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Abdullah",
      profilePic:
        "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-1/402489097_1686444235185531_4527326329056055256_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJIok75Re6o8RqIlN8BVLcsFB6iqJ86FSwUHqKonzoVImfn_xNTsSDd2K8A-n5VeLiGd4N2TV5zL3SwF6GFZce&_nc_ohc=S9bFdGtOTQoQ7kNvgE_8czA&_nc_ht=scontent.fisb17-1.fna&oh=00_AYCSO_1W5Y6nfuywp8YEle3kFMeUVVyLNOHfZh1cZLNpEQ&oe=665922BD",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};




// // import axios from "axios";
// import React, { useEffect, useState, createContext } from "react";

 
// export const AuthContext = createContext();

// export const AuthContextProvider = ({children})=>{
//     const [currentUser, setCurrentUser] = useState(
//         JSON.parse(localStorage.getItem("user")) || null
//         );

//     // const login = async (inputs) => {
//     //     const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
//     //         withCredentials: true,
//     //     })
        
//     //     setCurrentUser(res.data)    
//     // }
    
    
//     useEffect(()=>{
//         localStorage.setItem("user", JSON.stringify(currentUser))
//     },[currentUser]);

//     return(
//         <>
//             <AuthContext.Provider value={{currentUser, login}}>
//                 {children}
//             </AuthContext.Provider>
//         </>
//     );
// }
