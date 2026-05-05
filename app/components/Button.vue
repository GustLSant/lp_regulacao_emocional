<script setup lang="ts">
    const props = defineProps<{ iconName: string }>();
</script>


<template>
    <button class="flex items-center gap-2 px-4 py-2 bg-light-blue text-white text-lg rounded-md shadow-md hover:brightness-125 hover:underline hover:cursor-pointer">
        <Icon v-if="props.iconName" :name="props.iconName" size="24" />
        <slot />
    </button>
</template>


<style scoped>

</style>