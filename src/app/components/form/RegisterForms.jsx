import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login_popup } from "../../redux/slices/stateSlice";
//-----------------ICON and Components-------------
import InputField from "../FormComponents/InputField";
import IconComponent from "../../../assets/icons/IconComponent";
//--------------LOGO and SCSS--------------
import logo from "../../../assets/img/logo.png";
import "../../../assets/scss/registration.scss";

const RegisterForms = ({ forms }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const func = () => {
        navigate("../");
        dispatch(login_popup(true))
    }
    return (
        <section className="registrationConatiner">
            <div className="registrationsSubcontainer">
                <img src={logo} alt="Error" width={150} height={150} />
                {forms.map((items, index) => {
                    return (
                        <InputField
                            key={index}
                            type={items.type}
                            name={items.name}
                            placeholder={items.placeholder}
                            autoComplete={items.autoComplete}
                            icon={items.icon}
                        />
                    )
                })}
                <small>By continuing you will receive a one-time verification code to your phone number by SMS.</small>
                <button>GET OTP</button>

                <div className="whatsapp_ids_section">
                    <span>OR</span>
                    <h4>Get your ready-made ID from whatsapp</h4>
                </div>

                <a className="_whatsappLink" target="_blank" href="https://api.whatsapp.com/send?phone=918103817644">
                    <span><IconComponent iconType="whatsappIcon" iconSize={23} /></span>
                    <label>WHATSAPP NOW</label>
                </a>

                <div className="_loginInfo" onClick={func}>
                    <span>Already have account?</span>
                    <label>Login</label>
                </div>

                <div className="rowBonus">
                    <div className="bonuscol">
                        <span>400% Bonus</span>
                        <small>1st Deposit</small>
                    </div>
                    <div className="bonuscol">
                        <span>50% Bonus</span>
                        <small>2nd Deposit</small>
                    </div>
                    <div className="bonuscol">
                        <span>10% Bonus</span>
                        <small>Every Deposit</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RegisterForms;