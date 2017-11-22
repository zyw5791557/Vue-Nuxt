import axios from 'axios';

const localURL = 'http://localhost:8888';
// const localURL = 'http://readhub.emlice.top';
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
    // 热门话题
    topicData(params) {
        var p = initParams(params) || 'lastCursor=&pageSize=10';
        return axios.get( baseUrl + `topic?${p}`);
    },
    // 科技动态
    newsData(params) {
        var p = initParams(params) || 'lastCursor=&pageSize=10';
        return axios.get( baseUrl + `news?${p}`);
    },
    // 开发者资讯
    techsData(params) {
        var p = initParams(params) || 'lastCursor=&pageSize=10';
        return axios.get( baseUrl + `technews?${p}`);
    },
    instantView(id) {
        return axios.get( baseUrl + `topic/instantview?topicId=${id}`);
    },
    topicCheckCount(order) {
        return axios.get( baseUrl + `topic/newCount?latestCursor=${order}`);
    },
    topicDetail(id) {
        return axios.get( baseUrl + `topic/${id}`);
    }
}

export default getAPI;