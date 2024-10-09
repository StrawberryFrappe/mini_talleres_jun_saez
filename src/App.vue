<script setup>
import Calculator from "@/components/Calculator.vue";
import {ref} from "vue";
import axios from 'axios';

const studentsRequested = ref([])
const studentsPosted = ref([])

const studentName = ref('')
const studentLevel = ref(0)

const studentGrades = {
  grade1:ref(0),
  grade2:ref(0),
  grade3:ref(0),
  grade4:ref(0),
  grade5:ref(0),
  grade6:ref(0),
}

const requestSuccessful = ref(true)

axios.get('http://localhost:3000/students')
    .then(request =>{
      for (const student of request.data){
        studentsRequested.value.push(student)
      }
    })
    .catch(error => console.log(error))


function post(){
  for (const student of studentsPosted.value){
    axios.post('http://localhost:3000/students',student)
        .then(response =>{
          console.log("Student added:", response.data)
        })
        .catch(error => console.log("Error adding student: ", error))
  }
}


</script>

<template>
  <main>
    <section class="calculator">
      <div class="student-info-container">
      </div>
      <Calculator ></Calculator>
    </section>
    <section class="item-display">

    </section>
  </main>

</template>

<style scoped>

</style>
