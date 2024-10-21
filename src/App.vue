<script setup>

import {createRouter as $router} from "vue-router/dist/vue-router.esm-browser.js";
</script>

<template>
  <div>
    <button @click="$router.push('/')">uno</button>
    <button @click="$router.push('/dos')">dos</button>
    <button @click="$router.push('/tres')">tres</button>
    <button @click="$router.push('/cuatro')">cuatro</button>
    <button @click="$router.push('/cinco')">cinco</button>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>
