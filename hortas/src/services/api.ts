import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export interface IHortas {
    id: number,
    user_id: number,
    nome: string,
    descricao: string,
    endereco: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    email: string,
    telefone: number
}