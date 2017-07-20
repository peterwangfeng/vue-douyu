<template>
	<div>
		<app-header>推荐</app-header>
        <div class="root">推荐页面，正在开发中...</div>
	</div>
</template>

<script>
	import AppHeader from "../components/AppHeader";

	export default {
		name: "recommend",
        components: {
            "app-header": AppHeader
        }
	}
</script>

<style scoped>
	.root{
        margin-top: 44px;
    }
</style>