// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router/index'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    num:666
  },
  mutations:{
    increase(state){
      state.num = state.num + 20
    },
    decrease(state){
      state.num = state.num - 20
    }
  },
  actions:{
    addAction(context){
      setTimeout(()=>{
        context.commit('increase')
      },2000)
    },
    decreaseAction(context){
      setTimeout(()=>{
        context.commit('decrease')
      },2000)
    }
  },
  getters:{
    getNum(state){
      return state.num>0?state.num:0
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:rt,
  store
})
