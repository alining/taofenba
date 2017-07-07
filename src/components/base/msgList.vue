<template>
	<div class="T-list-page" v-scroll="scrollEvent">
		<section v-if="listMsgType==1" class="T-list-box">
			<div class="T-list-item" v-for="(item,index) in listData" >
				<div class="T-image-box">
					<img :src="item.imageUrl" alt="">
				</div>
				<p class="T-title-box">{{item.title}}</p>
				<div class="T-price-box">
					<div class="T-price-left">
						<span class="T-new-price">￥{{item.price}}</span>
						<span class="T-old-price">{{item.oldPrice}}</span>
					</div>
					<div class="T-price-right">
						<p>返<span>{{item.fanli}}</span></p>
					</div>
				</div>
			</div>
		</section>
		<section v-if="listMsgType==2" class="T-sale-box">
			<div class="T-sale-list" v-for="item in listData">
				<div class="T-img-box">
					<img :src="item.banner" alt="">
					<div class="T-mask-box">
						<h4>{{item.title}}</h4>
                        <span>{{item.tag}}</span>
                        <p class="T-text-desc">{{item.desc}}</p>
                        <p class='T-text-upRate'>最高返{{item.upRate}}</p>
					</div>
				</div>
				<div class="T-list-main">
					<div class="T-list-item" v-for="listItem in item.itemList">
						<div class="T-item-img">
							<img :src="listItem.image" alt="">
						</div>
						<h6 class="T-item-title">{{listItem.title}}</h6>
						<p class="T-item-price">到手价<span>￥{{listItem.handPrice}}</span></p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		props : {
			listMsgType : {
				type : Number
			},
			listMsgUrl : {
				type : String
			}
		},
		data (){
			return {
				listData : []
			}
		},
		created : function(){
			this.getListData()
		},
		methods : {
			getListData(){
				var that = this,
					pages = this.$store.state.page;
	            this.$http.get(this.listMsgUrl)
				  .then(function (response) {
				  	var res = response.data;
				  	if(that.listMsgType == 1){
				  		if(res[pages]){
					  		that.listData = that.listData.concat(res[pages])
					  	}
					}else{
						if(res[pages]){
					  		that.listData = that.listData.concat(res[pages].pinpaitList)
					  	}
					}
				  	
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			scrollEvent(){
				var pages = this.$store.state.page;
				if(pages<8){
					pages++;
					this.$store.commit("scrollBom",pages);
					this.getListData();
				}else{
					return false;
				}
				return pages;
				
			}
		}
	}
</script>

<style lang="less">
	.T-list-page{
		width:100%;
		overflow:hidden;
		.T-list-box{
			.T-list-item{
				width:48%;
				border:0.01rem solid #e5e5e5;
				float:left;
				margin-bottom:0.1rem;
				.T-image-box{
					width:100%;
					position:relative;
					padding:50%;
					overflow:hidden;
					box-sizing:border-box;
					img{
						position:absolute;
						left:0;
						top:0;
						width:100%;
						height:auto;
						display:block;
					}
				}
				.T-title-box{
					color:#707070;
					font-size:0.12rem;
					line-height:0.24rem;
					padding-left:0.05rem;
				}
				.T-price-box{
					width:100%;
					padding:0.05rem;
					box-sizing:border-box;
					font-size:0.12rem;
					color:#999;
					overflow:hidden;
					.T-price-left{
						width:70%;
						float:left;
						.T-new-price{
							color:#000;
							font-weight:bold;
						}
						.T-old-price{
							text-decoration:line-through;
							margin-left:0.03rem;
						}
					}
					.T-price-right{
						float:right;
						width:30%;
						p{
							width:100%;
							text-align:center;
							span{
								color:#ff0068;
							}
						}
					}
				}
				&:nth-child(even){
					float:right;
				}
			}
		}
		.T-sale-box{
			width:100%;
			background:#f5f5f5;
			.T-sale-list{
				width:100%;
				margin-bottom:.1rem;
				.T-img-box{
					width:100%;
					position:relative;
					img{
						width:100%;
						display:block;
					}
					.T-mask-box{
						width:60%;
						background:rgba(255,255,255,0.8);
						position:absolute;
						left:20%;
						top:30%;
						bottom:10%;
						border-radius:0.06rem;
						display:-webkit-box;
						-webkit-box-align:center;
						-webkit-box-orient:vertical;
						-webkit-box-pack:center;
						h4{
							font-size:.12rem;
							color:#000;
							font-weight:bold;
							margin-top:.08rem;
						}
						span{
							background:#F4436D;
							color:#fff;
							padding:0 0.1rem;
							border-radius:0 0.07rem 0 0.1rem;
							-webkit-transform:scale(0.7);
							display:block;
							position:absolute;
							right:-5%;
							top:-2%;
						}
						.T-text-desc{
							color:#333;
							font-size:.12rem;
							line-height:.2rem;
						}
						.T-text-upRate{
							font-size:.12rem;
							color:#F4436D;
							line-height:.2rem;
						}
					}
				}
				.T-list-main{
					width:100%;
					display:-webkit-box;
					background:#fff;
					.T-list-item{
						-webkit-box-flex:1;
						display:-webkit-box;
						-webkit-box-orient:vertical;
						padding:.1rem 0.05rem;
						.T-item-img{
							width:100%;
							img{
								display:block;
								width:100%;
							}
						}
						.T-item-title{
							line-height:.24rem;
							font-size:.12rem;
							width:98%;
							overflow:hidden;
							text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    						white-space: nowrap;/*强制不换行*/
						}
						.T-item-price{
							font-size:.12rem;
							color:#F4436D;
							text-align:center;
						}
					}
				}
			}
		}
	}
</style>