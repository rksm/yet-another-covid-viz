<template>
  <select @change="onCountryChanged">
    <!-- <option v-for="country in countries" :selected="country == selectedCountry">fooo </option> -->
    <option v-for="country in countries" :key="country" :selected="country == selectedCountry"
      >{{ country }}
    </option>
  </select>
</template>

<script src="./CountrySelector.ts"></script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
