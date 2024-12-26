<template>
  <div>
    {{ msg }}
  </div>
</template>

<script setup>
import {ref} from 'vue'

const msg = ref("这是msg-变化das")

</script>

<style scoped>
 div {
   color: red;
 }
</style>