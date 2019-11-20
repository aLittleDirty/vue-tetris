<template>
<div class="levelChoice">
    <p>请输入游戏级别</p>
    <input type="number" min="1" max="6" v-model="level"/>
    <button @click="updateLevel">确定</button>
</div>
</template>
<script src="./index.js"></script>
<style scoped>
@import './index.css';
</style>