<template>
  <md-tabs>
    <md-tab
      v-for="slot in bisData.slots"
      v-bind:key="slot.title"
      v-bind:md-label="slot.title"
    >
      <SlotData
        v-bind:comparisonFeatures="bisData.comparisonFeatures"
        v-bind:slotData="slot"
      />
    </md-tab>
  </md-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BiSListData } from '../model';
import { PropType } from 'vue';
import SlotData from '@/components/SlotData.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    SlotData
  },
  props: {
    bisData: Object as PropType<BiSListData>
  }
});
</script>

<style scoped>
</style>
