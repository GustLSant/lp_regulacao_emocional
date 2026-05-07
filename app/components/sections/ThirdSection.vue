<script setup lang="ts">
    import Header from '../common/Header.vue';
    import TeacherCard from '../teachersSection/TeacherCard.vue';

    type TeacherData = { imgUrl: string, name: string };

    const teachers: TeacherData[] = [
        { imgUrl: 'aoliwjda', name: 'Dra. Anna Carolina Barbosa' },
        { imgUrl: 'aoliwjda', name: 'Ma. Brenda Fernanda Ferraz' },
        { imgUrl: 'aoliwjda', name: 'Me. Dan Josua' },
        { imgUrl: 'aoliwjda', name: 'Me. Érico Augusto Monteiro' },
        { imgUrl: 'aoliwjda', name: 'Psi. Fernando Bahia Portela' },
        { imgUrl: 'aoliwjda', name: 'Me. Gustavo Carvalho Fretta' },
        { imgUrl: 'aoliwjda', name: 'Me. Henrique Freire' },
        { imgUrl: 'aoliwjda', name: 'Me. João Paulo Feitoza' },
        { imgUrl: 'aoliwjda', name: 'Ma. Jucimara Cabral Ramos' },
        { imgUrl: 'aoliwjda', name: 'Ma. Maísa Carvalho Silva' },
        { imgUrl: 'aoliwjda', name: 'Dr. Mozer Ramos' },
        { imgUrl: 'aoliwjda', name: 'Dr. Paulo Gomes de Sousa' },
        { imgUrl: 'aoliwjda', name: 'Dra. Prisla Ücker Calvetti' },
        { imgUrl: 'aoliwjda', name: 'Dr. Ramiro Coni Santana' },
        { imgUrl: 'aoliwjda', name: 'Psi. Thiago Mácimo Pereira' },
        { imgUrl: 'aoliwjda', name: 'Ma. Vitória Ferreira de Azevedo' }
    ];
</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 py-20 px-4 lg:px-20 bg-white">
        <Header>PROFESSORES</Header>

        <div class="flex flex-wrap items-start gap-4">
            <TeacherCard
                v-for="teacher in teachers"
                :key="teacher.name"
                :img-url="teacher.imgUrl"
                :name="teacher.name"
            />
        </div>
    </section>
</template>


<style scoped>

</style>