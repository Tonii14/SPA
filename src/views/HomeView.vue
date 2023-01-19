<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const counter = ref(0);
const router = useRouter();
</script>

<template>
  <div>
    <h1>Zadnji labos iz weba</h1>
  </div>
</template>

<style scoped>
.button2 {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
#h1 {
  color: blue;
}
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
