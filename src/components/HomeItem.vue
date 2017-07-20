<template>
	<div class="root">
		<div class="root-header">
			<transition name="root-pic">
				<img v-show="loaded" @load="imgLoaded" :src="room.room_src"/>
			</transition>
			<img v-show="!loaded" :src="placeholder" />
			<span class="house-name">{{ room.nickname }}</span>
			<span class="visited-number">
				<span class="icon icon-user-md"></span>
				{{ room.online }}
			</span>
		</div>
		<div class="root-name">
			<span class="icon-desktop icon"></span>
			{{ room.room_name }}
		</div>
	</div>
</template>

<script>
	import placeholder from "../assets/placeholder.gif";
	
	export default {
		props: ["room"],
		data: function(){
			return {
				loaded: false,
				placeholder 
			}
		},
		methods: {
			imgLoaded: function(){
				this.loaded = true;
			}
		}
	}
</script>

<style scoped>
	.root{
		display: inline-block;
		width: 14rem;
		margin: 10px;
	}

	.root-header{
		height: 10rem;
		position: relative;
		border-radius: 10px;
		color: white;
		background-size: 100% 100%;
		overflow: hidden;
	}

	.root-header img{
		width: 100%;
		height: 100%;
	}
	
	@media(max-width: 320px) {
		.root{
			width: 80%;
		}
		.root-header{
			height: 50vw;
		}
	}
	
	.house-name, .visited-number{
		position: absolute;
	}

	.house-name{
		left: 10px;
		bottom: 5px;
	}

	.visited-number{
		right: 10px;
		bottom: 5px;
	}

	.root-name{
		padding: 0 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.root-pic-enter-active, .root-pic-leave-active{
		transition: opacity 0.5s;
	}
	
	.root-pic-enter, .root-pic-leave-active{
		opacity: 0;
	}
</style>