<template>
	<div id="app">
        <div style="background-color: rgb(252, 252, 252);">
            <div class="header">
                <a class="logo" href="/">
                    <img src="~assets/images/logo.png" alt="logo" />
                </a>
            </div>
            <nuxt :style="{ minHeight: minHeight }" />
            <c-footer />
            <back-top />
        </div>
	</div>
</template>
<script>
import cFooter from '~/components/CommonFooter.vue';
import backTop from '~/components/BackTop.vue';
export default {
	components: {
		cFooter,
		backTop
	},
	data() {
		return {
            minHeight: '',
		};
	},
    methods: {
        /* 计算内容最小高度
         * 221   80 + 81 + 40 + 20
         */
        minHeightComputed() {
            this.minHeight = (document.documentElement.clientHeight - 221) + 'px';
        }
    },
    mounted() {
        this.minHeightComputed();
    }  
};
</script>

<style scoped lang="scss">
    .header {
        margin: 0 auto;
        width: 680px;
        height: 80px;
        .logo {
            float: left;
            margin-top: 23px;
            img {
                width: 130px;
                height: 34px;
            }
        }
    }
</style>
