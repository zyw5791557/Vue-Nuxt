export let timeHandle = function (UTC) {
    // UTC 换算成毫秒数
    const date = new Date().getTime() - new Date(UTC).getTime();
    // 毫秒数换算成 天, 时, 分, 秒。
    if(date) {
        let sec = date / 1000;
        if(sec < 60) {
            sec = Math.round(sec);
            return `${sec}秒前`;
        } else {
            let min = date / (1000 * 60);
            if(min < 60) {
                min = Math.round(min);
                return `${min}分钟前`;
            } else {
                let hour = date / (1000 * 60 * 60);
                if(hour < 24) {
                    hour = Math.round(hour);
                    return `${hour}小时前`;
                } else {
                    let day = date / (1000 * 60 * 60 * 24);
                    day = Math.round(day);
                    return `${day}天前`;
                }
            }
        }
    }
}

export let UTCParse = function(UTC) {
    // UTC 换算
    let month = new Date(UTC).getMonth() + 1;
    let day = new Date(UTC).getDate();
    if(month < 10) month = '0' + month;
    if(day < 10) day = '0' + day;
    return `${month}.${day}`;
}

export let UTCToSec = function(UTC) {
    // UTC 换算毫秒
    let time = new Date(UTC).getTime();
    return time;
}



export let ScrollTopEvents = function() {

}

ScrollTopEvents.prototype = {
    scrollTop(){
        return Math.max(
                //chrome
                document.body.scrollTop,
                //firefox/IE
                document.documentElement.scrollTop);
    },
    documentHeight(){
        //现代浏览器（IE9+和其他浏览器）和IE8的document.body.scrollHeight和document.documentElement.scrollHeight都可以
        return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    },
    windowHeight(){
        return (document.compatMode == "CSS1Compat")?
                document.documentElement.clientHeight:
                document.body.clientHeight;
    }
}