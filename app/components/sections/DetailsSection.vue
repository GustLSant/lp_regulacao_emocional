<script setup lang="ts">
    import Header from '../common/Header.vue';
    import DetailsCard from '../DetailsCard.vue';

</script>


<template>
    <section class="flex flex-col items-stretch justify-center gap-8 py-20 bg-light-beige/70">

        <Header>INFORMAÇÕES DO CURSO</Header>

        <p class="px-4 lg:px-20">O curso de Regulação Emocional da Afirmativa reúne aulas e atividades que possibilitam uma jornada sobre teoria e prática clínica em regulação emocional. O objetivo é que você passe a atuar de modo mais alinhado às necessidades dos seus clientes e com maior criticidade aos diversos modos interventivos, além de conhecer as ferramentas disponíveis para seu trabalho.</p>


        <div class="flex items-center justify-evenly flex-wrap gap-4 gap-y-8 py-8 px-12 lg:px-20 bg-dark-blue text-white">
            <DetailsCard
                icon-name="streamline:global-learning"
                title="Professores de alta qualidade"
            >
                <p class="leading-tight text-sm font-light opacity-60">O curso conta com 15 professores altamente qualificados, incluindo diversos <strong class="font-semibold">mestres</strong> e <strong class="font-semibold">doutores</strong></p>
            </DetailsCard>

            <DetailsCard
                icon-name="mdi:certificate-outline"
                title="Certificado incluso"
                description="O curso possui um certificado de 60 horas e conta com um programa completo para te guiar nesse update em sua prática clínica"
            />

            <!-- <DetailsCard
                icon-name="material-symbols:accessibility-rounded"
                title="Para profissionais e estudantes"
                description="O curso tem como público alvo Profissionais e Estudantes de Psicologia e Psiquiatria"
            /> -->

            <DetailsCard
                icon-name="mdi:school-outline"
                title="Formação completa e atualizada"
                description="23 módulos sobre regulação emocional, intervenções clínicas e diferentes contextos de atuação"
            />

            <DetailsCard
                icon-name="mdi:book-outline"
                title="Conteúdo multiprofissional"
                description="O curso possui um caráter transteórico que permite que profissionais de diferentes afinidades clínicas possam aproveitar seu conteúdo"
            />
        </div>

        <p class="px-4 lg:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis recusandae, illo rerum sapiente consequuntur perferendis hic magnam ab eius quasi suscipit, velit ex animi pariatur officia facere aperiam quas.</p>

    </section>
</template>


<style scoped>

</style>