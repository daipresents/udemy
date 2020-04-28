<template>
  <div>
    <slot name="title">
      <h2>デフォルトのタイトル</h2>
    </slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
