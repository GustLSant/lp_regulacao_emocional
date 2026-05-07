<script setup lang="ts">
    import Button from '../common/Button.vue';
    import Header from '../common/Header.vue';


</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 py-20 px-4 lg:px-20 bg-white text-center">
        
        <Header>APRESENTAÇÃO DO CURSO</Header>

        <p>A regulação emocional é um processo fundamental para uma prática clínica efetiva e acolhedora</p>

        <div class="w-full max-w-[500px] aspect-video flex items-center justify-center bg-black rounded-md shadow-md">
            <Icon name="mdi:play" size="48" class="text-white" />
        </div>

        <div class="flex items-center gap-4 py-2 px-4 rounded-md text-start shadow-md bg-dark-beige/20 border border-orange/20">
            <div class="bg-light-green rounded-full p-2 h-[48px]">
                <Icon name="mdi:brain-freeze-outline" size="32" class="text-white" />
            </div>
            <div class="h-[50%] w-0.5 bg-orange opacity-60" />
            <div class="flex flex-col">
                <p class="text-orange font-playfair text-lg font-semibold">A DESREGULAÇÃO EMOCIONAL DO SEU PACIENTE NÃO É O PROBLEMA!</p>
                <p class="font-light">O problema está em não sabermos como manejar isso clinicamente</p>
            </div>
        </div>

        <!-- <div class="flex flex-col items-center gap-2">
            <p>A desregulação emocional está presente nos mais diferentes clientes e diagnósticos. <br /> Mas nem sempre sabemos o que fazer nessas situações.</p>
            <div class="flex items-center gap-1">
                <Icon name="mdi:book-outline" size="24" />
                <p>Este curso é uma oportunidade de sair de enfoques superficiais, pouco científicos e pouco eficazes</p>
            </div>
        </div> -->

        <p>A desregulação emocional está presente nos mais diferentes clientes e diagnósticos. <br /> Mas nem sempre sabemos o que fazer nessas situações.</p>

        <div class="flex items-center gap-2 bg-dark-beige/20 border border-orange/20 py-2 px-4 rounded-md">
            <div class="border border-light-green p-1 rounded-full h-7">
                <Icon name="mdi:book" size="18" class="text-light-green" />
            </div>
            <p class="text-sm tracking-wider">Este curso é uma oportunidade de sair de enfoques superficiais, pouco científicos e pouco eficazes</p>
        </div>

        <Button color="orange" start-icon-name="mdi:book-open-page-variant-outline" class="bg-orange">
            Quero adquirir agora
        </Button>

        <!-- <div class="flex items-center gap-2 p-2 text-start text-sm rounded-md border border-black/15">
            <Icon name="mdi:information-variant-circle-outline" size="24" class="opacity-80" />
            <div class="flex flex-col">
                <p>Público-alvo</p>
                <p class="font-light -mt-1 opacity-80">Profissionais e Estudantes de Psicologia e Psiquiatria</p>
            </div>
        </div> -->

    </section>
</template>


<style scoped>

</style>