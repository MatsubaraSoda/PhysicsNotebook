<template>
    <div :style="wrapperStyle">
        <img :src="src" :alt="alt" :style="imgStyle" data-zoomable>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    src: String,
    alt: String,
    maxHeight: { type: String, default: '350px' },
    width: { type: String, default: 'auto' },
    /** 铺满正文内容区宽度；SVG/大图推荐用这个，不必手算 px */
    fullWidth: { type: Boolean, default: false },
})

const isFullWidth = computed(() => props.fullWidth)

const wrapperStyle = computed(() => ({
    width: isFullWidth.value ? '100%' : 'fit-content',
    margin: '25px auto',
}))

const imgStyle = computed(() => ({
    display: 'block',
    width: isFullWidth.value ? '100%' : props.width,
    height: isFullWidth.value ? 'auto' : undefined,
    maxHeight: isFullWidth.value && props.maxHeight === '350px' ? 'none' : props.maxHeight,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
}))
</script>
