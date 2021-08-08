<template>
  <div>
    <select>
      <option v-for="(item, index) in items" :key="`item-${index}`"  :value="index">Pure CSS Select</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue"
export default defineComponent({
  name: "SZSelect",
  props: {
    items: Array,
  }
})
</script>

<style lang="postcss">
select {
  @apply ;
}
</style>