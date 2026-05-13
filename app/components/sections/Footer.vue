<script setup lang="ts">
    import Logo from '../../assets/img/logo-afirmativa-roxo-peq.png'
</script>


<template>
    <section class="flex flex-col gap-4 pt-4">

        <div class="flex justify-center p-4">
            <div class="p-2 border border-white/40 rounded-tl-xl rounded-br-xl">
                <div class="flex flex-col items-center gap-2 p-4 bg-white rounded-tl-xl rounded-br-xl shadow-md">
                    <div class="flex flex-col gap-2 items-center">
                        <img :src="Logo" alt="Logo da Afirmativa" class="w-8" />
                        <p class="text-sm font-light text-center">AFIRMATIVA SERVIÇOS ACADEMICOS E PUBLICAÇÕES LTDA | CNPJ 45.555.897/0001-58 | Rua Jacinto Uchoa de Mendonça, 223 Bairro Grageru, Aracaju/SE - CEP 49.026-160</p>
                    </div>                
                    
                    <div class="text-[#702e8f] text-sm font-light text-center underline hover:cursor-pointer">
                        <a href="mailto:afirmativaeditora@gmail.com">afirmativaeditora@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-4 p-2 text-sm font-light bg-dark-blue text-white">
            <NuxtLink to="/policy" target="_blank" class="font-light underline hover:cursor-pointer">
                Política de privacidade
            </NuxtLink>

            <p>Website desenvolvido por <a href="mailto:gustlsantdev@gmail.com" target="_blank" class="underline hover:cursor-pointer">gustlsantdev@gmail.com</a></p>
        </div>

    </section>
</template>


<style scoped>

</style>