<script setup lang="ts">
    import Button from '../common/Button.vue';
import CTAButton from '../common/CTAButton.vue';

    
</script>


<template>
    <section class="min-h-screen relative flex flex-col justify-center gap-8 p-4 xs:pl-[7.5%] bg-[rgba(224,201,177,0.3)] lg:bg-transparent">

        <div class="flex flex-col items-start">
            <p class="text-xl lg:text-3xl text-orange font-googleflex font-semibold tracking-[4px] lg:tracking-[8px]">CURSO</p>
            <div class="mb-4 mt-2 text-7xl lg:text-9xl font-playfair text-shadow-md lg:!leading-[0.9]">
                <p class="text-dark-blue break-all">Regulação</p>
                <p class="text-orange break-all">Emocional</p>
            </div>
            <p class="text-dark-blue text-2xl lg:text-4xl tracking-[6px] lg:tracking-[12px]">NA PRÁTICA CLÍNICA</p>
        </div>

        <div class="flex items-center gap-2 lg:gap-4">
            <div class="w-0.5 h-full bg-orange" />
            <p class="text-dark-blue text-lg lg:text-xl">Da teoria à prática, <strong class="text-orange">além do básico.</strong></p>
        </div>

        <div class="flex items-start gap-2 lg:gap-4 max-w-[400px]">
            <Icon name="ph:waves-thin" size="48" class="hidden lg:block shrink-0 text-orange" />
            <Icon name="ph:waves-thin" size="32" class="block lg:hidden shrink-0 text-orange" />
            <p class="text-lg leading-tight lg:text-xl">Capacitação para profissionais que desejam transformar a vida dos seus pacientes com mais <strong class="font-semibold">precisão, segurança e profundidade clínica</strong></p>
        </div>

        <CTAButton />

        <div class="continue-badge flex flex-col items-center justify-center gap-1 pb-2 text-white">
            <div class="continue-bg bg-white/20 rounded-full h-9 p-1">
                <Icon name="mdi:chevron-down" size="28" class="continue-arrow" />
            </div>
            <p class="font-googleflex text-sm tracking-[2px]">CONTINUAR</p>
        </div>

    </section>
</template>


<style scoped>
    .welcome-section {
        background-color: rgba(224, 201, 177, 0.3);
    }

    .continue-badge {
        position: absolute;
        bottom: 4px;
        left: 0px;
        right: 0px;
    }

    .continue-arrow {
        animation: Drop 2.0s ease-in-out infinite;
    }

    @keyframes Drop {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        25% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 0;
            transform: translateY(10px);
        }
    }
</style>