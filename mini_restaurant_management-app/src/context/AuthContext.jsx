import { createContext,useState, useEffect } from "react";
export const AuthContext =createContext();
export const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const [role,setRole]=useState("");
    useEffect(()=>{
        const auth=JSON.parse(localStorage.getItem("auth"));
        if(auth){
            setIsAuth(auth.isAuth);
            setRole(auth.role);
        }
    },[]);

    const login=(email,password)=>{
        if(email ==="admin@gmail.com" && password === "admin1234"){
            setIsAuth(true)
            setRole("admin")
            localStorage.setItem("auth",JSON.stringify({isAuth:true,role:"admin"}));
            return "admin";
        }
        if(email==="customer@gmail.com" && password === "customer1234"){
            setIsAuth(true)
            setRole("customer")
            localStorage.setItem("auth",JSON.stringify({isAuth:true,role:"customer"}));
            return "customer";
        }

        alert("Incorrect email/password");
        return null;
    };

    const logout=()=>{
        setIsAuth(false);
        setRole("");
        localStorage.removeItem("auth");
    };

    return(
        <AuthContext.Provider value={{isAuth,role,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};