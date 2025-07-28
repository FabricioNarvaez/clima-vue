<template>
    <h1 class="titulo">Buscador de clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario @obtenerClima="obtenerClima"/>
    </div>
</template>

<script setup>
    import Formulario from './components/Form.vue';
    import useClima from './composables/useClima';

    const { obtenerClima, clima } = useClima();
</script>