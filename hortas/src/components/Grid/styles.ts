import styled from "styled-components";

export const Conteudo = styled.main`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    min-height: 900px;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--green-100);
`
export const GridArea = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: 650px;
    grid-gap: 50px 32px;
    @media(max-width: 1400px) {
    grid-template-columns: repeat(2, 400px);
    grid-template-rows: 650px;
    }
    @media(max-width: 1000px) {
    grid-template-columns: 400px;
    grid-template-rows: 650px;
    }
    @media(max-width: 450px) {
    grid-template-columns: 300px;
    grid-template-rows: 800px;
    }

`
export const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: var(--brown-600); 
    font-size: 18px;
    border-top: solid 15px var(--green-600);
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-radius: 0px 0px 16px 16px;
    color: var(--green-100);
    box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.4);
    overflow-y: auto;
`
export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width:100%;
`
export const NomeHorta = styled.p`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
`
export const Descricao = styled.p`
    font-size: 16px;
    text-align: center;
    font-weight: 400;
`
export const TituloDivisao = styled.p`
    font-size: 18px;
    font-weight: 600;
`
export const Localizacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 0px 16px;
`
export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 0px 16px;
`

export const AreaBtnDelete = styled.div`
    margin-top: 12px;
    width: 100%;
    display:flex;
    justify-content: center;
`
export const DivBtnDelete = styled.div`
    width: 80px;
`