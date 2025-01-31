import axios from "axios";
import environmentURL from "../_environments/environments";

class ApiService {

    constructor() {
        this.api = () => axios.create({
            baseURL: environmentURL.apiUrl,
            headers: {
                'Accept': 'application/json, multipart/form-data',
            },
        });
    }
    async request(method, url, data = null, params = null) {
        try {
            const response = await this.api().request({
                method,
                url,
                data,
                params,
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
    async get(url, params = null) {
        return this.request('GET', url, null, params);
    }
    async post(url, data) {
        return this.request('POST', url, data, null);
    }
    handleError(error) {
        console.error('API Error:', error);
        throw error; 
    }
}

export default ApiService;