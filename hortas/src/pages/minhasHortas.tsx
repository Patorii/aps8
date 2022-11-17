import React,{useState, useEffect} from 'react'
import { Grid } from '../components/Grid'
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { api, IHortas } from '../services/api';


function MinhasHortas() {
  const [hortas, setHortas] = useState<Array<IHortas>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);

  function refresher(boolean:boolean){
    setRefresh(boolean)
  }

  async function getHortas() {
    let hortasUser:Array<IHortas> = []
    await api.get('/horta')
        .then(({ data }) => data.forEach((horta: IHortas) => {
          if(horta.user_id == localStorage.user_id){
            hortasUser.push(horta)
          }
        }))
    setHortas(hortasUser)
    setLoading(false)
}

useEffect(()=>{
  getHortas()
}, [refresh])

  return (
  <>
  <Header logado={true} />
  {loading? <Loader /> : <Grid arrayHortas={hortas} deletar={true} refresh={refresher} />}
  </>
  )
}

export { MinhasHortas }