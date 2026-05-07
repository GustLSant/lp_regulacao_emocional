<script setup lang="ts">
    import CTAButton from '../common/CTAButton.vue';
    import Header from '../common/Header.vue';
    import ModuleCard from '../ModuleCard.vue';

    const modules_1 = [
        'Regulação Emocional e Desregulação Emocional',
        'Análise Contextual',
        'Atuação com crianças e adolescentes',
        'Atuação com grupos minorizados',
        'Atuação em dor crônica',
        'Atuação em neurodivergências',
        'Atuação em oncologia',
        'Atuação hospitalar',
        'Desregulação Emocional e Transtornos de Personalidade',
        'Desregulação Emocional e Transtornos do Humor',
        'Emoções',
        'Estratégias de Enfrentamento',
    ]

    const modules_2 = [
        'Grupo de Habilidades em Regulação Emocional',
        'Habilidades em Regulação Emocional',
        'Intervenção transdiagnóstica',
        'Manejo de Crises',
        'Regulação Emocional e ACT',
        'Regulação Emocional e Autocompaixão',
        'Regulação Emocional e DBT',
        'Regulação Emocional e Funções Executivas',
        'Regulação Emocional e Mindfulness',
        'Regulação Emocional e TCC',
        'Teoria e prática em Regulação Emocional',
    ]
</script>


<template>
    <section class="flex flex-col items-stretch gap-8 py-20 px-4 lg:px-20 bg-light-beige/70">

        <Header>CONTEÚDO DO CURSO</Header>

        <div class="rounded-tl-xl rounded-br-xl border border-white/40 p-2">
            <div class=" flex flex-col gap-8 bg-white p-8 rounded-tl-xl rounded-br-xl shadow-md">

                <div class="flex items-start gap-4">
                    <ul class="flex flex-col gap-y-2 flex-1">
                        <ModuleCard v-for="module in modules_1" :value="module" />
                    </ul>

                    <ul class="flex flex-col gap-y-2 flex-1">
                        <ModuleCard v-for="module in modules_2" :value="module" />
                    </ul>
                </div>

                <div class="self-center flex items-center gap-4 border border-light-green py-2 px-4 rounded-md lg:rounded-full">
                    <div class="p-2 bg-light-green rounded-full h-10 text-white">
                        <Icon name="mdi:school-outline" size="24" />
                    </div>
                    <p><strong class="font-bold text-light-green">23 Módulos completos</strong> com um total de 60 horas para aprofundar seus conhecimentos e transformar sua prática clínica</p>
                </div>

                <CTAButton class="m-auto" />

                <!-- <div class="flex flex-col items-center gap-2 mt-10">
                    <div class="flex items-center justify-center gap-2 font-playfair text-2xl text-dark-green">
                        <Icon name="mdi:television-play" size="32" />
                        <p>Apresentação do conteúdo</p>
                    </div>

                    <div class="green-gradient w-[30%] h-0.5"></div>
                </div>

                <div class="flex items-center justify-center">
                    <div class="w-full max-w-[500px] aspect-video flex items-center justify-center bg-black rounded-md shadow-md">
                        <Icon name="mdi:play" size="48" class="text-white" />
                    </div>
                </div> -->
                
            </div>
        </div>

    </section>
</template>


<style scoped>
    .green-gradient {
        background-image: linear-gradient(to right, transparent, #3E4B3F, transparent);
        opacity: 60%;
    }
</style>