import axios from 'axios';

const localURL = 'http://localhost:3000';
const baseUrl  = 'https://api.readhub.me/';

let initParams = function(params) {
    var str = '';
    for(let k in params) {
        str += k + '=' + params[k] + '&';
    }
    str = str.replace(/&$/,'');
    return str;
}


let getAPI = {
    sponsors() {
        return axios.get( localURL + '/mock/Sponsors.json');
    },
    topicData(params) {
        var p = initParams(params) || 'lastCursor=&pageSize=10';
        return axios.get( baseUrl + `topic?${p}`);
    },
    instantView(id) {
        return axios.get( baseUrl + `topic/instantview?topicId=${id}`);
    }
}

export default getAPI;