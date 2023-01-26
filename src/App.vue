<template>
  <main class="grid gap-[40px]">
    <div class="flex flex-col gap-[20px]">
      <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
      <SZBlockContainer> cascs </SZBlockContainer>
    </div>
    <div class="flex flex-col gap-[20px]">
      <SZHighLightContainer hoverAnimtion color="#2EABFF">
        #2EABFF
      </SZHighLightContainer>
      <SZHighLightContainer hoverAnimtion>
        #2BFFC4 (Default)
      </SZHighLightContainer>
      <SZHighLightContainer
        hoverAnimtion
        color="#EFF542"
        lightWidth="15"
        lightPosition="right"
      >
        #EFF542
      </SZHighLightContainer>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[6vw]">
      <SZDiscussionBlock
        title="討論串標題最多兩行, 討論串標題最多兩行, 討論串標題最多兩行,"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam consectetur cumque exercitationem, tempora nostrum dolore illo laudantium autem debitis, quis similique, cum et? Cumque, officia veritatis? Iusto, accusantium expedita."
      />
      <SZDiscussionBlock
        title="Exampleeeeeeeeeeeeeeeeeeeeeeeeee"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
      />
      <SZDiscussionBlock
        title="Example"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  SZBlockContainer,
  SZHighLightContainer,
  SZDiscussionBlock,
} from "@/components";
</script>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full;
  @apply bg-primary-bg;
}

#app {
  @apply px-12 lg:px-42 py-12;
}
</style>
