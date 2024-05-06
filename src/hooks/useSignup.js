import React,{ useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const useSignup = () => {
    const {login} = useAuth();
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(null);

    const registerUser = async (values) => {
        if(values.password !== values.passwordConfirm){
            setError("Passwords do not match");
            return;
        }

        try {
            setError(null);
            setLoading(true);
            const res = await fetch("http://localhost:3000/signup",{
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
            if(res.status === 201){
                message.success("Account created successfully");
                login(data.token,data.user);
            }else if(res.status === 400){
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

    return { loading, error, registerUser};
};

export default useSignup;