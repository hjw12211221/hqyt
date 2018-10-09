<template lang="jade">
#app
	modal-load
	modal-Hint
	keep-alive
		router-view(:key="$route.fullPath" v-if="$route.meta.keepAlive")
	router-view(:key="$route.fullPath" v-if="!$route.meta.keepAlive")
</template>

<script>
export default {
	name: 'App',
}
</script>
<style lang="stylus">
@import './assets/style/index.styl'
</style>