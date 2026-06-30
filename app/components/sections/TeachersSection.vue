<script setup lang="ts">
    import Header from '../common/Header.vue';
    import TeacherCard from '../teachersSection/TeacherCard.vue';
    import AnnaImg from '../../assets/img/teachers/anna.jpeg';
    import BrendaImg from '../../assets/img/teachers/brenda-fernanda.png';
    import EricoImg from '../../assets/img/teachers/erico.jpeg';
    import EslyImg from '../../assets/img/teachers/esly.jpeg';
    import FernandoImg from '../../assets/img/teachers/fernando.jpeg';
    import GustavoImg from '../../assets/img/teachers/gustavo-frettajpeg.jpeg';
    import HenriqueImg from '../../assets/img/teachers/henrique.jpeg';
    import JoaoImg from '../../assets/img/teachers/joao-paulo.jpeg';
    import JucimaraImg from '../../assets/img/teachers/jucimara.jpeg';
    import MaisaImg from '../../assets/img/teachers/maisa.png';
    import MozerImg from '../../assets/img/teachers/mozer.jpeg';
    import PauloImg from '../../assets/img/teachers/paulo-gomes.jpeg';
    import RamiroImg from '../../assets/img/teachers/ramiro.jpeg';
    import TammyImg from '../../assets/img/teachers/tammy.png';
    import VitoriaImg from '../../assets/img/teachers/vitoria.jpeg';
    import TeachersData from '../../data/teachers.json'
    import Modal from '../common/Modal.vue';

    type TeacherData = { imgUrl: string, name: string, description: string, bgPos?: string };

    const teacherImages: Record<string, string> = {
        AnnaImg,
        BrendaImg,
        EricoImg,
        EslyImg,
        FernandoImg,
        GustavoImg,
        HenriqueImg,
        JoaoImg,
        JucimaraImg,
        MaisaImg,
        MozerImg,
        PauloImg,
        RamiroImg,
        TammyImg,
        VitoriaImg
    };

    const teachers: TeacherData[] = TeachersData.map((teacher) => ({
        ...teacher,
        imgUrl: teacherImages[teacher.imgUrl]!
    }));

    const selectedTeacher = ref<TeacherData | undefined>(undefined);
</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 py-20 px-4 lg:px-20 bg-white">
        <Header>PROFESSORES</Header>

        <div class="grid items-start grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <TeacherCard
                v-for="teacher in teachers"
                @click="selectedTeacher = teacher"
                :key="teacher.name"
                :img-url="teacher.imgUrl"
                :name="teacher.name"
                :bg-pos="teacher.bgPos"
            />
        </div>
    </section>

    <Modal v-if="selectedTeacher !== undefined" :title="selectedTeacher.name" @close-modal="selectedTeacher = undefined">
        <template #default>
            <div class="opacity-0 fade-in-left" :style="{ animationDelay: '75ms' }">
                <p>{{ selectedTeacher.description }}</p>
            </div>
        </template>
    </Modal>
</template>


<style scoped>

</style>