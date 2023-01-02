import axios from 'axios';

axios.defaults.baseURL = "https://login-hoy.run.goorm.io/api/account";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create();

export const login_axios = (username, password) => {
  const data = {"loginId" : username, "loginPassword" : password}
  try {
      axiosInstance.post("/login",data).then(res => {
        console.log(res)
    })
  } catch (error) {
    console.error(error);
  }
}

export default login_axios