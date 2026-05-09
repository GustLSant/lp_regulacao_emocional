<script setup lang="ts">
    import Header from '../common/Header.vue';
    import TeacherCard from '../teachersSection/TeacherCard.vue';
    import PersonPlaceholder from '../../assets/img/person-placeholder.png'

    type TeacherData = { imgUrl: string, name: string };

    const teachers: TeacherData[] = [
        { imgUrl: PersonPlaceholder, name: 'Dra. Anna Carolina Barbosa' },
        { imgUrl: PersonPlaceholder, name: 'Ma. Brenda Fernanda Ferraz' },
        { imgUrl: PersonPlaceholder, name: 'Me. Érico Augusto Monteiro' },
        { imgUrl: PersonPlaceholder, name: 'Psi. Fernando Bahia Portela' },
        { imgUrl: PersonPlaceholder, name: 'Me. Gustavo Carvalho Fretta' },
        { imgUrl: PersonPlaceholder, name: 'Me. Henrique Freire' },
        { imgUrl: PersonPlaceholder, name: 'Me. João Paulo Feitoza' },
        { imgUrl: PersonPlaceholder, name: 'Ma. Jucimara Cabral Ramos' },
        { imgUrl: PersonPlaceholder, name: 'Ma. Maísa Carvalho Silva' },
        { imgUrl: PersonPlaceholder, name: 'Dr. Mozer Ramos' },
        { imgUrl: PersonPlaceholder, name: 'Dr. Paulo Gomes de Sousa' },
        { imgUrl: PersonPlaceholder, name: 'Dra. Prisla Ücker Calvetti' },
        { imgUrl: PersonPlaceholder, name: 'Dr. Ramiro Coni Santana' },
        { imgUrl: PersonPlaceholder, name: 'Psi. Thiago Mácimo Pereira' },
        { imgUrl: PersonPlaceholder, name: 'Ma. Vitória Ferreira de Azevedo' }
    ];
</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 py-20 px-4 lg:px-20 bg-white">
        <Header>PROFESSORES</Header>

        <div class="grid items-start grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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