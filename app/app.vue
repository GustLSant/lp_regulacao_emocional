<script setup lang="ts">
	import WelcomeSection from './components/sections/WelcomeSection.vue';
	import PresentationSection from './components/sections/PresentationSection.vue';
	import DetailsSection from './components/sections/DetailsSection.vue';
	import TeachersSection from './components/sections/TeachersSection.vue';
	import ContentSection from './components/sections/ContentSection.vue';
	import FaqSection from './components/sections/FaqSection.vue';
</script>


<template>
	<div class="app w-screen max-w-[1400px] m-auto h-screen overflow-auto flex flex-col font-googleflex">
		<WelcomeSection />
		<PresentationSection />
		<DetailsSection />
		<TeachersSection />
		<ContentSection />
		<FaqSection />
	</div>
</template>


<style>
	.app {
		background-image: url('assets/img/bg_02.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}
</style>