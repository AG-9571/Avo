import { useState, useEffect } from 'react';
export function usePost(url: string) {
  const [dataPost, setData] = useState<any[]>([]);
  const [body, setBody] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log('body', body)
   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });        
        const data = await response.json();        
        setData(data.result || data.error); // Si no estás seguro de que la data siempre venga bajo "result", esto evitará errores.
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();  
    }, [url, body] )     
   return { dataPost, setBody, loading, error };
}