import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [ flights, setFlights ] = useState([]);

  const searchFlights = (criteria) => {
    console.log(criteria)
  }

  return (
    <AppContext.Provider value={{
      flights: flights,
      searchFlights: searchFlights,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}