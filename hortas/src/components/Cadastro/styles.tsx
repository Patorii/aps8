import styled from 'styled-components'

export const Conteudo = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, var(--brown-600) 0%, var(--brown-900) 100%);
    @media (max-width: 530px) {
        padding: 0px 12px;
    }
`

export const AreaLogin = styled.div`
    width: 1000px;
    height: 700px;
    background-color: var(--green-100);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 500px 500px;
    grid-template-rows: 700px;
    @media (max-width: 1050px) {
        width: 750px;
        grid-template-columns: 375px 375px;
    }
    @media (max-width: 800px) {
        width: 500px;
        grid-template-columns: 500px;
    }
    @media (max-width: 530px) {
        width: 100%;
        grid-template-columns: 100%;
    }
`
export const Titulo = styled.p`
    font-size: 24px;
    color: var(--brown-600);
    font-weight: 1000;
    margin-bottom: 32px;
    text-align:center;
`
export const Img = styled.img`
    width:100%;
    height:100%;
    border-radius: 10px 0px 0px 10px;
    @media (max-width: 800px) {
        display: none;
    }
`
export const AreaForm = styled.div`
    width:100%;
    height:100%;
    padding: 32px;
`

export const FormLogin = styled.form`
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const DivBtn = styled.div`
    margin-top: 24px;
    width: 160px;
`