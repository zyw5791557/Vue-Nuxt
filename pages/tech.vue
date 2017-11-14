<template>
	<div>
		<tech />
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
	async asyncData ({ params }) {
		let { data } = await getAPI.sponsors();
		return { sponsorsData: data.data }
	}
};
</script>

<style scoped lang="scss">

</style>
