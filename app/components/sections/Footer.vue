<script setup lang="ts">
    import Logo from '../../assets/img/logo-afirmativa-roxo-peq.png'
</script>


<template>
    <section class="flex flex-col gap-4 pt-4">

        <div class="flex justify-center p-4 ">
            <div class="p-2 border border-white/40 rounded-tl-xl rounded-br-xl">
                <div class="flex flex-col items-center gap-2 p-4 bg-white rounded-tl-xl rounded-br-xl shadow-md">
                    <img :src="Logo" alt="Logo da Afirmativa" class="w-8" />
                    <p class="text-sm font-light">AFIRMATIVA SERVIÇOS ACADEMICOS E PUBLICAÇÕES LTDA | CNPJ 45.555.897/0001-58 | Rua Jacinto Uchoa de Mendonça, 223 Bairro Grageru, Aracaju/SE - CEP 49.026-160 | 2023</p>
                </div>
            </div>
        </div>
        
        <div class="flex items-center justify-center p-2 bg-dark-blue text-white">
            <NuxtLink to="/policy" target="_blank" class="font-light underline hover:cursor-pointer">
                Política de privacidade
            </NuxtLink>
        </div>

    </section>
</template>


<style scoped>

</style>