<template>
    <h1 class="titulo">Buscador de clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario @obtenerClima="obtenerClima"/>
        <Spinner v-if="spinner"/>
        <Clima v-if="mostrarClima" :clima="clima"/>
        <Alert v-if="errorMessage">{{ errorMessage }}</Alert>
    </div>
</template>

<script setup>
    import Formulario from './components/Form.vue';
    import Clima from './components/Clima.vue';
    import useClima from './composables/useClima';
    import Spinner from './components/Spinner.vue';
    import Alert from './components/Alert.vue';

    const { obtenerClima, clima, mostrarClima, spinner, errorMessage} = useClima();
</script>