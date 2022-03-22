import axios from 'axios';

class BaseService {

    constructor(route) {
        this.route = route
    }

    create(data) {
        return axios.post(`${this.route}/`, data)
    }

    get(id) {
        return axios.get(`${this.route}/${id}`)
    }

    getAll() {
        return axios.get(`${this.route}/`)
    }

}
