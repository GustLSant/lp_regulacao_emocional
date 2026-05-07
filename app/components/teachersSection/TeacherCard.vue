<script setup lang="ts">
    const props = defineProps<{ imgUrl: string, name: string }>();
</script>


<template>
    <div class="flex-1 rounded-tl-xl rounded-br-xl border border-orange p-1.5">
        <div class="p-4 text-white text-center bg-orange rounded-tl-xl rounded-br-xl shadow-md">
            <p class="leading-tight">{{ props.name }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>