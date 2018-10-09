<template>
  <div class="hello">
    <h1>hello earth</h1>
    <h3>{{ $route.params.myMsg}}</h3>
    <span>axios :</span>
    <button @click='getData'>GET 请求</button>
    <button @click='postData'>POST 请求</button>
    <ul>
      <li v-for='item in items'>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getData:function(){
      // 此处不用箭头函数的话，也可以刚进来的时候声明 let self = this，然后赋值给 self.items
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:10
        }
      })
        .then((response)=>{
          console.log(response)
          this.items = response.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    postData:function(){
      this.$http.post('',qs.stringify({
          page:1,
          limit:10
      })
      )
        .then((response)=>{
          console.log(response)
          this.items = response.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>