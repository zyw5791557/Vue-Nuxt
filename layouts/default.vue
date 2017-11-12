<template>
	<div id="app">
		<c-header />
		<div class="main">
			<nuxt-child />
			<sponsors />
		</div>
		<c-footer />
		<back-top />
	</div>
</template>
<script>
import cHeader from '~/components/CommonHeader.vue';
import cFooter from '~/components/CommonFooter.vue';
import backTop from '~/components/BackTop.vue';
import sponsors from '~/components/Sponsors.vue';
export default {
	components: {
		cHeader,
		sponsors,
		cFooter,
		backTop
	},
	data() {
		return {
		
		};
	},
  	methods: {}
};
</script>

<style scoped lang="scss">
	.main {
		margin: 38px auto 0;
		min-height: 900px;
		display: flex;
		justify-content: space-between;
	}
</style>
