<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  data() {
    return {
      number: 12,
    };
  },
  components: {
    LikeHeader,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}</style
>>
