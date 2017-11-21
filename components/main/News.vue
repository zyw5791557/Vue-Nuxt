<template>
    <div class="content">
        <div>
            <div id="itemList">
                <div id="masking" class="masking"></div>
            </div>
        </div>
        <div>
            <div id="itemList">
                <div class="timelineItem" v-for="(item,index) in newsData" :key="index">
                    <h2 class="enableVisited">
                        <a class="" href="http://36kr.com/p/5103906.html" target="_blank">{{ item.title }}</a>
                    </h2>
                    <div class="summary">
                        <div class="bp-pure">
                            <div class="bp-beauty-line">
                                {{ item.summary }}
                            </div>
                        </div>
                    </div>
                    <div class="meta">
                        <span>
                            {{ item.siteName }}  {{ item.authorName | authorNameFilter }}
                            <i class="split"></i>
                            {{ item.publishDate | timeFilter }}
                            <i class="split"></i>
                        </span>
                    </div>
                </div>
                <div class="listButtonFix">
                    <div class="loading">
                        <img v-if="newsData.length < 60" src="~/assets/images/loading.gif" alt="">
                        <div v-else class="listButton" @click="loadMoreData">加载更多</div>
                    </div>
                </div>
            </div>
        </div>    
        <div class="popup inactive">
            <div></div>
        </div>
</div>
</template>
<script>
import getAPI from '~/plugins/getAPI.js';
import { timeHandle, UTCToSec,ScrollTopEvents } from '~/util/util.js';
export default {
    props: ['data'],
    data() {
        return {
            newsData: this.data,
            oldestOrder: '',
        }
    },
    filters: {
        timeFilter(val) {
            return timeHandle(val);
        },
        authorNameFilter(val) {
            return val ? ' / ' + val : '';
        }
    },
    methods: {
        initData() {
            // 获取当前最旧的消息 publishDate
            this.oldestOrder = UTCToSec(this.newsData[this.newsData.length - 1].publishDate);
        },
        initMethods() {
             // 判断   上滚动 / 下滚动
            var p=0,t=0; 
            window.addEventListener('scroll', (e) => {
                let evt = window.event || e;
                let scrollTopEvents = new ScrollTopEvents();
                p = scrollTopEvents.scrollTop();
                // 判断 toppicsData 数目, 超过 60 条 return
                if(this.newsData.length >= 60) {
                    return;
                }
                // 落差
                const fall = 200;
                if(scrollTopEvents.scrollTop() + scrollTopEvents.windowHeight() >= scrollTopEvents.documentHeight() - fall){
                    // 加载更多
                    // if 下滚  else 下滚
                    if(t<=p) {
                        this.loadMoreData();
                        window.scrollTo(0,scrollTopEvents.scrollTop() - 500);
                        return;
                    } else {
                        return;
                    }
                }
                setTimeout(() => {
                    t = p
                }, 0);
            },false);
        },
        // 加载更多
        loadMoreData() {
            getAPI.newsData({
                lastCursor: this.oldestOrder,
                pageSize: 10
            }).then(res => {
                // 加载更多数据
                this.newsData = this.newsData.concat(res.data.data);
                this.initData();
            });
        }
    },
    mounted() {
        this.initData();
        this.initMethods();
    }
}
</script>

<style lang="scss" scoped>
.masking {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0,0%,98%,.86);
    z-index: 1;
    visibility: hidden;
    opacity: 0;
}
.timelineItem {
    display: block;
    margin-top: 27px;
    padding-bottom: 27px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    &:first-child {
        margin-top: 0;
    }
    h2 {
        font-size: 17px;
        line-height: 1.78em;
        margin-bottom: 8px;
        font-weight: 500;
        a {
            color: #333;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .summary {
        color: #737373;
        font-size: 15px;
        line-height: 1.8em;
        margin-bottom: 10px;
        .bp-pure {
            padding: 0;
            margin: 0;
            .bp-beauty-line {
                max-height: 81px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }
    .meta {
        color: #999;
        font-size: 14px;
        line-height: 1.2em;
        .split {
            width: 12px;
            display: inline-block;
        }
    }
}
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
}
</style>
