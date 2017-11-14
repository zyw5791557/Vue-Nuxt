<template>
	<div>
		<news />
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
	async asyncData ({ params }) {
		let { data } = await getAPI.sponsors();
		return { sponsorsData: data.data }
	}
};
</script>

<style scoped lang="scss">

</style>
