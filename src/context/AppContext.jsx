import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import Rich from '../api/Rick'
/*import { isMobile } from "react-device-detect"*/
/*import useCuntere from "../hook/UseCountere"*/

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {
    /*const [isMobileDevice, setIsMobile] = useState(false);*/
    const [data, setData] = useState([])
    /*const {cunter, decrease, increase} = useCountere();*/
   /* const [search, setSearch]*/
    useEffect(() => {
        const GetData = async () => {
            // const data = await Rich.get('1')   Data de personaje individual 
            const {data:{results}} = await Rich.get()
            setData(results)
        }
        GetData()
    }, [])
    
  return (
    <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
  )
}

