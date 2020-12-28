import apiUrl from "../utils/apiUrl.js";
import axios from "axios";

class UserService {
    async getUsers() {
        try {
            const response = await axios.get(`${apiUrl}users`);
            const {data} = response;
            const {rows} = data;
            return rows;
        } catch (error) {
            return error;
        }
    }
    async create(user){
        try{
            const responses = await axios.post(`${apiUrl}users`,user);
            return responses;
        }catch(error){
            return error;
        }
    }
}

export default new UserService();