<script setup>
import {ref} from "vue";

const nota1 = ref(0)
const nota2 = ref(0)
const nota3 = ref(0)
const nota4 = ref(0)
const nota5 = ref(0)
const nota6 = ref(0)
const nombre = ref('')
const level = ref(0)

const promedio = ref(0)

const calcularPromedio = () =>{
  promedio.value =
      Math.max(parseFloat((parseFloat(nota1.value)*0.2
      +parseFloat(nota2.value)*0.2
      +parseFloat(nota3.value)*0.2
      +parseFloat(nota4.value)*0.2
      +parseFloat(nota5.value)*0.1
      +parseFloat(nota6.value)*0.1).toFixed(2)),1)

}
</script>

<template>
  <div class="student">
    <div class="info">
      <div>
        <span>Nombre: </span>
        <input type="text" id="name" v-model="nombre">
      </div>
      <div>
        <span>Nivel: </span>
        <input class="number-input" type="number" id="level" v-model="level">
      </div>

    </div>

    <div class="grades" @change="calcularPromedio">
      <div class="grade">
        <span>Nota 1:</span>
        <input class="number-input" type="number" v-model="nota1" min="1" max="7">
      </div>
      <div class="grade">
        <span>Nota 2:</span>
        <input class="number-input" type="number" v-model="nota2" min="1" max="7">
      </div>
      <div class="grade">
        <span>Nota 3:</span>
        <input class="number-input" type="number" min="1" max="7" v-model="nota3">
      </div>
      <div class="grade">
        <span>Nota 4:</span>
        <input class="number-input" type="number" min="1" max="7" v-model="nota4">
      </div>
      <div class="grade">
        <span>Nota 5:</span>
        <input class="number-input" type="number" min="1" max="7" v-model="nota5">
      </div>
      <div class="grade">
        <span>Nota 6:</span>
        <input class="number-input" type="number" min="1" max="7" v-model="nota6">
      </div>
      <button style="font-family: Monocraft" @click="calcularPromedio">Calcular Promedio</button>
      <span>El promedio es:{{promedio}}</span>
    </div>
  </div>
</template>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input{
    border-radius: 0.75rem;
    font-size: large;
  }

  .info{
    display: flex;
    gap: 1rem;
  }
  .number-input{
    width: 3rem;
  }

  .student{
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: Monocraft;
  }
  .grades{
    display: grid;
    row-gap: 1rem;
    column-gap: 0.1rem;
    grid-template-columns: auto auto;
  }

</style>