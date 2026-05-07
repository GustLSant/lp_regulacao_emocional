<script setup lang="ts">
    const props = defineProps<{ iconName: string, title: string, description?: string }>();
</script>


<template>
    <div class="flex-1 flex items-center gap-2.5 max-w-[300px]">
        <Icon :name="props.iconName" size="48" class="shrink-0 text-white" />

        <div class="flex flex-col gap-1">
            <p class="leading-[18px]">{{ props.title }}</p>
            <p v-if="props.description" class="leading-tight text-sm font-light opacity-60">{{ props.description }}</p>
            <slot />
        </div>
    </div>
</template>


<style scoped>

</style>