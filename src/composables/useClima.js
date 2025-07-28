import axios from "axios";
export default function useClima() {

    const obtenerClima = async ({ciudad, pais}) => {
        const APIKey = import.meta.env.VITE_openweathermap_key;

        try {
            const GeocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${APIKey}`;

            const { data } = await axios(GeocodingAPI);
            const { lat, lon } = data[0];

            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
            const { data: dataClima} = await axios(currentWeatherUrl);
            console.log("Datos de la ubicación:", dataClima);
            
        } catch (error) {
            console.error("Error al obtener la ubicación:", error);
            throw new Error("No se pudo obtener la ubicación. Verifica el nombre de la ciudad y el país.");
        }
    }

    return {
        obtenerClima,
    }
}