import axios from 'axios'
import qs from 'qs'

const createClientUrl = '/clients.php';
export function createClient(params) {
    const url = createClientUrl;
    return axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(params),
        url,
    })
    //return axios.post(base + createClientUrl, params);
}