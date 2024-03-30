<script setup lang="ts">
import { ref, computed } from 'vue';
import AccordionItem from './AccordionItem.vue';
import {experienceData} from '../data/experience.data';

const currentIndex = ref(0);

const showHideDescription = ((index: number) => {
    return currentIndex.value == index;
})

const swapAccordionItem = (index:  number) => {
    currentIndex.value = index;
}
</script>

<template>
    <div class="accordion-container">
        <template v-for="(experience, index) in experienceData">
            <AccordionItem 
                :experienceData="experience" 
                :showDescription="showHideDescription(index)" 
                :onClickItem="() => swapAccordionItem(index)"
            />
        </template>
    </div>
</template>

<style>
.accordion-container {
display: flex;
flex-direction: column;
align-items: center;
max-height: 45vh;
width: 100%;
overflow: auto;
}
</style>