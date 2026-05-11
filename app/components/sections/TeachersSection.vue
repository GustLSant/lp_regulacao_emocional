<script setup lang="ts">
    import Header from '../common/Header.vue';
    import TeacherCard from '../teachersSection/TeacherCard.vue';
    import AnnaImg from '../../assets/img/teachers/anna.jpeg';
    import BrendaImg from '../../assets/img/teachers/brenda-fernanda.png';
    import EricoImg from '../../assets/img/teachers/erico.jpeg';
    import FernandoImg from '../../assets/img/teachers/fernando.jpeg';
    import GustavoImg from '../../assets/img/teachers/gustavo-frettajpeg.jpeg';
    import HenriqueImg from '../../assets/img/teachers/henrique.jpeg';
    import JoaoImg from '../../assets/img/teachers/joao-paulo.jpeg';
    import JucimaraImg from '../../assets/img/teachers/jucimara.jpeg';
    import MaisaImg from '../../assets/img/teachers/maisa.png';
    import MozerImg from '../../assets/img/teachers/mozer.jpeg';
    import PauloImg from '../../assets/img/teachers/paulo-gomes.jpeg';
    import PrislaImg from '../../assets/img/teachers/prisla.png';
    import RamiroImg from '../../assets/img/teachers/ramiro.jpeg';
    import ThiagoImg from '../../assets/img/teachers/thiago.png';
    import VitoriaImg from '../../assets/img/teachers/vitoria.jpeg';

    type TeacherData = { imgUrl: string, name: string, bgPos?: string };

    const teachers: TeacherData[] = [
        { imgUrl: AnnaImg, name: 'Dra. Anna Carolina Barbosa' },
        { imgUrl: BrendaImg, name: 'Ma. Brenda Fernanda Ferraz' },
        { imgUrl: EricoImg, name: 'Me. Érico Augusto Monteiro', bgPos: 'top center' },
        { imgUrl: FernandoImg, name: 'Psi. Fernando Bahia Portela' },
        { imgUrl: GustavoImg, name: 'Me. Gustavo Carvalho Fretta' },
        { imgUrl: HenriqueImg, name: 'Me. Henrique Freire' },
        { imgUrl: JoaoImg, name: 'Me. João Paulo Feitoza', bgPos: 'top center' },
        { imgUrl: JucimaraImg, name: 'Ma. Jucimara Cabral Ramos', bgPos: 'top center' },
        { imgUrl: MaisaImg, name: 'Ma. Maísa Carvalho Silva' },
        { imgUrl: MozerImg, name: 'Dr. Mozer Ramos' },
        { imgUrl: PauloImg, name: 'Dr. Paulo Gomes de Sousa', bgPos: 'top center' },
        { imgUrl: PrislaImg, name: 'Dra. Prisla Ücker Calvetti' },
        { imgUrl: RamiroImg, name: 'Dr. Ramiro Coni Santana' },
        { imgUrl: ThiagoImg, name: 'Psi. Thiago Mácimo Pereira' },
        { imgUrl: VitoriaImg, name: 'Ma. Vitória Ferreira de Azevedo' }
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
                :bg-pos="teacher.bgPos"
            />
        </div>
    </section>
</template>


<style scoped>

</style>