<template>
	<div class="root">
		<img :src="game.game_icon"/>
		<br />
		<span>{{ game.game_name }}</span>
	</div>
</template>

<script>
	export default {
        name: "gameItem",
		props:["game"],
	}
</script>

<style scoped>
	.root {
        box-sizing: border-box;
		display: inline-block;
		width: 33.3%;
		border: solid 1px grey;
		text-align: center;
	}

	img {
		max-width: 80px;
		border-radius: 50%;
		margin: 10px;
	}

	span {
		color: darkgrey;
	}
</style>