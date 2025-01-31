import changePswdStructure from "../../validation/FormStructure/changepswd";
import InputField from "../FormComponents/InputField";
//----------------SCSS-------------------
import "../../../assets/scss/changepswd.scss";

const ChangePassword = ()=>{
    return(
        <section className="changeConatiner">
            <div className="PasswordContainer">
                <label>Change Password</label>
                 {
                    changePswdStructure.map((items,index)=>{
                        return(
                            <InputField
                                key={index}
                                type={items.type}
                                name={items.name}
                                placeholder={items.placeholder}
                                autoComplete={items.autoComplete}
                                icon={items.icon}
                            />
                        )
                    })
                }
                <button>Save</button>
            </div>
        </section>
    )
}
export default ChangePassword;