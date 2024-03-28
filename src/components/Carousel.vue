<script setup lang="ts">
import { ref, computed } from 'vue'
import { experienceData } from "../data/experience.data";
import LeftRowIcon from '../assets/LeftRowIcon.astro';

const intervalTime = 5000; // Cambia la diapositiva cada 5 segundos
const index = ref(0);
const prevIndex = computed(() => {
    if(index.value == 0) return experienceData.length -1;

    return index.value -1;
})
const nextIndex = computed(() => {
    if(index.value == experienceData.length -1) return 0;

    return index.value + 1;
})

const nextSlide = () => {
    index.value++;
    if (index.value >= experienceData.length) {
        index.value = 0;
    }
}

const prevSlide = () => {
    index.value--;
    if (index.value < 0) {
        index.value = experienceData.length - 1;
    }
}

// setInterval(nextSlide, intervalTime);
</script>

<template>
    <div class="carouselContainer">
        <button @click="prevSlide">
            -
        </button>
        <div class="prevSlide">
            {{ experienceData[prevIndex].description }}
        </div>
        <div class="currentSlide">
            {{experienceData[index].description}}
        </div>
        <div class="nextSlide">
            {{ experienceData[nextIndex].description }}
        </div>
        <button @click="nextSlide">+</button>
    </div>
</template>

<style lang="scss">
@import '../styles/main.scss';

.carouselContainer {
    display: flex;
    align-items: center;
    color: white;
    width: 60%;
    gap: 5px;

    button {
        background-color: transparent;
        height: 50px;
        width: 50px;
        min-width: 50px;
        color: $secondary-color;
        border: 3px solid $secondary-bg-color;
        border-radius: 40px;
    }

    @keyframes carousel-animation {
        from {
            transform: scale(1);
            left: 0%;
        }

        to {
            transform: scale(1.1);
            left: 10%;
        }
    }

    .prevSlide, .nextSlide, .currentSlide {
        position: relative;
        width: 30%;
        // animation-name: carousel-animation;
        animation-duration: 0.5s;
        animation-timing-function: linear;
    }

    .prevSlide, .nextSlide {
        z-index: 0;
        filter: blur(2px);
    }

    .currentSlide {
        z-index: 1;
    }

    .prevSlide {
        left: 5%;
    }

    .nextSlide {
        right: 5%;
    }
}
</style>