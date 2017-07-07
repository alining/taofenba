<template>
	<div class="T-nav-page">
        <section v-if="navBarType==1" class="T-nav-bar">
            <nav class='T-nav-box' ref="clickBox">
                <a href="javascript:;" v-for='(item,index) in navList' :class='index == 0 ? "on" : ""' @click="activeClick($event)">{{item.name}}</a>
            </nav>
            <div class='T-arrow-box' @click="toggleArrow()" >
                <img src='../../assets/image/jt01.png' v-if="downArrow"/>
                <img src='../../assets/image/jt02.png' v-if="topArrow"/>
            </div>
        </section>
		<section v-if="navBarType==2" class="T-nav-sale" v-scrolls>
            <nav class="T-sale-nav" ref="clickBox">
                <a href="javascript:;" v-for="(item,index) in topNav" :class="index==0?'on':''" @click="activeClick($event)" >{{item.name}}</a>
            </nav>
        </section>       
	</div>
</template>

<script>
	export default {
		data () {
            return {
                downArrow : true,
                topArrow : false,
                navList : [
                    {
                        name : "全部"
                    },
                    {
                        name : "女装"
                    },
                    {
                        name : "男装"
                    },
                    {
                        name : "内衣"
                    },
                    {
                        name : "美妆"
                    },
                    {
                        name : "居家"
                    }
                ],
                topNav : [
                    {
                        name : "全部"
                    },
                    {
                        name : "女装"
                    },
                    {
                        name : "男装"
                    },
                    {
                        name : "内衣"
                    },
                    {
                        name : "美妆"
                    },
                    {
                        name : "居家"
                    },
                    {
                        name : "母婴童装"
                    },
                    {
                        name : "食品"
                    },
                    {
                        name : "鞋包配饰"
                    },
                    {
                        name : "数码电器"
                    },
                    {
                        name : "文体户外"
                    },
                    {
                        name : "最后疯抢"
                    }
                ]
            }
        },
        props : {
        	navBarType : {
                type : Number
            }
        },
        methods : {
            activeClick(event){
                var thisDom = event.target,
                    thisParent = this.$refs.clickBox,
                    thisChild = thisParent.querySelectorAll("a");
                for(var i=0;i<thisChild.length;i++){
                    thisChild[i].className = "";
                }
                thisDom.className = "on"
            },
            toggleArrow(event){
                if(this.downArrow){
                    this.downArrow = false;
                    this.topArrow = true;
                }else{
                    this.downArrow = true;
                    this.topArrow = false;
                }
                
            }
        }
	}
</script>

<style lang="less">
	.T-nav-page{
        height:.44rem;
        line-height: .44rem;
        overflow:hidden;
        .T-nav-bar{
            display: -webkit-box;  
            -webkit-box-pack: justify;
            .T-nav-box{
                padding:0 .1rem;
                -webkit-box-flex: 1;
                display: -webkit-box;
                a{
                    display: block;
                    -webkit-box-flex: 1;
                    color:#3d4245;
                    text-align:center;
                    &.on{
                        color:#f53e7b;
                    }
                }
            }
            .T-arrow-box{
                width:.3rem;
                display: -webkit-box;
                -webkit-box-align: center;
                img{
                    display: block;
                    width:60%;
                }
            }
        }
        .T-nav-sale{
            height:.44rem;
            overflow-x:scroll;
            z-index:100;
            .T-sale-nav{
                display:-webkit-box;
                height:.44rem;
                -webkit-box-align:center;
                background:#F5F5F5;
                color:#666;
                font-size:.12rem;
                a{
                    display:block;
                    width:15%;
                    line-height:.44rem;
                    text-align:center;
                    padding:0 .05rem;
                    &.on{
                        color:#F4436D;
                    }
                }
            }
        }        
    }
</style>