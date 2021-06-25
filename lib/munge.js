function mungeLocationResponse(locationResponse){
  const locationItem = locationResponse[0];

  return {
    formatted_query: locationItem.display_name,
    latitude: locationItem.lat,
    longitude: locationItem.lon
  };
}

module.exports = {
  mungeLocationResponse
};