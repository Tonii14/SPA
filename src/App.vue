<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter";
import { ref } from "vue";
import { useRouter } from "vue-router";
const counter = ref(0);
const store = useCounterStore();
const router = useRouter();
</script>

<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Gumb</RouterLink>
      <RouterLink active-class="active" to="about">iDaljegumb</RouterLink>
    </div>
    <div class="counter">
      <h1>Counter ostaje isti iako se stranice mijenjaju</h1>
      <h2>Count is {{ store.count }}</h2>
      <button @click="store.increment(1)" class="button2">Reset</button>
      <button @click="store.WaitandAdd(1)">Stisni me za +</button>
      <button @click="sendEvent">Alert counter</button>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.active {
  color: green;
}
.links {
  padding: 20px;
}
.links a {
  font-weight: bold;
  margin: 0 5px;
}
</style>
