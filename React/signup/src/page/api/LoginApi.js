import axios from 'axios';

axios.defaults.baseURL = "https://login-hoy.run.goorm.io/api/account/login";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create();

export const login_axios = (username, password) => {
  const data = {username : username, password : password}
  try {
    axiosInstance.post("/login",JSON.stringify(data)).then(res => {
      console.log(res)
    })
  } catch (error) {
    console.error(error);
  }
}