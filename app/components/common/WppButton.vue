<script setup lang="ts">
    import Button from './Button.vue';

    const wppNumber: string = '5579981333089';
    const message: string = encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas sobre o curso.');

    function redirectToWpp() {
        window.open(`https://wa.me/${wppNumber}?text=${message}`, '_blank');
    }
</script>


<template>
    <Button @click="redirectToWpp" start-icon-name="mdi:whatsapp" class="bg-whatsapp-gradient" >
        Fale Conosco!
    </Button>
</template>


<style scoped>
    .bg-whatsapp-gradient {
        background: linear-gradient(135deg, #2B6E44 0%, #6A8B5A 100%);
    }

    .bg-whatsapp-gradient:hover {
        filter: brightness(1.15) !important;
    }
</style>