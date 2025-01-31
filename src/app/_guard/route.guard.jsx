import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import {login_popup} from "../redux/slices/stateSlice"

const  IsloginGuard = ({ children }) => {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem('loginID');
  const token = userToken ? userToken : null;
  // if the user has not token then automatically redirect to Home page.
  if (!token) {
    dispatch(login_popup(true));
    return <Navigate to="/" />;  
  }
  return children;
};



const ProctedRouteGuard = ({ children }) =>{
  const isUserToken = localStorage.getItem('loginID');
  const isToken = isUserToken ? isUserToken : null;
  // if the user has token then automatically redirect to dashboard.
  if(isToken){
    return <Navigate to="/" />;   
  }
  return children;
}

ProctedRouteGuard.propTypes = {
  children: PropTypes.node.isRequired
};

IsloginGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export { ProctedRouteGuard, IsloginGuard};