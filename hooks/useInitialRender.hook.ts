import { useRef, useEffect } from "react";

const useInitialRender = (): boolean => {
    const initialRender = useRef<boolean>(true);

    useEffect(() => { 
        initialRender.current = false;
    }, []);

    return initialRender.current;
}

export {
    useInitialRender
}