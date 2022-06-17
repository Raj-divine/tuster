const addressFocusHandler = (setCoords, setFormData) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(async (location) => {
      setCoords(location.coords);
      const { latitude, longitude } = location.coords;

      const response = await fetch(
        `api/get-user-location?q=${latitude}+${longitude}`
      );
      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        address: data.results[0].formatted,
      }));
    });
  }
};

export default addressFocusHandler;
