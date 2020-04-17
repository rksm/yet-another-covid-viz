<template>
  <div>
    <button @click="onRemovePlot">remove</button>
    <CountrySelector :index="index" />
    <Plotly :data="countryData" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script src="./CoronaPlot.ts"></script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
