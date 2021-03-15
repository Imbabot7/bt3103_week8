<template>
    <div>
        <bar-chart></bar-chart>
        <line-chart></line-chart>
    </div>
</template>

<script>
import barchart from './charts/BarChart.vue'
import linechart from './Axios.vue'
export default {
    components:{
        'bar-chart':barchart,
        'line-chart':linechart
    }
 
}
    

</script>

<style>

</style>