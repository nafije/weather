const cityForm=document.querySelector('form');
const card =document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');

const updateUI=(data)=>{
    const cityDetails=data.cityDetails;
    const weather=data.weather;

    //update template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;
    const iconSrc=`images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

//change image for the days and nights
  let timeSrc=null;

  if(weather.IsDayTime){
    timeSrc='images/day.svg';
  }else{
    timeSrc='images/night.svg';
  }
  time.setAttribute('src',timeSrc);
    // remove the d-none class 
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  };
};
const updateCity=async (city) =>{

    const cityDetails=await getCity(city);
    const weather =await getWeather(cityDetails.Key);
    console.log(cityDetails);
    return {
        cityDetails:cityDetails,
        weather:weather
    };
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update new city
    updateCity(city)
    .then(data => updateUI(data));
});

