<template>
	<div>
		<tech :data="techsData" />
		<sponsors :data="sponsorsData" />
	</div>
</template>

<script>
import tech from '~/components/main/Tech.vue';
import sponsors from '~/components/Sponsors.vue';
import getAPI from '~/plugins/getAPI';
export default {
	components: {
		tech,
		sponsors
	},
	asyncData ({ params }, callback) {
		let p1 = getAPI.techsData();
		let p2 = getAPI.sponsors();
		Promise.all([p1,p2]).then(res => {
			callback(null, {
				techsData: res[0].data.data,
				sponsorsData: res[1].data.data
			})
		});
	}
};
</script>

<style scoped lang="scss">

</style>
