<template>
  <div class="container">
    <div class="Chart">
      <h1 style="text-align:center;">qm별 서치스</h1>
      <qm-search-chart device= "mb" />
      
      <h1 style="text-align:center;">avg별 서치스</h1>
      <avg-search-chart device="mb" />
    </div>
  </div>
</template>

<script>
  import QmSearchChart from '../chart/QmSearchChart'
  import AvgSearchChart from '../chart/AvgSearchChart'

  export default {
    components: {
      QmSearchChart,
      AvgSearchChart
    }
  }
</script>

<style>
  .container {
    max-width: 2000px;
    margin: 0 auto;
  }
  h1 {
    font-family: 'Helvetica', Arial;
    color: #464646;
    text-transform: uppercase;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
  }
  .Chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>