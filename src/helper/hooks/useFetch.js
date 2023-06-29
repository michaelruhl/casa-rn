import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/AuthContext'



const useFetch = (endpoint) => {
    const { state } = useContext(Context)
    const { token } = state

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    baseURL: `https://042f-2607-f7a0-d-f001-f31d-1beb-5748-6bd5.ngrok-free.app/${endpoint}`,
    
    headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
  };


  
  const fetchData = async () => {
    setIsLoading(true);

    console.log('here is the token',token)
    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log('here is the response', response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      
      alert(`There is an error: ${error}`);
    } finally {
      setIsLoading(false);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
