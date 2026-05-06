<script setup lang="ts">
    import Header from './common/Header.vue';
import TeacherCard from './teachersSection/TeacherCard.vue';


</script>


<template>
    <section class="flex flex-col items-center justify-center gap-8 p-20 bg-white">
        <Header>PROFESSORES</Header>

        <div class="flex flex-wrap items-center gap-4">
            <TeacherCard
                :img-url="'aoliwjda'"
                name="Prof. Dr. aoiwhjdlai"
            />
            
            <TeacherCard
                :img-url="'aoliwjda'"
                name="Prof. Dr. aoiwhjdlai"
            />

            <TeacherCard
                :img-url="'aoliwjda'"
                name="Prof. Dr. aoiwhjdlai"
            />

            <TeacherCard
                :img-url="'aoliwjda'"
                name="Prof. Dr. aoiwhjdlai"
            />
        </div>
    </section>
</template>


<style scoped>

</style>