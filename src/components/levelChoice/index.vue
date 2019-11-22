<template>
<div class="levelChoice">
    <input type="number" min="1" max="6" 
    v-model="level" 
    @blur="updateLevel($event)"
    @keyup.enter="updateLevel($event)"
    @dblclick="showComponent($event)"/>
</div>
</template>
<script src="./index.js"></script>
<style scoped>
@import './index.css';
</style>