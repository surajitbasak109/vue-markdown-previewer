<template>
  <div class="toolbar">
    <div>
      <i class="fa fa-free-code-camp"></i>
      {{ text }}
    </div>
    <i :class="icon" @click="onClick"></i>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    text: String,
    icon: String,
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.toolbar {
  background: #bfbfbf;
  padding: 4px 4px 3px 3px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbar i {
  cursor: pointer;
}
.toolbar .fa-compress,
.toolbar .fa-arrows-alt {
  margin-right: 5px;
}
</style>
