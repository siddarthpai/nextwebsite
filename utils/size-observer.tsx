import React, {useCallback, useEffect, useState} from "react";

interface ScrollValue{
    innerwidth: number
}
interface Props{
    children?: React.ReactNode;
}

export const SizeContext = React.createContext<ScrollValue>({
    innerwidth: 0
})

const SizeObserver: React.FC<Props> = ({children}) => {
    const [innerwidth, setInnerWidth] = useState(0)
    const handleResize = useCallback(() =>{
        setInnerWidth(window.innerWidth)
    },[])


    useEffect(()=>{
        handleResize()
        window.addEventListener('resize', handleResize, {passive: true})
        return() => window.removeEventListener('resize',handleResize)
    },[handleResize]) 
    return (
        <SizeContext.Provider value={{innerwidth}}>
            {children}
        </SizeContext.Provider>
    )
}

export default SizeObserver