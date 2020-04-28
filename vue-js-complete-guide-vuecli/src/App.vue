<template>
  <div>
    <LikeHeader>
      <h2>みなさん</h2>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いいします</p>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
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
}
h1 {
  color: blue;
}
</style>
