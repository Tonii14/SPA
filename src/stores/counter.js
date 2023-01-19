import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 1 };
  },
  actions: {
    increment(val = 1) {
      this.count = val;
    },
    async WaitandAdd() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
