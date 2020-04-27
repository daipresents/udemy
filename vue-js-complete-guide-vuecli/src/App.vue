<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :totalNumber="number"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}</style
>>
