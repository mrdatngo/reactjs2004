import axios from "axios";

function login(data) { // data = { username: "...", password: "..."}
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
}

export { login }