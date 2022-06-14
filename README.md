# Tuster

Tuster is a platform where you can find tutors and go beyond your limits

```html
<a href="https://www.freepik.com/psd/3d-woman"
  >3d woman psd created by freepik - www.freepik.com</a
>
```

reverse geocoding
https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=1098d42895b74e7d82cbba7d34b68c33

forward geocoding

https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=1098d42895b74e7d82cbba7d34b68c33

```js
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const radiusOfEarth = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = radiusOfEarth * c; // Distance in km
  return d;
};
```
