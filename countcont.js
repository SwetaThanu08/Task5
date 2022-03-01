import React,{createContext, useContext} from 'react';
import { exp } from 'react-native/Libraries/Animated/Easing';

const CountContext = createContext();


export default function CountContextProvider({children})
{
    const [count, setCount]= React.useState(0);
    const [count2, setCount2]= React.useState(0);
    const [count3, setCount3]= React.useState(0);

    return(
        <CountContext.Provider
        value={{count, setCount, count2, setCount2,count3, setCount3}}>
        {children}
        </CountContext.Provider>
    )
    
}
export function useCountContext()
    {
        return useContext(CountContext);
    }