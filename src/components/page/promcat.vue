<template>
	<div class="T-promcat-page">
		<header-bar :headerType="2"></header-bar>
		<nav-list :navBarType="1"></nav-list>
		<msg-list :listMsgType="1" :listMsgUrl='"http://localhost:3000/rebate"'></msg-list>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import navList from "@/components/base/navList"
	import msgList from "@/components/base/msgList"
	export default {
		components : {
			headerBar : headerBar,
			navList : navList,
			msgList : msgList
		}
	}
</script>

<style lang='less'>
	
</style>