<script setup lang="ts">
    const props = defineProps<{ title: string, content: string }>();
    const open = ref<boolean>(false);
</script>


<template>
    <button
        @click="open = !open"
        class="flex items-stretch rounded-md shadow-md border border-orange/20"
    >
        <div class="basis-1 self-stretch rounded-l-md bg-orange" />

        <div class="basis-1 grow flex flex-col p-2 overflow-hidden">
            <div class="flex items-center justify-between">
    
                <div class="flex items-center gap-2 grow overflow-hidden">
                    <div class="hidden sm:block rounded-full p-1 bg-light-green h-[32px]">
                        <Icon name="mdi:question-mark-circle-outline" size="24" class="text-white" />
                    </div>
                    <p class="grow overflow-x-auto whitespace-nowrap text-left uppercase tracking-wider text-dark-blue">
                        {{ props.title }}
                    </p>
                </div>
    
                <Icon name="mdi:chevron-down" size="24" class="shrink-0" />
    
            </div>
    
            <p
                :class="(open) ? `mt-2 opacity-100 overflow-y-auto` : 'mt-0 opacity-0 overflow-y-hidden'"
                :style="{ maxHeight: (open) ? '100px' : '0px' }"
                class="accordion text-justify pr-2"
            >
                {{ props.content }}
            </p>
        </div>

    </button>
</template>


<style scoped>
    .accordion {
        transition: max-height 0.3s ease-in-out, margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
</style>