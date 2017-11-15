<template>
    <div class="content">
        <div class="globalMessage hide"></div>
        <div>
            <div>
                <!-- itemList start -->
                <div id="itemList">
                    <div class="topicItem" v-for="(item, index) in topicsData" :key="index" @click="addSelectClass(index)">
                        <h2 class="topicTitle" :class="{ first: index === 0 }">
                            <span class="content">{{ item.title }}</span>
                            <span class="time">{{ item.publishDate | titleFilter }}</span>
                        </h2>
                        <div class="summary summaryHidden">
                            <div class="bp-pure">
                                <div class="bp-beauty-line collapse" :ref="`topicCollapse${index}`">{{ item.summary }}</div>
                            </div>
                        </div>
                        <div class="ReactCollapse-collapse">
                            <div class="ReactCollapse-content">
                                <div class="itemMain">
                                    <div>
                                        <div class="articleItem" :class="{ first: idx === 0 }" v-for="(itm,idx) in item.newsArray">
                                            <a class="articleTitle enableVisited" :href="itm.url" target="_blank">
                                            {{ itm.title }}
                                            </a>
                                            <div class="meta">
                                                <span>
                                                    <a class="" target="_blank" :href="itm.url">{{ itm.siteName }}</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="topicMeta">
                                            <a class="topicLink" href="/topic/2QjZ624ZWfu" target="_blank">
                                                查看话题
                                                <span></span>
                                            </a>
                                        </div>
                                        <p class="fix"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- itemList end -->
                <div class="listButtonFix">
                    <div class="loading">
                        <img src="~/assets/images/loading.gif" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { timeHandle } from '~/util/util.js';
