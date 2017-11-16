<template>
    <div class="content">
        <div class="globalMessage hide"></div>
        <div>
            <div>
                <!-- itemList start -->
                <div id="itemList">
                    <div class="topicItem" v-for="(item, index) in topicsData" :key="index" @click="addSelectClass(index,item)">
                        <h2 class="topicTitle" :class="{ first: index === 0 }">
                            <span class="content">{{ item.title }}</span>
                            <span class="time">{{ item.createdAt | titleFilter }}</span>
                        </h2>
                        <div class="summary summaryHidden">
                            <div class="bp-pure">
                                <div class="bp-beauty-line collapse" :ref="`topicCollapse${index}`">
                                    {{ item.summary }}
                                    <div class="instantViewIcon" title="即使查看" v-if="item.extra.instantView" @click="instantViewPage(index,item)">
                                        <img src="~/assets/images/glasses_blue.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ReactCollapse-collapse">
                            <div class="ReactCollapse-content">
                                <div class="itemMain">
                                    <div>
                                        <div class="articleItem" :class="{ first: idx === 0 }" v-for="(itm,idx) in item.newsArray" :key="idx">
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
                        <img v-if="topicsData.length < 60" src="~/assets/images/loading.gif" alt="">
                        <div v-else class="listButton">加载更多</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup" :class="{ inactive: inactive }">
            <div>
                <div class="instantView" v-if="!inactive">
                    <div class="header">
                        <span>来源：{{ instantView.siteName }}</span>
                        <a class="link" :href="instantView.url" target="_blank">访问原网址</a>
                    </div>
                    <div class="title">{{ instantView.title }}</div>
                    <div class="contentView" v-html="instantView.content"></div>
                    <div class="dividingLine">
                        <div class="hrLine"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import getAPI from '~/plugins/getAPI';
import { timeHandle } from '~/util/util.js';
export default {
    data() {
        return {
            topicsData: [],
            instantView: {},
            instantViewObject: {},
            inactive: true,
        };
    },
    props:['data'],
    filters: {
        titleFilter(val) {
            return timeHandle(val);
        }
    },
    methods: {
        init() {
            var _this = this;
            this.topicsData = this.data;
            // 清除 localStorage - 'instantViewCacheList'
            localStorage.removeItem('instantViewCacheList');
            document.onclick = function() {
                _this.inactive = true;
                document.body.style.overflowY = 'auto';             // 启动页面滚动条
            };
        },
        addSelectClass(index,item) {
            var event = window.event || arguments.callee.caller.arguments[0];
            // 预请求
            var isRequest = false;
            var instantViewFlag = item.extra.instantView;
            var id = item.id;
            if(instantViewFlag) {
                var instantViewCacheList = JSON.parse(localStorage.getItem('instantViewCacheList'));
                if(instantViewCacheList === null) {
                    localStorage.setItem('instantViewCacheList', JSON.stringify([id]));
                    isRequest = true;
                } else {
                    let isCache = instantViewCacheList.indexOf(id);
                    if(isCache === -1) {
                        instantViewCacheList.push(id);
                        localStorage.setItem('instantViewCacheList', JSON.stringify(instantViewCacheList));
                        isRequest = true;
                    }
                }
            }
            // 即使查看预请求
            if(isRequest) {
                getAPI.instantView(id).then(res => {
                    if(res.data) {
                        this.instantViewObject[id] = res.data;
                    }
                });
            }


            var ele = document.getElementsByClassName('topicItem');
            for(let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('selected');
            }
            var f = event.currentTarget.classList.contains('detail');
            if(f) {
                event.currentTarget.classList.remove('detail', 'selected');
                this.$refs[`topicCollapse${index}`][0].classList.add('collapse');
            } else {
                for(let i = 0; i < ele.length; i++) {
                    var eleFlag = ele[i].classList.contains('detail');
                    if(eleFlag) {
                        ele[i].classList.remove('selected', 'selected');
                    }
                }
                event.currentTarget.classList.add('detail', 'selected');
                this.$refs[`topicCollapse${index}`][0].classList.remove('collapse');
            }
        },
        instantViewPage(index,item) {
            var event = window.event || arguments.callee.caller.arguments[0];
            var id = item.id;
            if(this.instantViewObject[id]) {
                event.stopPropagation();
                this.instantView = this.instantViewObject[id];
                this.inactive = false;
                document.body.style.overflowY = 'hidden';               // 页面滚动条失效
            } else {
                this.addSelectClass(index,item);
            }
        }
    },
    mounted() {
        this.init();
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
.listButton {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    width: 100%;
    color: gray;
    font-weight: 500;
    border: 1px solid #d7d8db;
    position: relative;
    border-radius: 6px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
}

/* 即时查看 */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    z-index: 1000;
    overflow-y: auto;
    overflow-x: hidden;
}
.inactive {
    visibility: hidden;
}
.instantView {
    font-size: 14px;
    max-width: 550px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 60px;
    margin: 20px 0 40px;
    box-shadow: 0 10px 25px 0 rgba(0,0,0,.1);
    background-color: transparent;
    &:before {
        content: "";
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: -1;
    }
    .header {
        font-size: 15px;
        color: #666;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        margin-top: 35px;
        margin-bottom: 32px;
        position: relative;
        .link {
            color: #666;
            position: relative;
            margin-right: 12px;
            &:after {
                content: "";
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: -12px;
                border-top: 4px solid transparent;
                border-bottom: 4px solid transparent;
                border-left: 6px solid #b2b2b2;
            }
        }
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            z-index: -1;
            height: 200%;
            border-bottom: 1px solid #e0e0e0;
            transform: scale(.5);
            transform-origin: top left;
        }
    }
    .title {
        font-size: 24px;
        color: #1b1b1b;
        line-height: 1.6em;
        font-weight: 600;
        margin-bottom: 32px;
    }
    .dividingLine {
        position: relative;
        margin-top: 48px;
        margin-bottom: 48px;
        &:after {
            content: url('~assets/images/glasses.png');
            position: absolute;
            top: -12px;
            left: 50%;
            transform: scale(.5) translateX(-100%);
            width: 140px;
            height: 26px;
        }
        .hrLine {
            height: 1px;
            width: 200%;
            background-color: #e0e0e0;
            transform: scale(.5);
            transform-origin: top left;
        }
    }
}
</style>
