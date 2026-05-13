<script setup lang="ts">
    import Header from '../common/Header.vue';
    import WppButton from '../common/WppButton.vue';

    const items: { title: string, content: string }[] = [
        {
            title: 'Para quem é o curso?',
            content: 'Para profissionais e estudantes de psicologia e psiquiatria, de quaisquer identificações teóricas, e que queiram aprimorar suas competências em Regulação Emocional.',
        },
        {
            title: 'Este valor anunciado é mensalidade?',
            content: 'Não, por este valor você já recebe acesso ao curso por 1 ano.',
        },
        {
            title: 'Posso parcelar o curso?',
            content: 'Sim! O curso pode ser parcelado em até 12x. Se tiver alguma dificuldade, fale conosco!',
        },
        {
            title: 'Em qual horário ocorrem as aulas?',
            content: 'As aulas são assíncronas. Ou seja, elas ficarão gravadas e disponíveis na plataforma para que você possa assistir de acordo com sua disponibilidade.',
        },
        {
            title: 'As aulas ficarão disponíveis por quanto tempo?',
            content: 'O curso ficará disponível por 1 ano.',
        },
        {
            title: 'Sou estudante, posso fazer o curso?',
            content: 'Com certeza. O curso é indicado para estudantes e profissionais do campo da saúde mental.',
        },
        {
            title: 'Qual o valor total do curso?',
            content: 'À vista, o curso custa apenas R$ 559,00',
        },
        {
            title: 'Quais as formas de pagamento?',
            content: 'Você pode pagar via PIX, boleto ou cartão de crédito.',
        },
        {
            title: 'Tem vagas afirmativas?',
            content: 'Sim, é um compromisso nosso. Repetidamente iremos disponibilizar seleções para estudantes de menor renda e de grupos minorizados. Indicamos que nos acompanhe no Instagram para ter acesso a essas informações (@_afirmativa).',
        },
    ]
</script>


<template>
    <section class="flex flex-col gap-8 py-20 px-8 bg-white">
        <Header>PERGUNTAS FREQUENTES</Header>

        <div class="flex flex-col gap-2">
            <FaqCard v-for="item in items" :title="item.title" :content="item.content" />
        </div>

        <div class="self-center flex flex-col items-center gap-2 text-sm">
            <p>Sobrou alguma dúvida?</p>
            <WppButton class="text-sm" />
        </div>

        <div class="self-center flex flex-col text-center gap-2 rounded-tl-xl rounded-br-xl border border-[#642c86] p-4">
            <p class="text-sm leading-tight">Quer conhecer nossos outros produtos? Acesse nosso site!</p>

            <a
                href="https://www.afirmativaeditora.com.br/"
                target="_blank"
                ref="noopener"
                class="self-center flex items-center gap-2 px-4 py-2 bg-[#642c86] text-white text-sm rounded-md hover:underline hover:brightness-125"
                :style="{ transition: 'filter 0.15s' }"
            >
                <Icon name="mdi:open-in-new" size="24" />
                <p>Editora Afirmativa</p>
            </a>
        </div>
    </section>
</template>


<style scoped>

</style>