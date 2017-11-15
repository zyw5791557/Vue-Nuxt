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
                    let day = date % (1000 * 60 * 60 * 24);
                    day = Math.round(day);
                    return `${day}天前`;
                }
            }
        }
    }
}

