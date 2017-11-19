<template>
    <div class="main">
        <div class="content">
            <div>
                <div class="topicItem detail detailMode">
                    <h2 class="topicTitle">
                        <span class="content">自媒体侵权美团点评被判赔 10 万 称将反诉</span>
                        <span class="time"></span>
                    </h2>
                    <div class="summary">美团点评法务负责人表示，今年 1 月，朱翊通过「今日头条」平台发表了题为《王兴任人唯亲成痛点 美团势力图浮出水面》的文章，文章虚构了大量信息 ... 文章发布后，被多家网站转载，对美团点评的社会评价造成严重影响 ... 法院审理认为，朱翊撰写并发表上述文章具有明确过错，对美团点评的商业信誉和产品声誉损害事实成立，且朱翊的行为具有明显违法性，应承担相应侵权责任，向美团点评赔礼道歉并赔偿 10 万元人民币。</div>
                    <div class="main">
                        <div>
                            <div class="articleItem detail first">
                                <a class="articleTitle enableVisited" href="" target="_blank">美团新逻辑：壁垒、管理与它的新战场</a>
                                <div class="meta">
                                    <span>
                                        <a href="" target="_blank">36Kr</a>
                                        <span> / </span>
                                        <a href="" target="_blank">新浪科技</a>
                                        <span> / </span>
                                        <a href="" target="_blank">网易科技</a>
                                    </span>
                                </div>
                            </div>
                            <div class="articleItem detail">
                                <a class="articleTitle enableVisited" href="" target="_blank">美团新逻辑：壁垒、管理与它的新战场</a>
                                <div class="meta">
                                    <span>
                                        <a href="" target="_blank">36Kr</a>
                                        <span> / </span>
                                        <a href="" target="_blank">新浪科技</a>
                                        <span> / </span>
                                        <a href="" target="_blank">网易科技</a>
                                    </span>
                                </div>
                            </div>
                            <div class="articleItem detail">
                                <a class="articleTitle enableVisited" href="" target="_blank">美团新逻辑：壁垒、管理与它的新战场</a>
                                <div class="meta">
                                    <span>
                                        <a href="" target="_blank">36Kr</a>
                                        <span> / </span>
                                        <a href="" target="_blank">新浪科技</a>
                                        <span> / </span>
                                        <a href="" target="_blank">网易科技</a>
                                    </span>
                                </div>
                            </div>
                            <div class="topicMeta">
                                <section class="timeline">
                                    <p class="timeline-header">事件追踪</p>
                                    <ul class="timeline-container timeline-container--pc">
                                        <li class="timeline-item timeline-item--pc">
                                            <div class="date-item">
                                                <div>11.17</div>
                                            </div>
                                            <div class="dot-item">
                                                <div class="dot-item-default dot-item--pc"></div>
                                            </div>
                                            <div class="line-item line-item--pc"></div>
                                            <div class="content-item">
                                                <a class="timeline-content" href="" target="_blank">自媒体侵权美团点评被判赔 10 万 称将反诉</a>
                                            </div>
                                        </li>
                                        <li class="timeline-item timeline-item--pc">
                                            <div class="date-item">
                                                <div>11.17</div>
                                            </div>
                                            <div class="dot-item">
                                                <div class="dot-item-default dot-item--pc"></div>
                                            </div>
                                            <div class="line-item line-item--pc"></div>
                                            <div class="content-item">
                                                <a class="timeline-content" href="" target="_blank">自媒体侵权美团点评被判赔 10 万 称将反诉</a>
                                            </div>
                                        </li>
                                        <li class="timeline-item timeline-item--pc">
                                            <div class="date-item">
                                                <div>11.17</div>
                                            </div>
                                            <div class="dot-item">
                                                <div class="dot-item-default dot-item--pc"></div>
                                            </div>
                                            <div class="line-item line-item--pc"></div>
                                            <div class="content-item">
                                                <a class="timeline-content" href="" target="_blank">自媒体侵权美团点评被判赔 10 万 称将反诉</a>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qr">
                <div class="img">
                    <canvas height="128" width="128" style="height: 128px; width: 128px;"></canvas>
                </div>
                <p>扫描二维码分享话题</p>
            </div>
        </div>
    </div>
