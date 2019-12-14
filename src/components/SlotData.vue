<template>
  <md-table>
    <md-table-row>
      <md-table-head
        v-for="(feature,key) in comparisonFeatures"
        v-bind:key="key"
      >{{feature.title}}</md-table-head>
      <md-table-head>Name</md-table-head>
      <md-table-head>Link</md-table-head>
      <md-table-head>Phase</md-table-head>
    </md-table-row>

    <md-table-row
      v-for="(item,index) in slotData.items"
      v-bind:key="index"
    >
      <md-table-cell
        v-for="(feature,key) in comparisonFeatures"
        v-bind:key="key"
      >{{ item.comparisonValues[key] }}</md-table-cell>
      <md-table-cell>{{ item.name }}</md-table-cell>
      <md-table-cell>{{ item.id }}</md-table-cell>
      <md-table-cell>{{ item.phase }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SlotData, ComparisonFeature } from '../model';
import { PropType } from 'vue';

export default Vue.extend({
  name: 'SlotData',
  props: {
    comparisonFeatures: Array as PropType<ComparisonFeature[]>,
    slotData: Object as PropType<SlotData>
  }
});
</script>

<style scoped>
</style>
