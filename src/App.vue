<template>
    <h1 class="titulo">Buscador de clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario @obtenerClima="obtenerClima"/>
        <Clima v-show="mostrarClima" :clima="clima"/>
    </div>
</template>

<script setup>
    import Formulario from './components/Form.vue';
    import Clima from './components/Clima.vue';
    import useClima from './composables/useClima';

    const { obtenerClima, clima, mostrarClima} = useClima();
</script>