import axios from "axios";
import { computed, ref } from "vue";

export default function useClima() {
    const clima = ref({});

    const obtenerClima = async ({ciudad, pais}) => {
        const APIKey = import.meta.env.VITE_openweathermap_key;

        try {
            const GeocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${APIKey}`;

            const { data } = await axios(GeocodingAPI);
            const { lat, lon } = data[0];

            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
            const { data: dataClima} = await axios(currentWeatherUrl);
            clima.value = dataClima;
            console.log("Clima obtenido:", clima.value);
        } catch (error) {
            console.error("Error al obtener la ubicación:", error);
            throw new Error("No se pudo obtener la ubicación. Verifica el nombre de la ciudad y el país.");
        }
    };

    const convertirGrados = (grados) => Math.round(grados - 273.15);

    const mostrarClima = computed(()=> {
        return Object.keys(clima.value).length > 0;
    });

    return {
        obtenerClima,
        mostrarClima,
        convertirGrados,
        clima
    }
}