import LoginForms from "../../components/form/LoginForms"
import loginStructure from "../../validation/FormStructure/loginStructure";

const Login = () => {
    return(
        <LoginForms forms={loginStructure}/>
    )}
export default Login;