import axios from 'axios'
const base = 'http://bi-components.com/';

const createClientUrl = '/clients.php';
export function createClient(params) {
    return axios.post(base + createClientUrl, params);
}