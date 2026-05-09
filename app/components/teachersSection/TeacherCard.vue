<script setup lang="ts">
    const props = defineProps<{ imgUrl: string, name: string }>();
</script>


<template>
    <div class="max-w-[125px] md:max-w-[150px] rounded-border border border-orange-30 p-1.5">

        <div class="flex flex-col text-white text-center rounded-border overflow-hidden shadow-md">
            <div
                class="w-full aspect-square rounded-tl-lg"
                :style="{
                    backgroundImage: `url(${props.imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }"
            />
            <p class="bg-orange p-4 leading-tight">{{ props.name }}</p>
        </div>

    </div>
</template>


<style scoped>
    .rounded-border {
        border-top-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
</style>