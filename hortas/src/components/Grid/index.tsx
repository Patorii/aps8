import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, IHortas } from '../../services/api'
import { Button } from '../Button'
import { AreaBtnDelete, AreaInfo, Card, Contato, Conteudo, DivBtnDelete, GridArea, Localizacao, NomeHorta, TituloDivisao } from './styles'


interface IProps {
    arrayHortas: Array<IHortas>;
    refresh?: (e:boolean) => void;
    deletar?: boolean;
}

function Grid({ deletar, arrayHortas, refresh }: IProps) {
    const navigate = useNavigate()
    const [mustRefresh, setMustRefresh] = useState<boolean>(false)

    async function deletarHorta(e: React.MouseEvent<HTMLButtonElement>) {
        const cardHorta = e.currentTarget.parentNode?.parentNode?.parentNode as HTMLDivElement
        const hortaId = Number(cardHorta.getAttribute('data-horta'))
   
        await api
            .delete(`/horta/${hortaId}`)
            .then((res) => {
                if (res.status === 200) {
                    window.alert('O cadastro da horta foi apagado com sucesso!');
                    if(refresh){
                        refresh(!mustRefresh)
                        setMustRefresh(!mustRefresh)
                    }
                }else{
                    window.alert('Falha interna, tente novamente mais tarde!');
                    console.log(res)
                }})
    }



    return (
        <Conteudo>
            <GridArea>
                {arrayHortas.map((horta, i) => (
                    <Card key={i} data-estado={horta.estado} data-horta={horta.id}>
                        {deletar ? <AreaBtnDelete><DivBtnDelete>
                            <Button buttonType='warning' buttonKind='button' buttonSize='medium' caption='Apagar' onClick={(e: React.MouseEvent<HTMLButtonElement>) => deletarHorta(e)} />
                        </DivBtnDelete></AreaBtnDelete> :
                            <></>
                        }
                        <AreaInfo>
                            <NomeHorta>{horta.nome}</NomeHorta>
                            <p>{horta.descricao}</p>
                        </AreaInfo>
                        <TituloDivisao>Localização</TituloDivisao>
                        <Localizacao>
                            <p>Estado: {horta.estado}</p>
                            <p>Cidade: {horta.cidade}</p>
                            <p>Bairro: {horta.bairro}</p>
                            <p>endereço: {horta.endereco}</p>
                            <p>Nº: {horta.numero}</p>
                        </Localizacao>
                        <TituloDivisao>Contato:</TituloDivisao>
                        <Contato>
                            <p>Telefone: {horta.telefone}</p>
                            <p>E-mail: {horta.email}</p>
                        </Contato>

                    </Card>
                ))
                }
            </GridArea>
        </Conteudo>
    )
}

export { Grid }