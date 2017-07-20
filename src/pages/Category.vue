<template>
	<div>
		<app-header>全部分类</app-header>
		<div class="game-box">
			<router-link v-for="g in gameList" :to="'/categoryRoom/' + g.cate_id + '/' + g.game_name" key="gameList">
				<game-item :game="g"></game-item>
			</router-link>
		</div>
	</div>
	
</template>

<script>
    import AppHeader from "../components/AppHeader";
	import GameItem from "../components/GameItem";

	export default {
        name: "category",
		data: function() {
			return {
				gameList: []
			}
		},
		components: {
            "app-header": AppHeader,
            "game-item": GameItem
		},
		created: function() {
			this.$http.get("/douyuapi/api/RoomApi/game")
			.then(function(res) {
				this.gameList = res.body.data;
			}, function() {
				alert("请求失败");
			});
		}
	}
</script>

<style scoped>
	.game-box{
        padding-top: 44px;
    }
</style>