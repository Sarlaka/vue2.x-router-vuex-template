<!--
 * @Author: duchengdong
 * @Date: 2020-08-28 12:03:52
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 16:39:18
 * @Description: 
-->
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
	font-size: 32px;
}
</style>
