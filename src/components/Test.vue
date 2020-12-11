<template>
  <div id="testMsg" @click="onClick" class="div flex justify-center align-center">{{ msg }}</div>
</template>

<script>
  export default {
    name: 'Test',
    props: {
      msg: String,
    },
  }
</script>

<style scoped></style>
