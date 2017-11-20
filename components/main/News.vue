<template>
    <div class="content">
        <div>
            <div id="itemList">
                <div id="masking" class="masking"></div>
            </div>
        </div>
        <div>
            <div id="itemList">
                <div class="timelineItem">
                    <h2 class="enableVisited">
                        <a class="" href="http://36kr.com/p/5103906.html" target="_blank"></a>
                    </h2>
                    <div class="summary">
                        <div class="bp-pure">
                            <div class="bp-beauty-line___3EG0Z" style="letter-spacing: 0.283019px;">
                                <!-- react-text: 3859 -->11 月 17 日，京东向知晓程序独家透露，在双 11 （ 11.1-11 ）期间，京东小程序的 PV 为<!-- /react-text -->
                            </div>
                        </div>
                        <div class="meta___1ARPK">
                            <span>
                                <!-- react-text: 3746 -->36Kr / 36氪的朋友们<!-- /react-text -->
                                <i class="split___2Hoin"></i>
                                <!-- react-text: 3748 -->2 分钟前<!-- /react-text -->
                                <i class="split"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="listButtonFix">
                    <div class="loading">
                        <!-- <img v-if="topicsData.length < 60" src="~/assets/images/loading.gif" alt="">
                        <div v-else class="listButton" @click="loadMoreData">加载更多</div> -->
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
export default {
    asyncData({ params }, callback) {
        getAPI.newsData().then(res => {
            callback(null, {
                newsData: res.data.data
            })
        });
    },
    mounted() {
        console.log(this.newsData);
    }
}
</script>

<style lang="scss" scoped>

</style>
