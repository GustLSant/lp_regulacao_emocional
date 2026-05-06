<script setup lang="ts">
    const props = defineProps<{ iconName: string, title: string, description: string }>();
</script>


<template>
    <div class="flex-1 flex items-center gap-1 max-w-[300px]">
        <Icon :name="props.iconName" size="48" class="text-orange" />

        <div class="flex flex-col gap-0.5">
            <p class="leading-[18px]">{{ props.title }}</p>
            <p class="leading-tight text-sm font-light opacity-60">{{ props.description }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>