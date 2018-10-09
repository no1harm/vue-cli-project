import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
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