<script setup>

const props = defineProps({
  student:Object,
  key: String
})

</script>

<template>
  <main>
    <section class="student">
      <p class="name">{{student.name}}</p>
      <p class="level">{{student.level}}</p>
      <p class="grades">{{student.grades}}</p>
    </section>
  </main>
</template>

<style scoped>
.student {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.name {
  text-align: left;
}

.level {
  text-align: center;
}

.grades {
  text-align: right;
}
</style>