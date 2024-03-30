<script setup lang="ts">
import { ref, computed } from 'vue'
import { experienceData } from "../data/experience.data";
import LeftRowIcon from '../assets/LeftRowIcon.astro';

const intervalTime = 5000; // Cambia la diapositiva cada 5 segundos
const showAnimation = ref(false);
const leftAnimationName = ref('');
const middleAnimationName = ref('');
const rightAnimationName = ref('');

const index = ref(0);
const prevIndex = computed(() => {
    if(index.value == 0) return experienceData.length -1;

    return index.value -1;
})
const nextIndex = computed(() => {
    if(index.value == experienceData.length -1) return 0;

    return index.value + 1;
})

const prevSlide = () => {
    leftAnimationName.value = 'left-to-right-prev-animation';
    middleAnimationName.value = 'middle-right-to-left-prev-animation'
    rightAnimationName.value = 'right-to-left-prev-animation';
    showAnimation.value = true;

    setTimeout(() => {
        index.value++;
        if (index.value >= experienceData.length) {
            index.value = 0;
        }
        leftAnimationName.value = '';
        middleAnimationName.value = ''
        rightAnimationName.value = '';
        showAnimation.value = false;
    }, 950);
}

const nextSlide = () => {
    leftAnimationName.value = 'left-to-right-next-animation';
    middleAnimationName.value = 'middle-left-to-right-next-animation'
    rightAnimationName.value = 'right-to-left-next-animation';
    showAnimation.value = true;

    setTimeout(() => {
        index.value--;
        if (index.value < 0) {
            index.value = experienceData.length - 1;
        }
        leftAnimationName.value = '';
        middleAnimationName.value = ''
        rightAnimationName.value = '';
        showAnimation.value = false;
    }, 950);
}

// setInterval(nextSlide, intervalTime);
</script>

<template>
    <div class="carouselContainer">
        <button @click="prevSlide">
            -
        </button>
        <div class="prevSlide" :class="{
            [leftAnimationName]: showAnimation
        }">
            {{ experienceData[prevIndex].description }}
        </div>
        <div class="currentSlide" :class="{
            [middleAnimationName]: showAnimation
        }">
            {{experienceData[index].description}}
        </div>
        <div class="nextSlide" :class="{
            [rightAnimationName]: showAnimation
        }">
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
    perspective: 1000px;
    transform-style: preserve-3d;

    button {
        background-color: transparent;
        height: 50px;
        width: 50px;
        min-width: 50px;
        color: $secondary-color;
        border: 3px solid $secondary-bg-color;
        border-radius: 40px;
        cursor: pointer;
    }

    .prevSlide, .nextSlide, .currentSlide {
        position: relative;
        width: 30%;
    }

    .prevSlide, .nextSlide {
        z-index: 0;
        filter: blur(2px);
        opacity: 50%;
    }

    .currentSlide {
        z-index: 1;
    }

    .prevSlide {
        left: 5%;
        transform: rotateY(300deg);
    }

    .nextSlide {
        right: 5%;
        transform: rotateY(120deg);
    }
}

.right-to-left-next-animation,
.left-to-right-next-animation,
.middle-left-to-right-next-animation,
.right-to-left-prev-animation,
.left-to-right-prev-animation,
.middle-right-to-left-prev-animation {
    animation-duration: 1s;
    animation-timing-function: linear;
}

.right-to-left-next-animation{
    animation-name: right-to-left-next-animation;
}

.left-to-right-next-animation {
    animation-name: left-to-right-next-animation;
}

.middle-left-to-right-next-animation {
    animation-name: middle-left-to-right-next-animation;
}

.right-to-left-prev-animation{
    animation-name: right-to-left-prev-animation;
}

.left-to-right-prev-animation {
    animation-name: left-to-right-prev-animation;
}

.middle-right-to-left-prev-animation {
    animation-name: middle-right-to-left-prev-animation;
}
</style>