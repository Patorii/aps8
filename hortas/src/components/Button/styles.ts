import styled from 'styled-components'
import { darken } from 'polished'

interface IButtonProps {
  buttonSize?: string
  buttonType?: string
  hesPage?: boolean
}

function converteTamanho(tamanho: string | undefined) {
  if (tamanho === 'large') {
    return '56px'
  }
  if (tamanho === 'small') {
    return '30px'
  } else {
    return '40px'
  }
}
function converteCorFundo(corEscolhida: string | undefined) {
  if (corEscolhida === 'secondary') {
    return 'var(--green-100)'
  }
  if (corEscolhida === 'warning') {
    return 'var(--yellow-600)'
  } else {
    return 'var(--green-600)'
  }
}
function converteCorEscrita(corEscolhida: string | undefined) {
  if (corEscolhida === 'secondary') {
    return 'var(--brown-600)'
  }
  if (corEscolhida === 'warning') {
    return 'var(--brown-800)'
  } else {
    return 'var(--white)'
  }
}

export const Botao = styled.button<IButtonProps>`
  transition: background-color 0.2s;
  width: 100%;
  height: ${({ buttonSize }) => converteTamanho(buttonSize)};
  padding: 12px 16px 12px 16px;
  background: ${({ buttonType }) => converteCorFundo(buttonType)};
  ${({hesPage})=> hesPage && 'background-color: var(--green-300);'}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;


  &:hover {
    ${(props) => {
      switch (props.buttonType) {
        case 'primary':
          return `background-color: ${darken(0.1, '#004F22')} ;`
        case 'secondary':
          return `background-color: ${darken(0.1, '#E2FFC4')} ;`
        case 'warning':
          return `background-color: ${darken(0.1, '#FFAE11')} ;`
      }
    }}
  }
`

export const Span = styled.span<IButtonProps>`
  margin: ${({ buttonType }) =>
    buttonType === 'warning' ? '0px 8px' : '0px 12px;'};
  font-size: ${({ buttonType }) =>
    buttonType === 'warning' ? '20px' : '16px'};
  font-weight: 700;
  color: ${({ buttonType }) => converteCorEscrita(buttonType)};
`
