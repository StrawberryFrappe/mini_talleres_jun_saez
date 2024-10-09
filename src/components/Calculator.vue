<script setup>

import {ref} from "vue";

const props = defineProps({
  studentGrades: {
    type: Object,
    required: true,
    default: () => ({
      grade1:ref(0),
      grade2:ref(0),
      grade3:ref(0),
      grade4:ref(0),
      grade5:ref(0),
      grade6:ref(0)
    })
  }
})
</script>

<template>
  
</template>

<style scoped>

</style>