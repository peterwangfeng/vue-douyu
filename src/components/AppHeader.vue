<template>
    <header class="clearfix">
		<i @click="openMenu" class="icon icon-align-justify"></i>
		<span class="title">
			<slot></slot>
		</span>
		<span class="icon icon-user pull-right"></span>
	</header>
</template>

<script>
	import bus from "../Bus.js";

    export default {
        name: "appHeader",
        methods:{
            openMenu() {
                bus.$emit("toggleMenu", true);
            }
        }
    }    
</script>

<style scoped>
    header{
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #282828;
		top: 0;
		z-index: 9;
	}

	i, .title{
		margin-left: 10px;
	}
	.title{
		color: white;
	}

	i, .pull-right{
		color: #999999;
	}

	i {
		cursor: pointer;
	}

	.pull-right{
		line-height: 44px;
		margin-right: 10px;
	}
</style>