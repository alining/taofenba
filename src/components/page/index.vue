<template>
	<div class="T-index-page">
		<header-bar :headerType="1"></header-bar>
		<menu-list></menu-list>
		<msg-list :listMsgType="1" :listMsgUrl='"http://localhost:3000/data"'></msg-list>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import menuList from "@/components/base/menuList"
	import msgList from "@/components/base/msgList"
	export default{
		data (){
			return {
				listData : []
			}
		},
		components : {
			headerBar : headerBar,
			menuList : menuList,
			msgList : msgList
		}
	}
</script>

<style lang="less">
	
</style>