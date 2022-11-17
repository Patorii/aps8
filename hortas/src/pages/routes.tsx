import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, RouteProps } from 'react-router-dom'
import { AlterarCadastro } from './alterarCadastro'
import { Cadastro } from './cadastro'
import { CadastroHorta } from './cadastroHorta'
import { Home } from './home'
import { HomeLogado } from './homeLogado'
import { Login } from './login'
import { MinhasHortas } from './minhasHortas'


function Rotas() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!localStorage.user_id) {
      switch (pathname) {
        case "/lhome":
          navigate('login');
          break;
        case "/cadastrarHorta":
          navigate('login');
          break;
        case "/minhasHortas":
          navigate('login');
          break;
        case "/minhaConta":
          navigate('login');
          break;
      }
    }
  }, [pathname])
return (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/lhome" element={<HomeLogado />} />
    <Route path="/cadastrarHorta" element={<CadastroHorta />} />
    <Route path="/minhasHortas" element={<MinhasHortas />} />
    <Route path="/minhaConta" element={<AlterarCadastro />} />

  </Routes>
)
}

export { Rotas }
