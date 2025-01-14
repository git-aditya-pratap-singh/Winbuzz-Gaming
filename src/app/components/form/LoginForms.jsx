import PropTypes from 'prop-types';
//import validateForm from "../../validation/validate";
import InputField from "../FormComponents/InputField";
//-------------ICON--------------------
import IconComponent from "../../../assets/icons/IconComponent";
//--------------CSS--------------------
import "../../../assets/css/componentcss/_loginForms.scss";

const LoginForms = ({forms, schema}) => {
  
//     const dispatch = useDispatch();
//     const [auth, setAuth] = useAuthGuard();
//     const navigate = useNavigate();

//     const handleValidate = (form, schema)=>{
//         const errors = validateForm(form, schema)                            
//         if(errors != {}) return Object.entries(errors)[0]; 
//         return;
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target)
//         const objFormData = Object.fromEntries(formData);
//         const haveErrors = handleValidate(objFormData, schema);
//         if (haveErrors) return toast.error(Object.values(haveErrors)[1]);
//         //---API calling
//         const apiResponse = await new Apiauth().login(objFormData);
//         if (apiResponse.status) {
//             storeTokenInStorage(apiResponse.data);
//             setAuth({
//                 ...auth,
//                 user: apiResponse.data.UserInfo,
//                 token: apiResponse.data.token,
//             });
//             dispatch(login_popup(false));
//             navigate("/dashboard/home");
//         }
// };

return (
    <>
      <section className="_loginContainer">
        <div className='loginSubContainer'>
          <label>LOTUS<span>365</span></label>
          <form className="_form">
            <h2>LOGIN <span><IconComponent iconType="loginHand"/></span> </h2>
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
            <button><IconComponent iconType="loginIcon"/>Login</button>
            <button><IconComponent iconType="loginIcon"/>Login with Demo ID</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForms;
