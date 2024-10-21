<script setup>

import router from './main.js'
import {ref} from "vue";

const guess = ref('')
</script>

<template>
  <div>
    <button @click="router.push('/')">boton</button>
    <button @click="router.push('/dos')">boton</button>
    <button @click="router.push('/tres')">boton</button>
    <button @click="router.push('/cuatro')">boton</button>
    <button @click="router.push('/cinco')">boton</button>
  </div>
  <router-view></router-view>
  <input type="text" v-model="guess">
  <button @click=" function (){
    if (guess === 'Tengo ganas de un cafe'){
      guess = 'correcto'
    } else {
      guess.value = 'Intenta nuevamente'
    }
  }">comprobar</button>
</template>

<style scoped>

</style>
