import React, { useState } from 'react'
import { AreaBotoes, AreaForm, AreaLogin, AvisoCadastro, Conteudo, DivBtn, FormLogin, Img, Titulo } from './styles'
import imgLogin from '../../assets/imgs/imgLogin.jpg'
import { Input } from '../Inputs'
import { Button } from '../Button'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

interface IForm {
    login: string,
    senha: string
}
interface IUser {
    nome: string,
    login: string,
    senha: string,
    cpf: string,
    email: string,
    id: number,
}

function CLogin() {
    const navigate = useNavigate()

    function goToCadastro(){
        navigate('/Cadastro')
    }

    const [errors, setErrors] = useState({
        login: false,
        senha: false
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
        let match = false
        e.preventDefault()
        let hasError = false
        const newErrors = {
            ...errors,
        }

        if (form.login === undefined || form.login === '') {
            hasError = true
            newErrors.login = true
        }
        if (form.senha === undefined || form.senha === '') {
            hasError = true
            newErrors.senha = true
        }
        if (hasError) {
            return setErrors(newErrors)
        }

        await api
            .get('/user')
            .then((res) => {
                res.data.forEach((user: IUser) => {
                    if (user.login === form.login) {
                        if (user.senha === form.senha) {
                            localStorage.setItem('user_id', `${user.id}`)
                            localStorage.setItem('user', user.login)
                            navigate('/lhome')
                            match = true
                        }
                    }  
                })
                if(!match) { window.alert('usuario ou senha incorretos') }

            })
    }

    return (
        <Conteudo>
            <AreaLogin>
                <Img src={imgLogin} />
                <AreaForm>
                    <FormLogin onSubmit={(e) => handleSubmit(e)}>
                        <Titulo>Entre com sua conta</Titulo>
                        <Input type='text' label='Usuário' placeholder='Usuário' name='login' handleChange={handleChange} error={errors.login} />
                        <Input type='password' label='Senha' placeholder='Senha' name='senha' handleChange={handleChange} error={errors.senha} />
                        <AreaBotoes>
                            <DivBtn>
                                <Button buttonType='primary' buttonKind='submit' buttonSize='medium' caption='Entrar' />
                            </DivBtn>
                            <AvisoCadastro>Não possui conta? clique no botão abaixo e cadastre-se</AvisoCadastro>
                            <DivBtn>
                                <Button buttonType='secondary' buttonSize='medium' caption='Cadastrar-se' onClick={goToCadastro} />
                            </DivBtn>
                        </AreaBotoes>
                    </FormLogin>
                </AreaForm>
            </AreaLogin>
        </Conteudo>
    )
}

export { CLogin }