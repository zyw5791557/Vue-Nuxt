<template>
	<div>
		<news :data="newsData" />
		<sponsors :data="sponsorsData" />
	</div>
</template>

<script>
import news from '~/components/main/News.vue';
import sponsors from '~/components/Sponsors.vue';
import getAPI from '~/plugins/getAPI';
export default {
	components: {
		news,
		sponsors
	},
	asyncData ({ params }, callback) {
		let p1 = getAPI.newsData();
		let p2 = getAPI.sponsors();
		Promise.all([p1,p2]).then(res => {
			callback(null,{
				newsData: res[0].data.data,
				sponsorsData: res[1].data.data
			})
		})
	}
};
</script>

<style scoped lang="scss">

</style>
