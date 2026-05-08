<script setup lang="ts">
    const props = defineProps<{ iconName: string, title: string, description?: string }>();
</script>


<template>
    <!-- <div class="flex-1 flex items-center gap-4 max-w-[300px]">
        <div class="bg-dark-green rounded-full p-2 h-[58px]">
            <Icon :name="props.iconName" size="48" class="shrink-0 text-white" />
        </div>
        

        <div class="flex flex-col gap-2">
            <p class="leading-[18px]">{{ props.title }}</p>
            <p v-if="props.description" class="leading-tight text-sm font-light opacity-60">{{ props.description }}</p>
            <slot />
        </div>
    </div> -->




    <div class="flex-1 flex flex-col gap-3 max-w-[300px]">
        <div class="flex items-center gap-3">
            <div class="bg-dark-green rounded-full p-2 h-[48px]">
                <Icon :name="props.iconName" size="32" class="shrink-0 text-white" />
            </div>

            <p class="text-lg leading-tight font-extralight tracking-wide">{{ props.title }}</p>
        </div>
        
        <p v-if="props.description" class="opacity-80 text-sm font-extralight">{{ props.description }}</p>
        <slot v-else />
    </div>
</template>


<style scoped>

</style>