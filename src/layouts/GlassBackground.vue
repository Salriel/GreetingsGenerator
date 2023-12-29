<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "GlassBackground"
})
</script>

<template>
    <div class="h-100">
        <slot/>
    </div>
</template>

<style scoped>
    div {
        background: rgba(255, 255, 255, 0.21);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
    }
</style>