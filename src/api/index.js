import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
              'X-RapidAPI-Key': '0f77379f24mshda0ee91f2261cd9p14a178jsn86d5ccb6e22c',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}