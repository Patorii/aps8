import styled from 'styled-components'

export const Conteudo = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, var(--brown-600) 0%, var(--brown-900) 100%);
    @media (max-height: 900px) {
        height: auto;
        padding: 24px;
    }
    @media (max-width: 1100px) {
        height: auto;
        padding: 24px;
    }
    @media (max-width: 450px) {
        padding: 0;
    }
`
export const Titulo = styled.p`
    font-size: 24px;
    color: var(--brown-600);
    font-weight: 1000;
    padding: 32px;
    text-align: center;
`

export const AreaForm = styled.div`
    width: 1000px;
    height: 900px;
    border-radius: 10px;
    background-color: var(--green-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
    @media (max-width: 1100px) {
        width:100%;
    }
    @media (max-width: 850px) {
        width:100%;
        height: auto;
    }
`

export const FormCadastroHorta = styled.form`
    border: none;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
`

export const TituloGrid = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: -32px;
    align-self: flex-start;
    @media (max-width: 850px) {
    align-self: center;
    }
`
export const GridInfos = styled.div`
    max-height: 220px;
    display: grid;
    grid-template-columns: 348px 348px;
    grid-template-rows: auto;
    grid-gap: 32px;
    @media (max-width: 850px) {
        max-height: 800px;
        grid-template-columns: 348px
    }
    @media (max-width: 450px) {
        grid-template-columns: 280px;
    }
`
export const GridEndereco = styled.div`
    max-height: 220px;
    display: grid;
    grid-template-columns: 348px 348px;
    grid-template-rows: 34px 34px 34px;
    grid-gap: 48px 32px;
    @media (max-width: 850px) {
    max-height: 1000px;
        grid-template-columns: 348px;
        grid-template-rows: auto auto auto auto auto;
    }
    @media (max-width: 450px) {
        grid-template-columns: 280px;
    }
`
export const GridContato = styled.div`
    max-height: 220px;
    display: grid;
    grid-template-columns: 348px 348px;
    grid-template-rows: 34px;
    grid-gap:32px;
    @media (max-width: 850px) {
        grid-template-columns: 348px;
        grid-template-rows: auto auto;
    }
    @media (max-width: 450px) {
        grid-template-columns: 280px;
    }
`

export const DivBtn = styled.div`
    margin-top: 24px;
    width: 160px;
`
export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const Select = styled.select`
    outline: none;
    width: 348px;
    height:34px;
    background-color: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 2px 16px;
    font-family: Roboto;
    font-size: 16px;
    @media (max-width: 450px) {
        width: 100%;
    }
    &:focus {
      border: 2px solid var(--brown-600);
    }

    &::placeholder {
      font-size: 14px;
      color: var(--brown-600);
      letter-spacing: 0.5px;
      font-family: Roboto;
    }
    & option{
        font-size: 16px;
    }
`

export const TextArea = styled.textarea`
    resize: none;
    outline: none;
    width: 348px;
    height: 150px;
    background-color: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 2px 16px;
    font-family: Roboto;
    font-size: 18px;
    @media (max-width: 450px) {
        width: 100%;
    }
    &:focus {
      border: 2px solid var(--brown-600);
    }

    &::placeholder {
      font-size: 14px;
      color: var(--brown-600);
      letter-spacing: 0.5px;
      font-family: Roboto;
    }
`
export const Erro = styled.span`
    width:100%;
    color: red;
    font-size: 12px;
    `