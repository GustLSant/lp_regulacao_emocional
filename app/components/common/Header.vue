<script setup lang="ts">

</script>


<template>
    <div class="flex flex-col items-center gap-3 self-stretch">
        <p class="text-2xl font-playfair font-semibold text-orange text-shadow-light tracking-[4px]">
            <slot />
        </p>
        <div class="w-full max-w-[100px] h-0.5 bg-orange" />
    </div>
</template>


<style scoped>

</style>