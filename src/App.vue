<template>
    <v-app>
        <Home/>
    </v-app>
</template>

<script>

import {defineComponent} from "vue";
import Home from "./views/Home.vue";

export default defineComponent({
    components: {Home}
})
</script>