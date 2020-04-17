<template>
  <div id="app">
    <CoronaPlot v-for="(_, i) of plots" :key="i" :index="i" />
    <button @click="onAddPlot">add plot</button>
  </div>
</template>

<script src="./App.ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
