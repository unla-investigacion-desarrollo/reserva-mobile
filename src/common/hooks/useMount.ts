import { EffectCallback, useEffect, useState } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMount = (func: EffectCallback) => {
    
    const [mounted, setMounted] = useState(false)
    
    useEffect(()=>{
        if (!mounted){
            setMounted(true)
            func()
        }
    }, [])};
