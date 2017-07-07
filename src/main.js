// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import Vuex from "vuex"

Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

//底部加载
Vue.directive("scroll",{
	bind:function(el,binding){
		window.onscroll=function(){
			var windowHeight = window.innerHeight,
				bodyH = document.body.offsetHeight,
				scrollTop = document.body.scrollTop;
	        if(scrollTop+windowHeight == bodyH){
	            binding.value();
	        }
		}
	}
})
//吸附顶部
Vue.directive("scrolls",{
	twoWay: true,
	bind:function(el,binding){
		document.addEventListener("scroll",function(){
			var navBarTop = el.offsetTop;
			if(navBarTop <= 0){
	            el.style.position = "fixed";
	            el.style.top = 0;
	        }else{
	            el.style.position = "static";
	        }
		},false)
		document.addEventListener("touch",function(){
			var navBarTop = el.offsetTop,
				elSbiling = document.querySelector(".T-sale-list");
			if(navBarTop <= 0){
	            el.style.position = "fixed";
	            el.style.top = 0;
	            elSbiling.style.paddingTop = "44px";
	        }else{
	            el.style.position = "static";
	        }
		},false)
	},
	unbind : function(el,binding){
		document.removeEventListener('scroll', function(){
			return false;
		})
	}
})

//vuex状态管理模式 
var store = new Vuex.Store({
	state : {
		page : 0
	},
	mutations : {
		scrollBom(state,n){
			state.page = n;
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
