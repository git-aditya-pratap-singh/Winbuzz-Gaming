import { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthGuard = ({ children }) => {
    const [auth, setAuth] = useState()

    useEffect(() => {
        const data = localStorage.getItem('loginID');
        if(data){
            const parseData = JSON.parse(data)
            setAuth(parseData) 
        }
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

AuthGuard.propTypes = {
    children: PropTypes.node.isRequired
};
const useAuthGuard = () => {
    return useContext(AuthContext);
};

export default AuthGuard; 
export {useAuthGuard};