<template>
    <div id='link'>
        <h3>router-link</h3>
        <ul>
            <li><button><router-link :to='{name:"world",params:{myMsg:"你好世界"}}'>To World</router-link></button></li>
            <li><button><router-link :to='{name:"earth",params:{myMsg:"你好地球"}}'>To Earth</router-link></button> </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'list'
}
</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 0px;
}
li{
    margin: 10px;
}
a {
    text-decoration: none;
}
</style>

