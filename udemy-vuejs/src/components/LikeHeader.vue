<template>
  <div>
    <slot name="title">
      <h2>default title</h2>
    </slot>
    <slot></slot>
    <hr>
    <p>good count</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>