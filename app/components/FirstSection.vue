<script setup lang="ts">
    import Button from './common/Button.vue';
    import Header from './common/Header.vue';


</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 p-20 bg-white">
        
        <Header>INFORMAÇÕES DO CURSO</Header>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatibus hic nihil illum accusamus porro harum corrupti repellat tenetur!</p>

        <div class="w-full max-w-[600px] aspect-video flex items-center justify-center bg-black rounded-md shadow-md">
            <Icon name="mdi:play" size="48" class="text-white" />
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatibus hic nihil illum accusamus porro harum corrupti repellat tenetur!</p>

        <Button color="orange" end-icon-name="mdi:arrow-right" class="bg-orange">
            Inscrever-se
        </Button>

    </section>
</template>


<style scoped>

</style>