import  React, {createContext,useContext,useState,useEffect}  from "react";
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const storedData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        if (storedData) {
            const { token, userData } = storedData;

            setToken(token);
            setUserData(userData);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (newToken, newData) => {
        localStorage.setItem("userData", JSON.stringify({ token: newToken, userData: newData }));
        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem("userData");
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ token, userData, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);