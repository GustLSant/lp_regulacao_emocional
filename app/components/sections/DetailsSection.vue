<script setup lang="ts">
    import Header from '../common/Header.vue';
    import DetailsCard from '../DetailsCard.vue';
    import WavesImg from '../../assets/img/waves.svg'
</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 py-20 bg-light-beige/70">

        <div class="flex flex-col items-center justify-center gap-8 px-4">
            <Header>INFORMAÇÕES DO CURSO</Header>
    
            <p class="px-4 lg:px-20">O curso de Regulação Emocional da Afirmativa reúne aulas e atividades que possibilitam uma jornada sobre teoria e prática clínica em regulação emocional. O objetivo é que você passe a atuar de modo mais alinhado às necessidades dos seus clientes e com maior criticidade aos diversos modos interventivos, além de conhecer as ferramentas disponíveis para seu trabalho.</p>
        </div>


        <div class="flex items-start justify-evenly flex-wrap self-stretch gap-8 gap-y-8 py-8 px-12 lg:px-20 bg-dark-blue text-white">
            <DetailsCard
                icon-name="streamline:global-learning"
                title="Professores de alta qualidade"
            >
                <p class="opacity-80 text-sm font-extralight">O curso conta com 15 professores altamente qualificados, incluindo diversos <strong class="font-semibold">mestres</strong> e <strong class="font-semibold">doutores</strong></p>
            </DetailsCard>

            <div class="separator opacity-40" />

            <DetailsCard
                icon-name="mdi:certificate-outline"
                title="Certificado incluso"
                description="O curso possui um certificado de 60 horas e conta com um programa completo para te guiar nesse update em sua prática clínica"
            />

            <div class="separator opacity-40" />

            <DetailsCard
                icon-name="material-symbols:accessibility-rounded"
                title="Para profissionais e estudantes"
                description="O curso tem como público alvo profissionais e estudantes de psicologia e psiquiatria"
            />

            <div class="separator opacity-40" />

            <DetailsCard
                icon-name="mdi:school-outline"
                title="Formação completa e atualizada"
                description="Diversas horas de conteúdo sobre regulação emocional, intervenções clínicas e diferentes contextos de atuação"
            />
        </div>

        <div class="self-center flex flex-col lg:flex-row items-stretch rounded-md bg-white shadow-md">
            <div class="flex items-center gap-4 py-4 px-8 bg-dark-blue text-white rounded-t-md lg:rounded-none lg:rounded-l-md">
                <Icon name="mdi:account-group-outline" size="52" />
                <p class="md:text-lg font-light tracking-wider leading-tight">COORDENAÇÃO <br /> DO CURSO</p>
            </div>

            <img :src="WavesImg" alt="Imagem de divisão" class="hidden lg:block max-h-[112px] -mr-[100px]" />

            <div class="flex flex-col justify-center gap-4 py-4 px-8">
                <div class="flex items-center gap-2">
                    <div class="bg-dark-green rounded-full p-1 h-[32px]">
                        <Icon name="mdi:user-outline" size="24" class="text-white" />
                    </div>
                    <p class="leading-tight">Me. Érico Augusto Barreto Monteiro</p>
                </div>

                <div class="flex items-center gap-2">
                    <div class="bg-dark-green rounded-full p-1 h-[32px]">
                        <Icon name="mdi:user-outline" size="24" class="text-white" />
                    </div>
                    <p class="leading-tight">Dr. Mozer de Miranda Ramos</p>
                </div>
            </div>
        </div>

    </section>
</template>


<style scoped>
    .separator {
        height: 1px;
        width: 100%;
        background-image: linear-gradient(to right, transparent, white, transparent);
        flex-shrink: 0;
    }

    @media (min-width: 1024px) {
        .separator {
            align-self: stretch; 
            height: auto; 
            width: 1px;
            background-image: linear-gradient(to bottom, transparent, white, transparent);
        }
    }
</style>