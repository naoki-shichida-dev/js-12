<template>
  <div>
    <p>good({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    },
    testProps: {
      type: String
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>