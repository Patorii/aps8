import React, { useState } from 'react'
import { AreaForm, AreaLogin, Conteudo, DivBtn, FormLogin, Img, Titulo } from './styles'
import imgCadastro from '../../assets/imgs/imgCadastro.jpg'
import { Input } from '../Inputs'
import { Button } from '../Button'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

interface IForm {
    nome: string,
    login: string,
    senha: string,
    cpf: string,
    email: string,

}


function CCadastro() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        nome: false,
        login: false,
        senha: false,
        cpf: false,
        email: false,
    })

    const [form, setForm] = useState<IForm>({} as IForm)

    const handleChange = (
        input:
            | React.ChangeEvent<HTMLInputElement>
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
        if (form.email === undefined || form.email === '') {
            hasError = true
            newErrors.email = true
        }
        if (form.login === undefined || form.login === '') {
            hasError = true
            newErrors.login = true
        }
        if (form.senha === undefined || form.senha === '') {
            hasError = true
            newErrors.senha = true
        }
        if (form.cpf === undefined || form.cpf === '') {
            hasError = true
            newErrors.cpf = true
        }
        if (hasError) {
            return setErrors(newErrors)
        }

        await api.post('/user', {
            nome: form.nome,
            email:  form.email,
            login: form.login,
            senha: form.senha,
            cpf: form.cpf,
        })
            .then((resp) => {
                if (resp.status === 201) {
                    window.alert("Cadastrado com sucesso, clique em ok para tentar entrar!")
                    navigate('/login')
                }else{
                    window.alert("Falha ao comunicar com servidor, tente novamente mais tarde!")
                }
            })

    }

    return (
        <Conteudo>
            <AreaLogin>
                <Img src={imgCadastro} />
                <AreaForm>
                    <FormLogin onSubmit={(e) => handleSubmit(e)}>
                        <Titulo>Crie a sua conta</Titulo>
                        <Input type='text' label='Nome' placeholder='Nome' name='nome' handleChange={handleChange} error={errors.nome} />
                        <Input type='email' label='E-mail' placeholder='E-mail' name='email' handleChange={handleChange} error={errors.email} />
                        <Input type='text' label='Usuário' placeholder='Usuário' name='login' handleChange={handleChange} error={errors.login} />
                        <Input type='text' label='Senha' placeholder='Senha' name='senha' handleChange={handleChange} error={errors.senha} />
                        <Input type='text' label='CPF' placeholder='CPF' name='cpf' handleChange={handleChange} error={errors.cpf} mask='999.999.999-99' />
                        <DivBtn>
                            <Button buttonType='primary' buttonKind='submit' buttonSize='medium' caption='Cadastrar' />
                        </DivBtn>
                    </FormLogin>
                </AreaForm>
            </AreaLogin>
        </Conteudo>
    )
}

export { CCadastro }