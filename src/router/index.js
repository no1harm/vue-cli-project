import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

// 引入 vue-router
Vue.use(router)

export default new router({
    
    // 请注意这里，是 routes ,不是 router，更不是 routers！
    routes:[
        {
            name:'world',
            path:'/world',
            component:HelloWorld
        },
        {
            name:'earth',
            path:'/earth',
            component:HelloEarth
        }
    ]
})