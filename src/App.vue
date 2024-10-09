<script setup>
import Calculator from "@/components/Calculator.vue";
import StudentCard from "@/components/StudentCard.vue"

import {ref} from "vue";
import axios from 'axios';


const studentsRequested = ref([])
const showStudents = ref(false)

const studentName = ref('')
const studentLevel = ref(0)

const studentGrades = ref(new Array(6))


function fetch(){
  studentsRequested.value = []
  axios.get('http://localhost:3000/students')
      .then(request =>{
        for (const student of request.data){
          studentsRequested.value.push(student)
        }
      })
      .catch(error => console.log(error))

}
fetch()

function post(){
  if(saveAble()){
    let student ={
      name: studentName.value,
      level: studentLevel.value,
      grades: studentGrades.value
    }
    axios.post('http://localhost:3000/students',student)
        .then(response =>{
          console.log("Student added:", response.data)
        })
        .catch(error => console.log("Error adding student: ", error))

  }
  fetch()
}

function saveAble(){
  let a = studentName.value !==""
  let b = studentLevel.value>0
  let c = studentGrades.value.length === 6
  let d = true
  for (const grade of studentGrades.value){
    if(grade>7 || grade<1){
      d=false
    }
  }

  console.log(a,b,c,d)
  return a&&b&&c&&d
}

function updateGrades(newGrades){
  studentGrades.value = newGrades
}

function toggleShowStudents(){
  showStudents.value = !showStudents.value
}

function createDefault(){
  studentName.value = "name"
  studentGrades.value = [5,5,5,5,5,5]
  studentLevel.value = 2
}
</script>

<template>
  <main class="app">
    <button @click="createDefault()">Add default student</button>
    <section>
      <div class="student">
        <div class="student-info-container">
          <p>Nombre: </p>
          <input type="text" v-model="studentName">
        </div>
        <div class="student-info-container">
          <p>Nivel: </p>
          <input type="number" min="1" v-model="studentLevel">
        </div>
      </div>

      <div class="calculator">
        <Calculator @update-grade="updateGrades" :studentGrades="studentGrades"></Calculator>
      </div>

      <div class="buttons">
        <button @click="post">save</button>
      </div>
    </section>


    <section class="item-display">
      <button @click="toggleShowStudents()">showStudents</button>
      <div class="students-display" v-if="showStudents">
        <div class="header-students">
          <p>Name</p>
          <p>Level</p>
          <p>Grades</p>
        </div>
        <StudentCard v-if="showStudents" v-for="student in studentsRequested" :student="student"></StudentCard>
      </div>
    </section>
  </main>

</template>

<style scoped>
.app{
  background-color: #222222;
  border-radius: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.student{
  display: flex;
}
.students-display{
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 0.5rem;
}
.header-students{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
</style>
