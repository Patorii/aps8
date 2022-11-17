import react, {useEffect} from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Rotas } from './pages/routes'


function App() {


  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>

  )
}

export default App
