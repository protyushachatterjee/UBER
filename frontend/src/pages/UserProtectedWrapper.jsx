import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const{user,setUser}=useContext(userDataContext);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(token);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    // verify the token
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data);
                setIsLoading(false);
            }
        }).catch((error) => {
            res.status(401).json({ massage: error.message });
            localStorage.removeItem("token");
            navigate("/login");
        });


    if(isLoading){
        return <div className="bg-black h-screen w-screen text-white flex justify-center items-center text-5xl font-semibold">Loading...</div>
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
