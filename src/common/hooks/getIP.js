import axios from 'axios';

export const getIP = async() => {
  await axios.get('https://geolocation-db.com/json/').then((response) => {
    console.log(response);
    return response.data.IPv4;
  });
};