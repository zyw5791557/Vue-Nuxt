import axios from 'axios';

const localURL = 'http://localhost:3000';
const baseUrl  = 'https://api.readhub.me';

let getAPI = {
    sponsors() {
        return axios.get( localURL + '/mock/Sponsors.json');
    }
}

export default getAPI;