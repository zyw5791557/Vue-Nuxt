<template>
	<div id="app">
		<c-header />
		<div class="main">

		</div>
		<c-footer />
		<back-top />
	</div>
</template>
<script>
import cHeader from '~/components/CommonHeader.vue';
import cFooter from '~/components/CommonFooter.vue';
import backTop from '~/components/BackTop.vue';
export default {
	components: {
		cHeader,
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
	
</style>