</template>

<script>
import getAPI from '~/plugins/getAPI';
export default {
    layout: 'topic',
    asyncData({ params },callback) {
        const id = params.id;
        getAPI.topicDetail(id).then(res => {
            callback(null, {
                topicDetailData: res.data
            })
        });
    },
    mounted() {
        console.log(this.topicDetailData);
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin: 0 auto;
    width: 680px;
    padding-bottom: 40px;
    .content {
        display: inline-block;
        width: 100%!important;
        max-width: 100%;
        position: relative;
        .qr {
            position: absolute;
            top: 10px;
            right: -220px;
            border: 1px solid #e3e4e5;
            padding: 7px;
            padding-bottom: 15px;
            background-color: #fff;
            box-shadow: 0 4px 18px -4px rgba(0,0,0,.1);
            .img {
                width: 158px;
                height: 144px;
                text-align: center;
                padding-top: 14px;
            }
            p {
                font-size: 14px;
                color: #999;
                text-align: center;
                margin-bottom: 5px;
            }
        }
    }
}

.topicItem {
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    .main {
        display: none;
        .topicMeta {
            min-height: 30px;
            position: relative;
        }
    }
    &.detail {
        position: relative;
        .summary {
            padding-bottom: 20px;
            position: relative;
        }
        .main {
            display: block;
        }
    }
    &.detailMode,
    &.detailMode:after {
        border-bottom: none;
    }
    &.detailMode {
        .topicTitle {
            color: #333;
            font-size: 28px;
            line-height: 1.6em;
            margin-bottom: 22px;
            cursor: auto!important;
            -moz-user-select: initial;
            -ms-user-select: initial;
            user-select: auto;
            .time {
                display: none;
            }
        }
        .summary {
            font-size: 16px!important;
            cursor: auto!important;
            color: #737373;
            margin-bottom: 30px!important;
            line-height: 2em!important;
            -moz-user-select: initial;
            -ms-user-select: initial;
            user-select: auto;
        }
        .articleItem {
            line-height: 1.6em;
            margin-bottom: 16px;
            &:before {
                margin-top: 8px;
            }
            .articleTitle {
                font-size: 16px;
            }
            .meta {
                font-size: 16px;
            }
        }
    }
    &:first-child {
        .topicTitle {
            padding-top: 0;
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
        span a {
                color: #a3a3a3;
                text-decoration: none;
            }
    }
}
.timeline-header {
    margin-bottom: 25px;
    font-size: 16px;
    color: #999;
}
.timeline-container {
    border: 1px solid #eee;
    border-radius: 8px;
    background-color: #fafafa;
}
.timeline-container--pc {
    padding: 25px;
}
.timeline-item {
    position: relative;
    display: flex;
    &:last-child {
        padding-bottom: 0;
    }
}
.timeline-item--pc {
    padding-bottom: 30px;
}
.date-item {
    min-width: 30px;
    font-size: 14px;
    text-align: right;
    color: #999;
    line-height: 1.2;
    padding-top: 4px;
    div:first-child {
        color: #545454;
    }
}
.dot-item {
    padding: 8px 15px;
    padding-left: 24px;
    width: 16px;
    position: relative;
    z-index: 1;
}
.dot-item-default {
    background: #d6d6d6;
    border-radius: 50%;
}
.dot-item--pc {
    width: 6px;
    height: 6px;
    border: 1px solid #fcfcfc;
    position: relative;
    border-radius: 50%;
}
.line-item {
    position: absolute;
    border-left: 2px solid #f0f0f0;
    height: 100%;
    top: 8px;
    z-index: 0;
}
.line-item--pc {
    left: 57px;
}
.content-item {
    font-size: 15px;
    line-height: 24px;
    width: 100%;
}
.timeline-content {
    color: #545454;
}
@media screen and (min-width: 769px) {
    .timeline {
        margin-top: 50px;
    }
}

</style>
