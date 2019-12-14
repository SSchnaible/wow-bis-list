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
      v-for="(item,index) in filteredItems"
      v-bind:key="index"
    >
      <md-table-cell
        v-for="(feature,key) in comparisonFeatures"
        v-bind:key="key"
      >{{ item.comparisonValues[key] }}</md-table-cell>
      <md-table-cell>{{ item.name }}</md-table-cell>
      <md-table-cell>
        <a v-bind:href="`https://classic.wowhead.com/?item=${item.id}`">{{ item.id }}</a>
      </md-table-cell>
      <md-table-cell>{{ item.phase }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SlotData, ComparisonFeature, ItemData } from '../model';
import { PropType } from 'vue';
import _ from 'lodash';

export default Vue.extend({
  name: 'SlotTable',
  props: {
    comparisonFeatures: Object as PropType<{
      [feature: string]: ComparisonFeature;
    }>,
    slotData: Object as PropType<SlotData>,
    phaseFilter: Number,
    sortBy: String,
  },
  computed: {
    filteredItems: function () {
      const items = (this.slotData as any).items as ItemData[];
      const filtered =
        this.phaseFilter === undefined
          ? items
          : _.filter(
            items,
            item => item.phase === undefined || item.phase <= this.phaseFilter
          );
      const sorted =
        this.sortBy === undefined
          ? filtered
          : _.sortBy(filtered, 'comparisonValues.' + this.sortBy).reverse();
      return sorted;
    },
  },
});
</script>

<style scoped>
</style>
