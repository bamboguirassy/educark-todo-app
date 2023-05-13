import axios from "axios";

class TodoService {

    static prefix = "https://jsonplaceholder.typicode.com";
     
    static findAll() {
        return axios.get(`${TodoService.prefix}/todos`);
    }
    static findById(id) {
        return axios.get(`${TodoService.prefix}/todos/${id}`);
    }

}


export default TodoService;