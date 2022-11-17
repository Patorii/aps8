import React, {useState, useEffect} from 'react'
import { AreaBtn, BtnCadastro, Conteudo, HamburguerDiv } from './styles'
import { BsFlower1 } from "react-icons/bs";
import { Button } from '../Button';
import { Link, useLocation } from 'react-router-dom';
import {IoListSharp} from 'react-icons/io5';

interface IHeader {
  logado?: boolean
}
function Header({ logado }: IHeader) {
  const location = useLocation()
  const [show, setShow] = useState<boolean>(false)
  const [home, setHome] = useState<boolean>(false)
  const [minhasHortas, setMinhasHortas] = useState<boolean>(false)

useEffect(() => {
    switch(location.pathname){
      case '/lhome':
        setHome(!home)
        break;
      case '/minhasHortas':
        setMinhasHortas(!minhasHortas)
        break;
    }
}, [location.pathname])

function toggleMenu(){
  setShow(!show)
}

  function clearLocalStorage(){
    localStorage.clear();
  }

  return (
    <Conteudo>
      <BsFlower1 size={44} color={'var(--green-100)'} />
      {logado ? <HamburguerDiv onClick={toggleMenu}><IoListSharp size={44} color={'var(--green-100)'} />
      <AreaBtn show={show}>
        <Link to='/lhome'>
          <BtnCadastro width='180px'><Button buttonKind='button' buttonType='secondary' caption='início' hesPage={home}/></BtnCadastro>
        </Link>
        <Link to='/cadastrarHorta'>
          <BtnCadastro width='180px'><Button buttonKind='button' buttonType='secondary' caption='Cadastrar Horta'  /></BtnCadastro>
        </Link>
        <Link to='/minhasHortas'>
          <BtnCadastro width='180px'><Button buttonKind='button' buttonType='secondary' caption='Minhas Hortas' hesPage={minhasHortas} /></BtnCadastro>
        </Link>
        <Link to='/minhaConta'>
          <BtnCadastro width='180px'><Button buttonKind='button' buttonType='secondary' caption='Minha conta'/></BtnCadastro>
        </Link>
        <Link to='/home'>
          <BtnCadastro width='60px'><Button buttonKind='button' buttonType='secondary' caption='Sair' onClick={clearLocalStorage} /></BtnCadastro>
        </Link>
        </AreaBtn>
          </HamburguerDiv>
        : (
        <Link to='/login'>
          <BtnCadastro><Button buttonKind='button' buttonType='secondary' caption='Entrar' /></BtnCadastro>
        </Link>
      )}
    </Conteudo>
  )
}

export { Header }