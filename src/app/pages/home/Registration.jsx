import RegisterForms from "../../components/form/RegisterForms";
import registraonStruct from "../../validation/FormStructure/registrationStruct";

const Registration = () => {
    return(
        <RegisterForms forms={registraonStruct}/>
    )}
export default Registration;