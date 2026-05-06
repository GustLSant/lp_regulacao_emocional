<script setup lang="ts">
    const props = defineProps<{ imgUrl: string, name: string }>();
</script>


<template>
    <div class="rounded-tl-xl rounded-br-xl border border-orange p-1.5">
        <div class="p-4 text-white bg-orange rounded-tl-xl rounded-br-xl shadow-md">
            <p>{{ props.name }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>