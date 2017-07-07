<template>
	<div class="T-header-page">
		<header class="T-header-bar" v-if="headerType==1">
			<div class="header-logo-left">
				<img src="../../assets/image/logo.png" alt="">
			</div>
			<div class="header-search-right">
				<div class="header-search-box">
					<img src="../../assets/image/search_icon.png" alt="">
					<input type="text" placeholder="输入淘宝商品关键字">
				</div>
			</div>
		</header>
		<header class="T-header-bar" v-if="headerType==2">
			<div class="header-logo2-left">
				<img src="../../assets/image/logo2.png" alt="">
			</div>
			<div class="header-text-right">
				<p>用返利，就在赚钱</p>
			</div>
		</header>
	</div>
</template>

<script>
	export default{
		props : {
			headerType : {
				type : Number
			}
		}
	}
</script>

<style lang="less">
	.T-header-page{
		height:0.52rem;
		background:#f43972;
		border-bottom:#d3c4c3 solid 0.01rem;
		.T-header-bar{
			width:100%;
			height:100%;
			padding:0 0.15rem;
			box-sizing:border-box;
			display:-webkit-box;
			-webkit-box-align:center;
			.header-logo-left{
				width:0.8rem;
				img{
					width:100%;
					height:100%;
					display:block;
				}
			}
			.header-logo2-left{
				width:0.7rem;
				img{
					width:100%;
					height:100%;
					display:block;
				}
			}
			.header-search-right{
				-webkit-box-flex:1;
				display:-webkit-box;
				-webkit-box-pack:end;
				.header-search-box{
					width:95%;
					background:#fff;
					height:0.3rem;
					border-radius:0.05rem;
					display:-webkit-box;
					-webkit-box-align:center;
					img{
						display:block;
						width:0.3rem;
					}
					input{
						border:0;
						display:block;
						outline:none;
						padding-left:0.05rem;
						font-size:0.12rem;
					}
				}
			}
			.header-text-right{
				-webkit-box-flex:1;
				color:#fff;
				font-size:0.12rem;
				margin-left:0.2rem;
				opacity:0.8;
			}
		}
	}
</style>