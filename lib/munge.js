function mungeLocationResponse(locationResponse){
  const locationData = locationResponse[0];

  return {
    formatted_query: locationData.display_name,
    latitude: locationData.lat,
    longitude: locationData.lon
  };
}

function mungeWeatherResponse(weatherResponse){

  return weatherResponse.data.map(day => {
    return {
      forecast: day.weather.description,
      time: new Date(day.ts * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  });
}


module.exports = {
  mungeLocationResponse, mungeWeatherResponse
};