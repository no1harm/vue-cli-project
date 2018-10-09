<template>
    <ul>
        <li><h3><router-link :to='{name:"world",params:{myMsg:"你好世界"}}'>To World</router-link></h3></li>
        <li><h3><router-link :to='{name:"earth",params:{myMsg:"你好地球"}}'>To Earth</router-link></h3> </li>
    </ul>
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
</style>

