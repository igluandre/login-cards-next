import { useEffect, useState } from "react";

export const useFetch = (url = "") => {
  const [isState, setIsState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const getFetch = async ( controller ) => {
    setIsState({
      ...isState,
      isLoading: true,
    });

    try {
      const resp = await fetch(url, { signal: controller.signal });
      const data = await resp.json();

      setIsState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setIsState({
        data: null,
        isLoading: false,
        hasError: error.message,
      });
    }
  };
  


  useEffect(() => {

    const controller = new AbortController();

    getFetch(controller);

    return () => controller.abort();
    
  }, [url]);

  return {
    data: isState.data,
    isLoading: isState.isLoading,
    hasError: isState.hasError,
  };
};