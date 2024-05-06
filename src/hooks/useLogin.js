import React,{ useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { message } from "antd"; // Importar message desde Ant Design


const useLogin = () => {
    const {login} = useAuth();
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(null);

    const loginUser = async (values) => {
        // if(values.password !== values.passwordConfirm){
        //     setError("Passwords do not match");
        //     return;
        // }

        console.log(values);

        try {
            setError(null);
            setLoading(true);
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password
                })
            });

            const data = await res.json();
            console.log(data);

            if(res.status === 200){
                message.success("Login successfully");
                login(data.token,data.user);
            }else if(res.status === 404){
                setError(data.message);
            }else{
                setError("An error occurred. Please try again later");
            }

        } catch (error) {
            message.error(error);
        }finally{
            setLoading(false);
        }
    }

    return { loading, error, loginUser};
};

export default useLogin;