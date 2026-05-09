<script setup lang="ts">
    const initialized = ref<boolean>(false);
    const props = defineProps<{ url: string }>();

    const embedUrl = computed(() => {
        if (!props.url) return '';
        
        let videoId = '';
        const url = props.url;

        if (url.includes('v=')) {
            videoId = url.split('v=')[1]!.split('&')[0]!;
        }
        else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]!;
        }
        else if (url.includes('embed/')) {
            return url;
        }

        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    });
</script>


<template>
    <div v-if="initialized" class="relative w-full max-w-[500px] aspect-video bg-black rounded-md shadow-md">
        <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="mdi:loading" size="48" class="animate-spin text-white" />
        </div>

        <iframe
            :src="embedUrl"
            class="relative z-10 w-full h-full rounded-md"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </div>

    <div 
        v-else 
        @click="initialized = true"
        class="video-container relative w-full max-w-[500px] aspect-video flex items-center justify-center bg-black rounded-md shadow-md hover:cursor-pointer"
    >
        <Icon name="mdi:play" size="48" class="text-white" />
    </div>
</template>


<style scoped>
    .video-container {
        isolation: isolate; 
    }

    .video-container::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        opacity: 0;
        background-image: radial-gradient(circle, rgba(255,255,255, 0.2) 0%, transparent 90%);
        transition: opacity 0.3s ease;
    }

    .video-container:hover::before { opacity: 1; }

    .play-icon { transition: transform 0.3s ease; }
    .video-container:hover .play-icon { transform: scale(1.2); }
</style>