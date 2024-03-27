<script setup lang="ts">
import { ref } from 'vue'
import { experienceData } from "../data/experience.data";
import LeftRowIcon from '../assets/LeftRowIcon.astro';

const intervalTime = 5000; // Cambia la diapositiva cada 5 segundos
let index = ref(0);    
    
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
        {{experienceData[index].description}}
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
}
</style>