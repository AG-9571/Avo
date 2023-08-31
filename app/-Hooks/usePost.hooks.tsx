import { useState, useEffect } from 'react';
export function usePost(url: string) {
  const [dataPost, setData] = useState<any[]>([]);  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async (postData: Object) => {
    setLoading(true);
    try {        
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });        
      const data = await response.json();        
      setData(data.result || data.error || data); // Si no estás seguro de que la data siempre venga bajo "result", esto evitará errores.
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
   return { dataPost,fetchData ,loading, error };
}