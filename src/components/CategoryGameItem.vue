<template>
	<div class="root">
		<img :src="room.room_src"/>
		<div class="text-content">
			<p>{{ room.room_name }}</p>
			<p class="room-nickname"><span class="icon icon-user"></span>{{ room.nickname }}</p>
			<p class="visited-number"><span class="icon icon-eye-open"></span>{{ room.online | formatNumber }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:["room"],
	}
</script>

<style scoped>
	.root {
		border-bottom: solid 1px grey;
		padding: 10px;
        padding-bottom: 0;
		vertical-align: top;
	}

	.text-content {
		display: inline-block;
		width: 50%;
		vertical-align: top;
	}

	img {
		width: 45%;
	}

    p {
        margin: 0;
    }

	.room-nickname,.visited-number{
		color: darkgrey;
        font-size: 0.7rem;
	}
</style>