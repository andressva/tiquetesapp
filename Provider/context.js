import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [ flights, setFlights ] = useState([]);
  const [ filterFlights, setFilterFlights ] = useState([]);
  // const [ history, setHistory ] = useState([]);
  const [ loading, setLoading ] = useState(false)
  const urlAPI = "https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=";

  const getFlights = (codigo) => {
    return flights.filter(f => {
      return f.codigo_reserva.toLowerCase() === codigo
    });
  }

  const getFlightsAPI = async (codigo) => {
    return new Promise(async resolve => {
      const resp = await axios.get(`${urlAPI}${codigo}`)
      resolve(resp.data.respuesta);
    })
  }

  const searchFlights = async (criteria) => {
    setLoading(true);
    const crt = criteria.toLowerCase();
    const thereIs = getFlights(crt)
    if(thereIs.length === 0){
      const resp = await getFlightsAPI(crt)
      if(resp !== null){
        setFilterFlights(resp)
        setFlights([...flights, ...resp])
      } else {
        setFilterFlights([{ error: true }])
      }
      setLoading(false);
    } else {
      setFilterFlights(thereIs)
      setLoading(false);
    }
  }

  return (
    <AppContext.Provider value={{
      flights: flights,
      loading: loading,
      filterFlights: filterFlights,
      searchFlights: searchFlights,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}