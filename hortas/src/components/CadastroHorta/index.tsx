import React, { useState } from 'react'
import { AreaForm, Conteudo, DivBtn, Erro, FormCadastroHorta, GridContato, GridEndereco, GridInfos, Label, Select, TextArea, Titulo, TituloGrid } from './styles'
import { Input } from '../Inputs'
import { Button } from '../Button'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { UF } from '../../services/estados'

interface IForm {
    nome: string,
    descricao: string,
    estado: string,
    cidade: string,
    bairro: string,
    endereco: string,
    numero: string,
    email: string,
    telefone: string,

}


function CCadastroHorta() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        nome: false,
        descricao: false,
        estado: false,
        cidade: false,
        bairro: false,
        endereco: false,
        numero: false,
        email: false,
        telefone: false,
    })

    const [form, setForm] = useState<IForm>({} as IForm)

    const handleChange = (
        input:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = input.target

        setForm({
            ...form,
            [name]: value,
        })

        setErrors({
            ...errors,
            [name]: false,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        let hasError = false
        const newErrors = {
            ...errors,
        }

        if (form.nome === undefined || form.nome === '') {
            hasError = true
            newErrors.nome = true
        }
        if (form.descricao === undefined || form.descricao === '') {
            hasError = true
            newErrors.descricao = true
        }
        if (form.estado === undefined || form.estado === '') {
            hasError = true
            newErrors.estado = true
        }
        if (form.cidade === undefined || form.cidade === '') {
            hasError = true
            newErrors.cidade = true
        }
        if (form.bairro === undefined || form.bairro === '') {
            hasError = true
            newErrors.bairro = true
        }
        if (form.endereco === undefined || form.endereco === '') {
            hasError = true
            newErrors.endereco = true
        }
        if (form.numero === undefined || form.numero === '') {
            hasError = true
            newErrors.numero = true
        }
        if (form.email === undefined || form.email === '') {
            hasError = true
            newErrors.email = true
        }
        if (form.telefone === undefined || form.telefone === '') {
            hasError = true
            newErrors.telefone = true
        }

        if (hasError) {
            return setErrors(newErrors)
        }

        await api.post('/horta', {
            user_id: localStorage.user_id,
            nome: form.nome,
            descricao: form.descricao,
            estado: form.estado,
            cidade: form.cidade,
            bairro: form.bairro,
            endereco: form.endereco,
            numero: form.numero,
            email: form.email,
            telefone: form.telefone.replace('_', '').replace('-', ''),
        })
            .then((resp) => {
                if (resp.status === 201) {
                    window.alert("A horta foi cadastrada com sucesso!")
                    navigate('/lhome')
                }
            })

    }

    return (
        <Conteudo>
                <AreaForm>
                    <Titulo>Cadastre sua horta comunitária</Titulo>
                    <FormCadastroHorta onSubmit={(e) => handleSubmit(e)}>
                        <TituloGrid>Informações:</TituloGrid>
                        <GridInfos>
                            <Input type='text' label='Nome' placeholder='Nome' name='nome' handleChange={handleChange} error={errors.nome} />
                            <div>
                                <Label htmlFor='descricao'>Descreva informações sobre a horta</Label>
                                <TextArea placeholder='Descrição' name='descricao' onChange={handleChange}/>
                                {errors.descricao && <><br /><Erro>Corrija o preenchimento do campo Descrição!</Erro></>  }
                            </div>
                        </GridInfos>
                        <TituloGrid>Localização:</TituloGrid>
                        <GridEndereco>
                            <div>
                            <Label htmlFor='estado'>Estado</Label>
                            <Select name='estado' onChange={handleChange}>
                                {UF.map((uf, i)=>(
                                    <option key={i} value={uf.sigla}>{uf.sigla} - {uf.nome}</option>
                                ))}
                            </Select>
                            </div>
                            <Input type='text' label='Cidade' placeholder='Cidade' name='cidade' handleChange={handleChange} error={errors.cidade} />
                            <Input type='text' label='Bairro' placeholder='Bairro' name='bairro' handleChange={handleChange} error={errors.bairro} />
                            <Input type='text' label='Endereco' placeholder='Endereço' name='endereco' handleChange={handleChange} error={errors.endereco} />
                            <Input type='text' label='Numero' placeholder='Numero' name='numero' handleChange={handleChange} error={errors.numero} />
                        </GridEndereco>
                        <TituloGrid>Contato:</TituloGrid>
                        <GridContato>
                            <Input type='email' label='E-mail' placeholder='E-mail' name='email' handleChange={handleChange} error={errors.email} />
                            <Input type='tel' label='Celular ou Telefone' placeholder='Celular ou Telefone' name='telefone' handleChange={handleChange} error={errors.telefone} mask="(99)99999-9999" />
                        </GridContato>
                        <DivBtn>
                            <Button buttonType='primary' buttonKind='submit' buttonSize='medium' caption='Cadastrar' />
                        </DivBtn>
                    </FormCadastroHorta>
                </AreaForm>
        </Conteudo>
    )
}

export { CCadastroHorta }