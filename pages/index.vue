<template>
	<div>
		<topic :data="topicData" />
		<sponsors :data="sponsorsData" />
	</div>
</template>

<script>
import topic from '~/components/main/Topic.vue';
import sponsors from '~/components/Sponsors.vue';
import getAPI from '~/plugins/getAPI';
export default {
	components: {
		topic,
		sponsors
	},
	asyncData ({ params }, callback) {
		let p1 = getAPI.topicData();
		let p2 = getAPI.sponsors();
		Promise.all([p1,p2]).then(res => {
			callback(null, {
				topicData: res[0].data.data,
				sponsorsData: res[1].data.data
			})
		})
	}
};
</script>

<style scoped lang="scss">

</style>
