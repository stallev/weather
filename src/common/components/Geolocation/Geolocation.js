import React, { useState,useEffect } from 'react';
import axios from 'axios'

const Geolocation = () => {
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    getData();
  }, [])
  return (
    <div>
      
    </div>
  );
};

export default Geolocation;