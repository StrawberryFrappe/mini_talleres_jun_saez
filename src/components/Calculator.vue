<script setup>

import {ref, watch} from "vue";

const emit = defineEmits(['update-grade'])

const avg = ref(1)

const props = defineProps({
  studentGrades:{
    type:Object
  }
})

const localGrades = ref(new Array(6));

watch(() => props.studentGrades, (newGrades, oldGrades) => {
  if (JSON.stringify(newGrades) !== JSON.stringify(oldGrades)){
    console.log("LocalGrades Updated from Parent")
    localGrades.value = newGrades;
  }
}, { deep: true });

function calculate(){
  avg.value=
      parseFloat((parseFloat(localGrades.value[0])*0.2
      +parseFloat(localGrades.value[1])*0.2
      +parseFloat(localGrades.value[2])*0.2
      +parseFloat(localGrades.value[3])*0.2
      +parseFloat(localGrades.value[4])*0.1
      +parseFloat(localGrades.value[5])*0.1).toFixed(2))

  updateGrade()
}

function updateGrade(){
  emit('update-grade',localGrades.value)
  console.log("StudentGrades Updated from Child")
}
</script>

<template>
  <p>Promedio: {{avg}}</p>
  <section class="grades" >
    <div>
      <span>Nota 1: </span>
      <input type="number" @input="calculate" v-model="localGrades[0]">
    </div>
    <div>
      <span>Nota 2: </span>
      <input type="number" @input="calculate" v-model="localGrades[1]">
    </div>
    <div>
      <span>Nota 3: </span>
      <input type="number" @input="calculate" v-model="localGrades[2]">
    </div>
    <div>
      <span>Nota 4: </span>
      <input type="number" @input="calculate" v-model="localGrades[3]">
    </div>
    <div>
      <span>Nota 5: </span>
      <input type="number" @input="calculate" v-model="localGrades[4]">
    </div>
    <div>
      <span>Nota 6: </span>
      <input type="number" @input="calculate" v-model="localGrades[5]">
    </div>
  </section>
</template>

<style scoped>
.grades{
  font-family: "Monocraft Nerd Font";
  column-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

input{
  width: 1.5rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>