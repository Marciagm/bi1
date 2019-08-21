import axios from 'axios'
import qs from 'qs'
const base = 'http://bi-components.com/';

const createClientUrl = '/clients.php';
export function createClient(params) {
    const url = base + createClientUrl;
    return axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(params),
        url,
    })
    //return axios.post(base + createClientUrl, params);
}