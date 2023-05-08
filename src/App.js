import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import PhoneDetails from './Pages/PhoneDetails';
import NotFound from './Pages/NotFound';

const API_URL = "http://localhost:5005/api/phones";

function App() {
  const [phonesList, setPhonesList] = useState(null)

  const getPhoneList = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setPhonesList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhoneList()
  }, [])

  return (
    <div className="h-full bg-gray-100">
      <Navbar phonesList={phonesList}/>
      <Routes>
        <Route path="/" element= { <Homepage phonesList={phonesList}/>} />
        <Route path="/phones/:id" element= { <PhoneDetails/>} />
        <Route path="/*" element= { <NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
