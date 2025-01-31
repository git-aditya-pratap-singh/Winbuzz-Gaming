import ApiService from '../../_service/api.service';
import BaseCtrlResponse from "../../utils/BaseCtrlResponse";

class Apiauth extends BaseCtrlResponse {

  registrationStudentSendOTP = async(formData) =>{
    try{
      const response = await new ApiService().post("/add-temp-student-verify", formData);
      this.handleResponse(response);
      return response;
    }catch(err){
      return this.handleResponse(err);
    }
  }

}

export default Apiauth;