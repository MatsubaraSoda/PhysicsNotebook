<template>
    <div style="width: fit-content; margin: 25px auto;">
        <img :src="src" :alt="alt" :style="style" data-zoomable>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    src: String,
    alt: String,
    maxHeight: { type: String, default: '350px' },
    width: { type: String, default: 'auto' }
})

const style = `max-height: ${props.maxHeight}; width: ${props.width}; background-color: white; padding: 10px; border-radius: 5px;`
</script>