export default {
    data() {
        return {
            topicsData: [
                {
                    id: "4stgd9wkjkK",
                    newsArray: [
                        {
                            "id": 18226675,
                            "url": "http://tech.163.com/17/1115/15/D39S2JH300097U7R.html",
                            "title": "网易云音乐与KKBOX合作，同时宣布用户数破4亿",
                            "groupId": 1,
                            "siteName": "网易科技",
                            "siteSlug": "site_wangyi",
                            "mobileUrl": "http://3g.163.com/tech/17/1115/15/D39S2JH300097U7R.html",
                            "authorName": "王凤枝",
                            "duplicateId": 1,
                            "publishDate": "2017-11-15T07:00:59.000Z"
                        }
                    ],
                    order: "25085",
                    title: "脉脉完成C轮7500万美元融资 光源资本担任独家财务顾问",
                    publishDate: "2017-11-15T07:33:46.925Z",
                    summary: "网易云音乐CEO朱一闻表示，音乐其实有两次生命，一次是创作，另一次是传播，音乐的价值体现在传播和分享之中，好音乐理应获得更广泛的传播，感染更多的听众 ... KKBOX集团执行长林冠群表示：KKBOX和网易云音乐渊源已久，网易创始人丁磊和我从四五年前起就曾多次交流，而近一年，我和朱一闻也常常互换产品和技术心得，在产品理念方面非常契合 ... 在谈到双方合作缘起时，林冠群认为，网易云音乐和KKBOX有共同的理想，希望能够帮助新的歌手及其音乐有更多的机会与更大的舞台，整合资源，打造一个全球最大、效益最高的华语音乐宣传平台。",
                },
                {
                    id: "4stgd9wkjkK",
                    newsArray: [
                        {
                            "id": 18226675,
                            "url": "http://tech.163.com/17/1115/15/D39S2JH300097U7R.html",
                            "title": "网易云音乐与KKBOX合作，同时宣布用户数破4亿",
                            "groupId": 1,
                            "siteName": "网易科技",
                            "siteSlug": "site_wangyi",
                            "mobileUrl": "http://3g.163.com/tech/17/1115/15/D39S2JH300097U7R.html",
                            "authorName": "王凤枝",
                            "duplicateId": 1,
                            "publishDate": "2017-11-15T07:00:59.000Z"
                        }
                    ],
                    order: "25085",
                    title: "脉脉完成C轮7500万美元融资 光源资本担任独家财务顾问",
                    publishDate: "2017-11-15T07:33:46.925Z",
                    summary: "网易云音乐CEO朱一闻表示，音乐其实有两次生命，一次是创作，另一次是传播，音乐的价值体现在传播和分享之中，好音乐理应获得更广泛的传播，感染更多的听众 ... KKBOX集团执行长林冠群表示：KKBOX和网易云音乐渊源已久，网易创始人丁磊和我从四五年前起就曾多次交流，而近一年，我和朱一闻也常常互换产品和技术心得，在产品理念方面非常契合 ... 在谈到双方合作缘起时，林冠群认为，网易云音乐和KKBOX有共同的理想，希望能够帮助新的歌手及其音乐有更多的机会与更大的舞台，整合资源，打造一个全球最大、效益最高的华语音乐宣传平台。",
                },
                {
                    id: "4stgd9wkjkK",
                    newsArray: [
                        {
                            "id": 18226675,
                            "url": "http://tech.163.com/17/1115/15/D39S2JH300097U7R.html",
                            "title": "网易云音乐与KKBOX合作，同时宣布用户数破4亿",
                            "groupId": 1,
                            "siteName": "网易科技",
                            "siteSlug": "site_wangyi",
                            "mobileUrl": "http://3g.163.com/tech/17/1115/15/D39S2JH300097U7R.html",
                            "authorName": "王凤枝",
                            "duplicateId": 1,
                            "publishDate": "2017-11-15T07:00:59.000Z"
                        }
                    ],
                    order: "25085",
                    title: "脉脉完成C轮7500万美元融资 光源资本担任独家财务顾问",
                    publishDate: "2017-11-15T07:33:46.925Z",
                    summary: "网易云音乐CEO朱一闻表示，音乐其实有两次生命，一次是创作，另一次是传播，音乐的价值体现在传播和分享之中，好音乐理应获得更广泛的传播，感染更多的听众 ... KKBOX集团执行长林冠群表示：KKBOX和网易云音乐渊源已久，网易创始人丁磊和我从四五年前起就曾多次交流，而近一年，我和朱一闻也常常互换产品和技术心得，在产品理念方面非常契合 ... 在谈到双方合作缘起时，林冠群认为，网易云音乐和KKBOX有共同的理想，希望能够帮助新的歌手及其音乐有更多的机会与更大的舞台，整合资源，打造一个全球最大、效益最高的华语音乐宣传平台。",
                }
            ]
        };
    },
    filters: {
        titleFilter(val) {
            return timeHandle(val);
        }
    },
    methods: {
        addSelectClass(index) {
            var ele = document.getElementsByClassName('topicItem');
            for(let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('selected');
            }
            var f = window.event.currentTarget.classList.contains('detail');
            if(f) {
                window.event.currentTarget.classList.remove('detail', 'selected');
                this.$refs[`topicCollapse${index}`][0].classList.add('collapse');
            } else {
                for(let i = 0; i < ele.length; i++) {
                    var eleFlag = ele[i].classList.contains('detail');
                    if(eleFlag) {
                        ele[i].classList.remove('selected', 'selected');
                    }
                }
                window.event.currentTarget.classList.add('detail', 'selected');
                this.$refs[`topicCollapse${index}`][0].classList.remove('collapse');
            }
        }
    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
.listButtonFix {
  margin: 25px 0 65px;
  .loading {
    text-align: center;
    width: 100%;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
.bp-pure {
    padding: 0;
    margin: 0;
}
.bp-beauty-line {
    position: relative;
    padding: 0;
    margin: 0;
    letter-spacing: 0;
    &.collapse {
        height: 81px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
}
/* 即时查看 */
.instantViewIcon {
    display: inline-block;
    text-align: center;
    border: 1px solid #a9bfd5;
    border-radius: 3px;
    width: 42px;
    height: 19px;
    line-height: 16px;
    vertical-align: text-bottom;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    img {
        width: 21px;
        height: 9px;
    }
}
.topicItem {
    max-height: 172px;
    transition: max-height .5s;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    &:first-child .topicTitle {
        padding-top: 0;
    }
    .itemMain {
        display: none;
        .topicMeta {
            min-height: 30px;
            position: relative;
            .topicLink {
                font-size: 12px;
                color: #909090;
                position: absolute;
                bottom: 8px;
                right: 10px;
                span {
                    position: relative;
                    top: 0;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 4px 0 4px 6px;
                    border-color: transparent transparent transparent #b2b2b2;
                    display: inline-block;
                    margin-left: 6px;
                }
            }
        }
        .fix {
            height: 16px;
        }
    }
    &.detail {
        max-height: 800px;
        position: relative;
        .itemMain {
            display: block;
        }
        .ReactCollapse-collapse {
            height: auto;
        }
    }
    &.detail.selected {
        background-color: #fff;
        border: 1px solid #d4d6d8;
        border-radius: 8px;
        position: relative;
        z-index: 10;
        box-shadow: 0 4px 18px -4px rgba(0,0,0,.1);
        margin-left: -22px;
        margin-right: -22px;
        margin-top: -1px;
        padding-left: 21px;
        padding-right: 21px;
        z-index: 1;
        &:first-child {
            margin-top: -30px;
            .topicTitle {
                padding-top: 29px;
            }
        }
    }
    .ReactCollapse-collapse {
        overflow: hidden;
        height: 0;
    }
    .topicTitle {
        color: #333;
        font-weight: 500;
        font-size: 17px;
        line-height: 1.78em;
        padding-bottom: 8px;
        padding-top: 30px;
        cursor: pointer;
        position: relative;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .content {
            margin-right: 15px;
        }
        .time {
            font-size: 14px;
            color: #999;
            font-weight: 400;
            display: inline-block;
        }
        &.first {
            margin-top: 0;
        }
    }
    .summary {
        color: #737373;
        font-size: 15px;
        line-height: 1.8em;
        cursor: pointer;
        padding-bottom: 30px;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .summaryHidden {
        padding-bottom: 20px;
    }
}
.articleItem {
    margin-left: 8px;
    margin-bottom: 10px;
    padding-left: 12px;
    position: relative;
    display: block;
    &:before {
        content: " ";
        position: absolute;
        left: -4px;
        margin-top: 6px;
        width: 4px;
        height: 4px;
        border: 1.5px solid #acb9c6;
        border-radius: 50%;
    }
    .articleTitle {
        color: #333;
        font-size: 14px;
        line-height: 1.4em;
        display: inline;
        text-decoration: none;
        margin-right: 15px;
        cursor: pointer;
    }
    .meta {
        display: inline-block;
        color: #a3a3a3;
        font-size: 14px;
        span {
            a {
                color: #a3a3a3;
                text-decoration: none;
            }
        }
    }
}
</style>
