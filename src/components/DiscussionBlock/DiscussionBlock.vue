<template>
  <SZBlockContainer>
    <div class="flex mb-4">
      <img src="images/placeholder.png" />
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
    <p class="text-lg font-semibold overflow-hidden mb-6 flex-1">{{ description }}</p>
    <div>
      <n-scrollbar x-scrollable>
        <div class="tag-container">
          <div v-for="tag in tags" class="tag">
            <p>{{ tag.icon }} {{ tag.name }}</p>
          </div>
        </div>
      </n-scrollbar>
    </div>
  </SZBlockContainer>
</template>

<script setup lang="ts">
import { NScrollbar } from "naive-ui";

import { SZBlockContainer } from "@/components";

defineProps({
  title: String,
  description: String,
  tags: [Object],
});
</script>

<style scoped lang="postcss">
.title {
  @apply select-none font-bold text-2xl w-full ml-4;
  @apply overflow-hidden overflow-ellipsis break-all;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tag-container {
  @apply flex truncate pb-5;
}

.tag {
  @apply bg-base border-1 border-base rounded-4xl;
  @apply px-6 py-1 mr-4 last:mr-0;
}

.tag p {
  @apply text-white font-medium;
}
</style>
