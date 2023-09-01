import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'


export function useDelete(url: string) {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para refrescar los datos
  const fetchData = async (id: Object) => {
    setLoading(true);
    try {        
      const response = await fetch(url, {
        method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',  // Tipo de contenido de la solicitud
        },
        body: JSON.stringify(id)        
      });        
      const data = await response.json();        
      setData(data.result || data.error || data); // Si no estás seguro de que la data siempre venga bajo "result", esto evitará errores.
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}