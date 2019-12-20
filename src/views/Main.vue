<template>
  <div>
    <div class="input-fields">
      <md-field class="input-field">
        <label>Sort by</label>
        <md-select v-model="sortBy">
          <md-option
            v-for="(option,key) in bisData.comparisonFeatures"
            v-bind:key="key"
            v-bind:value="key"
          >{{ option.title }}</md-option>
        </md-select>
      </md-field>
      <md-field class="input-field">
        <label>Phase</label>
        <md-select v-model="phaseFilter">
          <md-option
            v-for="phase in allPhases"
            v-bind:key="phase"
            v-bind:value="phase"
          >{{ phase }}</md-option>
        </md-select>
      </md-field>
    </div>

    <md-tabs
      class="md-primary"
    >
      <md-tab
        v-for="slot in bisData.slots"
        v-bind:key="slot.title"
        v-bind:md-label="slot.title"
      >
        <SlotTable
          v-bind:comparisonFeatures="bisData.comparisonFeatures"
          v-bind:slotData="slot"
          v-bind:sortBy="sortBy"
          v-bind:phaseFilter="phaseFilter"
        />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BiSListData, SlotData } from '../model';
import { PropType } from 'vue';
import SlotTable from '@/components/SlotTable.vue';
import _ from 'lodash';

export default Vue.extend({
  name: 'Main',
  components: {
    SlotTable,
  },
  props: {
    bisData: Object as PropType<BiSListData>,
  },
  data: function () {
    return {
      sortBy: undefined,
      phaseFilter: undefined,
    };
  },
  computed: {
    allPhases: function () {
      return _(this.bisData.slots)
        .flatMap(slot => slot.items)
        .map(item => item.phase)
        .filter(phase => phase !== undefined)
        .uniq()
        .sort()
        .value()
        .reverse();
    },
  },
});
</script>

<style scoped>
.input-fields {
  display: flex;
  justify-content: center;
  margin: 15px 0px;
  max-width: 100%;
  flex-wrap: wrap;
}

.input-field {
  margin: 10px;
}
</style>
