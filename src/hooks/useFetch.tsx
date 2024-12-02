import axios from "axios"
import { useEffect, useState } from "react"

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}


const useFetch = <T,>(url: string) => {
  const [dataApi, setDataApi] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })
  
  const getData = async () => {
    setDataApi({
      data: null,
      loading: true,
      error: null,
    })  
    try {
      const resp = await axios.get(url)
      setDataApi({
        data: resp.data,
        loading: false,
        error: null
      })
    } catch (err) {
      setDataApi({
        data: null,
        loading: true,
        error: (err as Error).message
      })
    }
    
  }

  useEffect(() => {
    getData()
  }, [url])

  return { ...dataApi }
}

export default useFetch