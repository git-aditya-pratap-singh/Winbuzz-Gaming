import logo from "../../../assets/img/logo.png";
import IconComponent from "../../../assets/icons/IconComponent";
import {forget_popup} from "../../redux/slices/stateSlice";
import { useDispatch } from "react-redux";

import "../../../assets/css/componentcss/forget.scss"

const Forgetpswd = ()=>{
    const dispatch = useDispatch();
    
    return(
        <>
        <secton className="forgetContainer">
            <div className="forgetSubcontainer">
                <span onClick={()=>dispatch(forget_popup(false))}><IconComponent iconType="crossIcon"/></span>
                <img src={logo} alt="Error" width={150} height={150}/>
                <form>
                    <input type="number" placeholder="Phone no."/>
                    <button>GET OTP</button>
                </form>
            </div>
        </secton>
        </>
    )
}
export default Forgetpswd;