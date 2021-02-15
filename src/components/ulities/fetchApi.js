import axios from "axios";
import baseUrl from '../configs/ApiUrl'


const apiFetch = async () => {
  try {
   
   let  apiValue = await axios.get(baseUrl+'comments');
    return apiValue;
  } catch (error) {
    return error;
  }
};
export default apiFetch;