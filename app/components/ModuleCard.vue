<script setup lang="ts">
    const props = defineProps<{ value: string }>();
</script>


<template>
    <li>
        <p><span class="text-orange">&#10070;</span> {{ props.value }}</p>
    </li>
</template>


<style scoped>

</style>