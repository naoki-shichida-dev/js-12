<template>
  <p v-border:solid.round="'5px'">MyHome</p>
</template>

<script>
export default {
  directives: {
    data() {
      return {
        temData: "hello",
        title: "welcome to Tokyo"
      }
    },
    filters: {
      lowerCase(value) {
        return value.lowerCase();
      }
    },
    border(el, binding) {
        el.style.border = "solid black 2px";
        el.style.borderWidth = binding.value
        el.style.borderStyle = binding.arg
        if (binding.modifiers.round) {
          el.style.borderRadius = "0.5rem"
        }
      }
    }
}
</script>