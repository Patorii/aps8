import styled from 'styled-components'

interface IProps{
    width?: string
    show?: boolean
}

export const Conteudo = styled.header`
    width: 100%;
    height: auto;
    background-color: var(--brown-600);
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    & a{
        text-decoration: none;
    }
    & a:hover{
        text-decoration: none;
    }
`
export const HamburguerDiv = styled.div<IProps>`
    position:relative;
    height: auto;
    display:block;
    & svg{
        position:absolute;
        display:none;
        left:39%;
    }
    @media (max-width: 1000px) {
        width:180px;
        cursor: pointer;
        display:block;
        & svg{
        align-self: flex-end;
        display:block;
    }
    }
`
export const AreaBtn = styled.div<IProps>`
    display:flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 1000px) {
        margin-top: 50px;
        display:${({show})=> show? 'flex' : 'none'};
        flex-direction:column;
    }
`

export const BtnCadastro = styled.div<IProps>`
    width: ${(props) => props.width || '180px'};
`