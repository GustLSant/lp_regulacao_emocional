<script setup lang="ts">

</script>


<template>
    <div class="flex flex-col items-center gap-3 self-stretch">
        <p class="text-2xl font-playfair font-semibold text-orange text-center text-shadow-light tracking-[4px]">
            <slot />
        </p>
        <div class="w-full max-w-[200px] h-0.5 orange-gradient" />
    </div>
</template>


<style scoped>
    .orange-gradient {
        background-image: linear-gradient(to right, transparent, #B8643E, transparent);
        opacity: 60%;
    }
</style>