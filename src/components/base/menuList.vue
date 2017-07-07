<template>
	<div class="T-menu-page">
		<router-link class="T-menu-list" v-for="menuItem in menuList" :to="menuItem.url">
			<img :src="menuItem.imgUrl" alt="">
			<span>{{menuItem.title}}</span>
		</router-link>
	</div>
</template>

<script>
	export default{
		data (){
			return {
				menuList : [
					{	
						title : "超高返",
						imgUrl : require("../../assets/image/menu_01.png"),
						url : "/promcat"
					},
					{	
						title : "超实惠",
						imgUrl : require("../../assets/image/menu_02.png"),
						url : "/affordable"
					},
					{	
						title : "9.9包邮",
						imgUrl : require("../../assets/image/menu_03.png"),
						url : "/freeShipping"
					},
					{	
						title : "品牌特卖",
						imgUrl : require("../../assets/image/menu_04.png"),
						url : "/sale"
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.T-menu-page{
		width:100%;
		padding:0.15rem;
		box-sizing:border-box;
		display:-webkit-box;
		a{
			-webkit-box-flex:1;
			display:-webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			img{
				display:block;
				width:0.45rem;
			}
			span{
				display:block;
				margin-top:0.07rem;
			}
		}
	}
</style>