<template>
	<div class="T-sale-page">
		<nav-bar :navBarType="2"></nav-bar>
		<msg-list class="T-sale-list" :listMsgType="2" :listMsgUrl='"http://localhost:3000/sale"'></msg-list>
	</div>
</template>

<script>
	import navBar from "@/components/base/navList"
	import msgList from "@/components/base/msgList"
	export default{
		components : {
			msgList : msgList,
			navBar : navBar
		}
	}
</script>

<style lang="less">
	.T-sale-page{
		width:100%;
	}
</style>