<template>
  <md-app id="app">
    <md-app-content>
      <span class="md-display-1">{{ bisData.title }}</span>
      <transition mode="out-in">
        <router-view v-bind:bisData="bisData" />
      </transition>
    </md-app-content>
  </md-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { BiSListData } from './model';
import BiSData from './../data.json';

export default Vue.extend({
  name: 'App',
  data: function () {
    return {
      bisData: BiSData,
    };
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
