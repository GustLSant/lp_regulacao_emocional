<script setup lang="ts">
    import { onMounted, onUnmounted, ref, useSlots } from 'vue';

    type ModalProps = {
        title: string,
        icon?: string,
        brightHeader?: boolean,
        persistent?: boolean,
        maxWidth?: number
    }

    const props = defineProps<ModalProps>();
    const emit = defineEmits(["closeModal"]);
    const slots = useSlots()

    const modalContentRef = ref<HTMLElement | null>(null);

    onMounted(() => { document.body.style.overflow = 'hidden'; });
    onUnmounted(() => { document.body.style.overflow = ''; });

    onMounted(() => { window.addEventListener('keydown', handleKeyDown); });
    onUnmounted(() => { window.removeEventListener('keydown', handleKeyDown); });

    const handleClickOutsideModal = (_event: MouseEvent) => {
        if(!modalContentRef.value) return;
        if(!props.persistent && !modalContentRef.value.contains(_event.target as Node)){ closeModal(); }
    }

    function closeModal() {
        emit("closeModal");
    }

    function handleKeyDown(_e: KeyboardEvent) {
        if (_e.key === 'Escape' && !props.persistent) { closeModal(); }
    }
</script>


<template>
    <div @click="handleClickOutsideModal" data-test-id="modal" class="fixed top-0 bottom-0 left-0 right-0 z-30 flex justify-center items-center p-4 bg-black/30 backdrop-blur-sm fade-in-left pointer-events-auto">
        <div
            ref="modalContentRef"
            class="rw-full max-h-[75vh] overflow-hidden relative flex flex-col gap-4 bg-white rounded-md border border-border text-mainText shadow-lg"
            :style="{ maxWidth: (props.maxWidth) ? `${props.maxWidth}px` : '750px' }"
        >
            
            <div class="relative flex items-center gap-2 pr-6 p-4 pb-0 bg-white">
                <Icon v-if="props.icon" :name="props.icon" size="32" class="shrink-0" />
                
                <h1 class="text-2xl pr-6">{{ props.title }}</h1>
                
                <div @click="closeModal" class="absolute right-[16px] top-[16px] p-1 rounded-full border border-transparent hover:border-border hover:cursor-pointer">
                    <Icon name="mdi:close" size="24" />
                </div>
            </div>

            <div class="flex flex-col gap-4 p-4 py-0 overflow-y-auto" :class="(!slots.bottom) ? 'pb-4' : ''">
                <slot />
            </div>

            <div v-if="slots.bottom" class="sticky bottom-0 pt-2">
                <slot name="bottom" />
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>