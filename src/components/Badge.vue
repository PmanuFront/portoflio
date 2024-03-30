<script setup lang="ts">
import type { TechType } from '../models/technonlogie.model';

interface Props {
    name: string;
    type: TechType
}

const { name, type } = defineProps<Props>()
</script>

<template>
    <span :class="type.toLowerCase().trim()">
        {{ name }}
    </span>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
span {
    border-radius: 20px;
    color: white;
    border: 3px solid;
    padding: 7px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    min-width: 40px;
    text-align: center;
}

.lenguajes {
    color: $languages-color;
    border-color: $languages-border-color;
}

.frontend {
    color: $frontend-color;
    border-color: $frontend-border-color;
}

.backend {
    color: $backend-color;
    border-color: $backend-border-color;
}

.control_versiones {
    color: $vc-color;
    border-color: $vc-border-color;
}

.base_datos {
    color: $bd-color;
    border-color: $bd-border-color;
}

.otros {
    color: $other-color;
    border-color: $other-border-color;
}
</style>