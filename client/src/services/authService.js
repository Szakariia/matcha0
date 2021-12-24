import axios from "axios";

class AuthService {
  login(inputValue) {
    console.log("We Are in Services");
    return axios
      .post(process.env.REACT_APP_API_URL + "login", inputValue)
      .then((res) => {
        console.log("this the data :", res);
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }
  register(inputValue) {
    axios.post(process.env.REACT_APP_API_URL + "register", inputValue);
  }
  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
