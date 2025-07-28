<template>
    <form class="formulario" @submit.prevent="consultarClima">
        <Alert v-if="error">{{ error }}</Alert>
        <div class="campo">
            <label for="ciudad">Ciudad:</label>
            <input id="ciudad" v-model="busqueda.ciudad" type="text" placeholder="Ingresa una ciudad" />
        </div>
        <div class="campo">
            <label for="pais">País:</label>
            <select id="pais" v-model="busqueda.pais">
                <option value="">Selecciona un país</option>
                <option v-for="pais in paises" :value="pais.codigo">
                    {{ pais.nombre }}
                </option>
            </select>
        </div>

        <input type="submit" value="Consultar clima">
    </form>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import Alert from './Alert.vue';

    const error = ref('');
    const busqueda = reactive({
        ciudad: '',
        pais: ''
    });

    const emit = defineEmits(['obtenerClima']);

    const paises = [
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'PE', nombre: 'Perú' }
    ]

    const consultarClima = () => {
        if (Object.values(busqueda).includes('')) {
            error.value = 'Todos los campos son obligatorios';
            return;
        }
        error.value = '';
        emit('obtenerClima', busqueda);
    }
</script>
