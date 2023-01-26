<template>
  <SZBlockContainer>
    <div class="flex mb-4">
      <img src="images/placeholder.png" />
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
    <p class="font-semibold overflow-hidden mb-6 flex-1">{{ description }}</p>
    <div class="tag-container">
      <div class="tag">
        <p>🔰 tag name</p>
      </div>
      <div class="tag">
        <p>🔰 tag name</p>
      </div>
      <div class="tag">
        <p>🔰 tag name</p>
      </div>
      <div class="tag">
        <p>🔰 tag name</p>
      </div>
    </div>
  </SZBlockContainer>
</template>

<script setup lang="ts">
import { SZBlockContainer } from "@/components";

defineProps({
  title: String,
  description: String,
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
  @apply flex truncate pb-3;

  overflow-x: scroll;
}

.tag-container::-webkit-scrollbar {
  height: 3px;
  background: transparent;
}

.tag-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #6B7280;
}

.tag {
  @apply bg-base border-1 border-base rounded-xl;
  @apply px-4 mr-4 last:mr-0;
}

.tag p {
  @apply text-white font-medium;
}
</style>
