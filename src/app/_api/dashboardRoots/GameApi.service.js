import ApiService from '../../_services/api.service';
import BaseCtrlResponse from "../../utils/BaseCtrlResponse";

class GameApi extends BaseCtrlResponse {

  gameApiCall = async(eventTypeId) =>{
    try{
      const response = await new ApiService().get(`exchange/open/group/sportsbook/${eventTypeId?.id}`);
      return response;
    }catch(err){ 
      return this.handleResponse(err);
    }
  }

  gameHomeApiCall = async() =>{
    try{
      const [response1, response2, response3] = await Promise.all([
        new ApiService().get('exchange/open/group/sportsbook/4'),
        new ApiService().get('exchange/open/group/sportsbook/1'),
        new ApiService().get('exchange/open/group/sportsbook/2')
    ]);
      return  { response1, response2, response3 }
    }catch(err){
      return this.handleResponse(err);
    }
  }

}

export default GameApi;