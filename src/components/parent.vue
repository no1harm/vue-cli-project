<template>
    <div>
        <div id='parent'>
            <h4>我是父组件</h4>
            {{ msgFromChild}}
            <br>
            <button @click="getStoreData">拿到全局状态属性</button><br>
            {{ storeData }} <br>
            目前全局状态属性 num: {{ defalutStoreData}} <br>
            mutations:
            <button @click="changeStoreData">改变全局状态属性 +20</button>
            actions:
            <button @click="useActions">改变全局状态属性 +20</button>
            getters:
            <button>改变全局状态属性</button>
        </div>
        <child :msg='fromParent' @getFromChild='getChildMsg'></child>
    </div>
</template>

<script>
import child from './child'
export default {
    name:'parent',
    components:{
        child
    },
    data:function(){
        return {
            fromParent:'我是父组件传递过来的信息',
            msgFromChild:'',
            storeData:''
        }
    },
    methods:{
        getChildMsg:function(value){
            this.msgFromChild = value
        },
        getStoreData:function(){
            this.storeData = this.$store.state.num
        },
        changeStoreData(){
            this.$store.commit('increase')
        },
        useActions(){
            this.$store.dispatch('addAction')
        }
    },
    computed:{
        defalutStoreData:function(){
            return this.$store.state.num
        }
    }
}
</script>

<style scoped>
#parent{
    height: 500px;
    width: 250px;
    border: 1px solid red;
    display: block;
}
div {
    display: flex;
    align-items: center;
}
button{
    margin: 20px 0;
}
</style>