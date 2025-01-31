import logo from "../../../assets/img/logo.png";
import InputField from "../FormComponents/InputField";
import { login_popup, forget_popup } from "../../redux/slices/stateSlice";
//-------------ICON--------------------
import IconComponent from "../../../assets/icons/IconComponent";
//--------------CSS--------------------
import "../../../assets/css/componentcss/_loginForms.scss";
import { useDispatch } from "react-redux";

const LoginForms = ({forms}) => {

  const dispatch = useDispatch();
  const funcTy = ()=>{
    dispatch(forget_popup(true))
    dispatch(login_popup(false))
  }

  const loginWithDemoID = ()=>{
    localStorage.setItem('loginID',true)
  }

return (
    <>
      <section className="_loginContainer">
        <div className='loginSubContainer'>
             <span onClick={()=>dispatch(login_popup(false))}><IconComponent iconType="crossIcon"/></span>
              <form className="_form">
              <img src={logo} alt="Error" width={150} height={150}/>
            {forms.map((items, index)=>{
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
            })}
            <button>LOGIN</button>
            <button onClick={loginWithDemoID}>LOGIN WITH DEMO ID</button>
            <button className="apk">Download APK <IconComponent iconType="androidIcon" iconSize={20}/></button>
            <button className="underline text-slate-800" onClick={funcTy}>Forgot Password?</button>
            <a href="mailto:win4betofficial@gmail.com">win4betofficial@gmail.com</a>
          </form>
          </div>
      </section>
    </>
  );
};

export default LoginForms;
