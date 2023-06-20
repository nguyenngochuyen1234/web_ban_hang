import { createContext, useEffect, useState } from "react";
import productsApi from './api'
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const arrCollections = [
        {
          name:"PERSONALIZED",
          pathName:"personalized",
        },
        {
          name:"J1S SNEAKERS",
          pathName:"j1s-sneakers",
        },
        {
          name:"HIGH TOP SHOES",
          pathName:"high-top-shoes",
        },
      ]
      const [productsArr, setProducsArr] = useState(productsApi)
      
    const value = {
        arrCollections,
        productsArr, 
        setProducsArr
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}