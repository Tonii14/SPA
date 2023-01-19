<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
const counter = ref(0);
const router = useRouter();
</script>

<template>
  <main class="container">
    <h1>I dalje je gumb gore s istom vrijednosti</h1>
  </main>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
