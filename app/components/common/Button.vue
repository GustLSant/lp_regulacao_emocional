<script setup lang="ts">
    const props = defineProps<{ color: 'orange' | 'dark-blue' | 'light-blue'; startIconName?: string, endIconName?: string }>();
</script>


<template>
    <button :class="`flex items-center gap-2 px-4 py-2 bg-${props.color} text-white text-lg rounded-md shadow-md hover:brightness-110 hover:underline hover:cursor-pointer`">
        <Icon v-if="props.startIconName" :name="props.startIconName" size="24" />
        <slot />
        <Icon v-if="props.endIconName" :name="props.endIconName" size="24" />
    </button>
</template>


<style scoped>
    button {
        transition: filter 0.15s;
    }
</style>