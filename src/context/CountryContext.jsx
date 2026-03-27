import { createContext } from "react";
import countryFacts from "../api/countryData.json" 

const CountryContext = createContext() 

export const CountryProvider = ({children}) => {
      return (
        <CountryContext.Provider value={{countryFacts}}>
            {children}
        </CountryContext.Provider>
      )
}

export default CountryContext