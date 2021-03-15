<template>
  <div class="chart">
    <h1>Line Chart</h1>
    <graph></graph>
  </div>
</template>

<script>
import Graph from "./Axios.js";
export default {
  components: {
    'graph':Graph
  }
};
</script>

<style>
</style>