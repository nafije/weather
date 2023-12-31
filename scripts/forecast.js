const key='NKdz4Qk9j3GnsLKyHmQYdADjLwzFEgXg';
//get weather
const getWeather= async (location_key) =>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query =`${location_key}?apikey=${key}`;

    const response =await fetch(base+query);
    const data=await response.json();
    return data[0];
}

//get city
const getCity = async (city) =>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data=await response.json();

    return data[0];
}


