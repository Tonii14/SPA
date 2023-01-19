<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";

const route = useRoute();
const { id } = route.params;
</script>

<template>
  <div class="container"></div>
</template>
