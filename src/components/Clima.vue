<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ convertirGrados(clima.main.temp) }}&deg;C</p>
        <div class="temperaturas">
            <p>Min: <span>{{ convertirGrados(clima.main.temp_min) }}&deg;C</span></p>
            <p>Max: <span>{{ convertirGrados(clima.main.temp_max) }}&deg;C</span></p>
        </div>
    </div>
</template>

<script setup>
    import useClima from '../composables/useClima';
    const { convertirGrados } = useClima();

    defineProps({
        clima: {
            type: Object,
            required: true
        }
    });
</script>