<template>
    <div>
        <h4>我是子组件</h4>
        <span>{{ msg }}</span>
        <button @click="sendFromChild">向父组件传递消息</button> <br>
        <button @click="getStoreData">拿到全局状态属性</button><br>
            {{ storeData }} <br>
        目前全局状态属性 num: {{ defalutStoreData}} <br>
        mutations:
        <button @click="changeStoreData">改变全局状态属性 -20</button>
        actions:
        <button @click="useActions">改变全局状态属性 -20</button>
    </div>
</template>

<script>
export default {
    name:'child',
    data:function(){
        return {
            msgFromChild:'这是子组件发出来的消息',
            storeData:''
        }
    },
    props:[
        'msg'
    ],
    methods:{
        sendFromChild:function(){
            this.$emit('getFromChild',this.msgFromChild)
        },
        getStoreData:function(){
            this.storeData = this.$store.state.num
        },
        changeStoreData(){
            this.$store.commit('decrease')
        },
         useActions(){
            this.$store.dispatch('decreaseAction')
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
div {
    height:500px;
    width: 250px;
    border: 1px solid darkcyan;
    display: block;
}
button {
    margin: 20px 0 10px;
}
</style>