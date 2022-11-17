import React, { useState, useEffect } from 'react'
import { AreaForm, AreaLogin, Conteudo, DivBtn, FormLogin, Img, Titulo } from './styles'
import imgCadastro from '../../assets/imgs/imgCadastro.jpg'
import { Input } from '../Inputs'
import { Button } from '../Button'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../Loader'

interface IForm {
    nome: string,
    email: string,
    login: string,
    senha: string,
    cpf: string,
}

function UpdateCadastro() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(true)
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
            if (!form.nome) {
                hasError = true
                newErrors.nome = true
            }
            if (!form.email) {
                hasError = true
                newErrors.email = true
            }
            if (!form.login) {
                hasError = true
                newErrors.login = true
            }
            if (!form.senha) {
                hasError = true
                newErrors.senha = true
            }
            if (!form.cpf) {
                hasError = true
                newErrors.cpf = true
            }
            if (hasError) {
                return setErrors(newErrors)
            }
            await api.put(`/user/${localStorage.user_id}`, {
                nome: form.nome,
                email: form.email,
                login: form.login,
                senha: form.senha,
                cpf: form.cpf,
            })
                .then((resp) => {
                    if (resp.status === 200) {
                        window.alert("Cadastrado alterado com sucesso!")
                        navigate('/lhome')
                    } else {
                        window.alert("Falha ao comunicar com servidor, tente novamente mais tarde!")
                    }
                })
        
    }

    async function getUser() {
        await api.get(`/user/${localStorage.user_id}`)
            .then(({ data }) => {
                setForm({
                    nome: data.nome,
                    login: data.login,
                    senha: data.senha,
                    cpf: data.cpf,
                    email: data.email
                })
            })
        setLoading(false)
    }

    useEffect(() => {
        getUser()
    }, [loading])


    return (
        <Conteudo>
            {loading ? <Loader /> :
                <AreaLogin>
                    <Img src={imgCadastro} />
                    <AreaForm>
                        <FormLogin onSubmit={(e) => handleSubmit(e)}>
                            <Titulo>Altere seus dados</Titulo>
                            <Input value={form.nome} type='text' label='Nome' placeholder='Nome' name='nome' handleChange={handleChange} error={errors.nome} />
                            <Input value={form.email} type='email' label='E-mail' placeholder='E-mail' name='email' handleChange={handleChange} error={errors.email} />
                            <Input value={form.login} type='text' label='Usuário' placeholder='Usuário' name='login' handleChange={handleChange} error={errors.login} />
                            <Input value={form.senha} type='text' label='Senha' placeholder='Senha' name='senha' handleChange={handleChange} error={errors.senha} />
                            <Input value={form.cpf} type='text' label='CPF' placeholder='CPF' name='cpf' handleChange={handleChange} error={errors.cpf} mask='999.999.999-99' />
                            <DivBtn>
                                <Button buttonType='primary' buttonKind='submit' buttonSize='medium' caption='Alterar' />
                            </DivBtn>
                        </FormLogin>
                    </AreaForm>
                </AreaLogin>
            }
        </Conteudo>
    )
}

export { UpdateCadastro }