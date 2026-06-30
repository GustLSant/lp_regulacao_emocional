<script setup lang="ts">
    import Button from './Button.vue';

    function handleClick() {
        window.open('https://pay.kiwify.com.br/sVPaTpI', '_blank', 'noopener,noreferrer');
    }
</script>


<template>
    <Button @click="handleClick" color="orange" start-icon-name="mdi:book-open-page-variant-outline" class="bg-orange font-light">
        Inscrever-se
    </Button>
</template>


<style scoped>

</style>