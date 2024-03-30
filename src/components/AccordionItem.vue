<script setup lang="ts">
import {type Experience} from '../models/experience.model';
import Badge from './Badge.vue';
    
interface Props {
    experienceData: Experience
    showDescription: boolean;
}

const { experienceData } = defineProps<Props>()
const emit = defineEmits(['clickItem']);

const showHideItem = () => {
    console.log('emit');
    emit('clickItem')
}
</script>

<template>
    <div class="accordion-item-container">
        <div class="accordion-item-title">
            <div class="accordion-item-title-content">
                <h3>{{ experienceData.title }}</h3> 
                <em>{{ experienceData.enterprise }}</em>
            </div>
            <button @click="showHideItem">
                +
            </button>
        </div>
        <div class="accordion-item-description" v-if="showDescription">
            <p>
                {{ experienceData.description }}
            </p>
            <ul>
                <li v-for="technologie in experienceData.technologies">
                    <Badge :name="technologie.name" :type="technologie.type"/>        
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.accordion-item-container{
@import '../styles/main.scss';
color: $primary-color;
width: 55%;
gap: 10px;


    .accordion-item-title{
        display: flex;
        align-content: center;
        justify-content: space-between;
        border: 3px solid $secondary-bg-color;
        padding: 10px;

        h3{
            margin: 0;
            color: $title-color;
        }

        button {
            background: transparent;
            color: $secondary-color;
            border: none;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .accordion-item-description{
        padding: 10px;
        ul {
            display: flex;
            justify-content: center;
            padding: 0;
            gap: 10px;
    
            li {
                list-style: none;
                width: fit-content !important;
    
                span {
                    display: block;
                }
            }
        }
    }
}
</style>