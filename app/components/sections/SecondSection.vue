<script setup lang="ts">
    import Header from '../common/Header.vue';


</script>


<template>
    <section class="flex flex-col items-stretch justify-center gap-8 py-20 colored-section-bg">

        <Header>INFORMAÇÕES DO CURSO</Header>

        <p class="px-4 lg:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis recusandae, illo rerum sapiente consequuntur perferendis hic magnam ab eius quasi suscipit, velit ex animi pariatur officia facere aperiam quas.</p>


        <div class="flex items-center justify-evenly flex-wrap gap-4 py-8 px-20 bg-dark-blue text-white">
            <CardSecond
                icon-name="material-symbols:accessibility-rounded"
                title="Baseado em evidências"
                description="Conteúdo científico atualizado"
            />

            <CardSecond
                icon-name="material-symbols:accessibility-rounded"
                title="Aplicação prática"
                description="Ferramentas para o dia a dia clínico"
            />

            <CardSecond
                icon-name="material-symbols:accessibility-rounded"
                title="Para profissionais"
                description="Psicólogos, terapeutas e estudantes"
            />

            <CardSecond
                icon-name="material-symbols:accessibility-rounded"
                title="Certificado incluso"
                description="Reconhecimento para impulsionar sua carreira"
            />
        </div>

        <p class="px-4 lg:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis recusandae, illo rerum sapiente consequuntur perferendis hic magnam ab eius quasi suscipit, velit ex animi pariatur officia facere aperiam quas.</p>

    </section>
</template>


<style scoped>

</style>