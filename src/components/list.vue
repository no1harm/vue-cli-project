<template>
    <ul>
        <li><h3><router-link to='/world'>To World</router-link></h3></li>
        <li><h3><router-link to='/earth'>To Earth</router-link></h3> </li>
    </ul>
</template>

<script>
export default {
    name:'list'
}
</script>

<style scoped>
ul {
    list-style: none
}
</style>

