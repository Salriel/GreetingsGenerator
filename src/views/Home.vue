<script>
import {defineComponent} from 'vue'
import GradientBackground from "../layouts/GradientBackground.vue";
import GlassBackground from "../layouts/GlassBackground.vue";

export default defineComponent({
    name: "Home",
    components: {GlassBackground, GradientBackground},
    methods: {
        tick(ms){
            return new Promise(res => setTimeout(res, ms));
        },
        async generate(){
            this.processing = true;
            let newText = this.$store.getters.getGreeting();
            this.text = "";

            for (let char in newText) {
                this.text += newText[char];
                await this.tick(30)
            }
            this.processing = false;
        },
        async copy(){
            await navigator.clipboard.writeText(this.text);
            this.copied = true;
            await this.tick(1000);
            this.copied = false;8
        }
    },
    data: () => ({
        processing: false,
        text: "",
        copied: false,
    })
})
</script>

<template>
    <GradientBackground>
        <div class="h-100 d-flex justify-center align-center">
            <v-card :style="$vuetify.display.mobile ? '' : 'width: 500px;'"
                    class="glass"
                    :loading="processing"
            >
                <v-card-title class="text-wrap text-center">
                    Генератор поздравлений для нового года!
                </v-card-title>
                <v-card-text>
                    {{ text }}
                </v-card-text>
                <v-card-actions class="d-flex justify-space-between">
                    <v-btn @click="generate" :disabled="processing">
                        Сгенерировать
                    </v-btn>

                    <v-tooltip v-model="copied" text="Скопировано!" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn @click="copy"
                                   :disabled="processing || (text.length === 0)"
                                   v-bind="props"
                            >
                                Скопировать
                            </v-btn>
                        </template>
                    </v-tooltip>

                </v-card-actions>
            </v-card>
        </div>
    </GradientBackground>
</template>

<style scoped>

</style>