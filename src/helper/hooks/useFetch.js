import { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { Context } from '../../context/AuthContext';
import { setCardComponents } from '../../slices/cardSlice';
import { useSelector, useDispatch } from 'react-redux';

const useFetch = (endpoint) => {
  const { state } = useContext(Context);
  const { token } = state;
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState([])

  const options = {
    method: 'GET',
    baseURL: `https://0aae-108-162-166-73.ngrok-free.app/${endpoint}`,
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      
      setIsLoading(false);
      console.log(response.data)
      dispatch(setCardComponents(response.data.map((item) => ({
        // Define your initial state properties here based on the data received
        // For example:
        ...item,
        
      }))));

      
      
    } catch (error) {
      setError(error);
      alert(`There is an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    
    fetchData();
    
  }, []); // Empty dependency array ensures the effect runs only once
  
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;