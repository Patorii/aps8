import React, {useState, useEffect} from 'react'
import { Grid } from '../components/Grid'
import { Header } from '../components/Header'
import { Loader } from '../components/Loader';
import { api, IHortas } from '../services/api';

function Home() {
  const [hortas, setHortas] = useState<Array<IHortas>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  
  async function getHortas() {
      await api.get('/horta')
          .then(({ data }) => setHortas(data))
      setLoading(false)
  }
  
  useEffect(()=>{
    getHortas()
  }, [])
    return (
    <>
      <Header />
      {loading? <Loader /> : <Grid arrayHortas={hortas} />}
    </>
  )
}

export { Home }