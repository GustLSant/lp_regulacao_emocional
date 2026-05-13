<script setup lang="ts">
    import CTAButton from '../common/CTAButton.vue';
    import Header from '../common/Header.vue';
    import ModuleCard from '../ModuleCard.vue';
    import WavesImg from '../../assets/img/waves.svg'

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

                <div class="flex items-start flex-wrap gap-4">
                    <ul class="flex flex-col gap-y-2 flex-1">
                        <ModuleCard v-for="module in modules_1" :value="module" />
                    </ul>

                    <ul class="flex flex-col gap-y-2 flex-1">
                        <ModuleCard v-for="module in modules_2" :value="module" />
                    </ul>
                </div>

                <div class="self-center flex flex-col xs:flex-row items-center gap-4 border border-light-green py-2 px-4 rounded-md lg:rounded-full">
                    <div class="p-2 bg-light-green rounded-full h-10 text-white">
                        <Icon name="mdi:school-outline" size="24" />
                    </div>
                    <p class="leading-tight text-center xs:text-left">
                        O curso está dividido em <strong class="font-bold text-light-green">5 módulos completos</strong> para aprofundar seus conhecimentos e transformar sua prática clínica
                    </p>
                </div>

                <div class="self-center flex flex-col lg:flex-row items-stretch rounded-md bg-white border border-dark-blue/20 shadow-md">
                    <div class="flex flex-col justify-center items-center p-4 pl-6 rounded-t-md lg:rounded-none lg:rounded-l-md bg-dark-blue text-white">
                        <p class="text-xl md:text-3xl font-light tracking-wider leading-tight"><span class="text-xs font-light mr-1">R$</span>559,00</p>
                        <p class="text-sm opacity-60">(em até 12x)</p>
                    </div>

                    <img :src="WavesImg" alt="Imagem de divisão" class="hidden lg:block max-h-[120px] -mr-[100px]" />

                    <div class="flex flex-col justify-center gap-4 py-4 px-8">
                        <div class="flex items-center gap-2">
                            <div class="bg-dark-green rounded-full p-1 h-[32px]">
                                <Icon name="mdi:school-outline" size="24" class="text-white" />
                            </div>
                            <p class="leading-tight">50 horas de aulas com <br /> professores especializados</p>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="bg-dark-green rounded-full p-1 h-[32px]">
                                <Icon name="mdi:certificate-outline" size="24" class="text-white" />
                            </div>
                            <p class="leading-tight">Certificado de conclusão</p>
                        </div>
                    </div>
                </div>

                <CTAButton class="self-center !mb-2" />
                
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