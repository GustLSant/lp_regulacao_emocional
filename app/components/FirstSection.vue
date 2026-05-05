<script setup lang="ts">
import Button from './Button.vue';


</script>


<template>
    <section class="p-20 bg-white flex flex-col items-center justify-center gap-8">
        
        <div class="flex items-center gap-4 self-stretch text-center">
            <div class="grow" />
            <div class="grow max-w-[100px] h-0.5 bg-orange" />
                <p class="text-2xl font-playfair font-semibold text-orange text-shadow-light tracking-[4px]">INFORMAÇÕES DO CURSO</p>
            <div class="grow max-w-[100px] h-0.5 bg-orange" />
            <div class="grow" />
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatibus hic nihil illum accusamus porro harum corrupti repellat tenetur!</p>

        <div class="w-full max-w-[600px] aspect-video flex items-center justify-center bg-black rounded-md shadow-md">
            <Icon name="mdi:play" size="48" class="text-white" />
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatibus hic nihil illum accusamus porro harum corrupti repellat tenetur!</p>

        <Button icon-name="mdi:cart">
            Adiquirir Agora
        </Button>

    </section>
</template>


<style scoped>

</style>