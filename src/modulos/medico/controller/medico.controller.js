import { MedicoModel } from "../model/medico.model.js";
// desestruturando o banco de dados para usar o array do database.js
import { database } from "../../../../config/database.js";

export class MedicoController {
    // ação === metodo 
    static criarCadastro(id,  nome, telefone, email, especialidade, crm) {
        try {
            // verificando se os dados estão preenchidos
            if(!id || !nome || !telefone || !email || !especialidade || !crm){
                return console.error("Para cadastro do medico, deve-se preencher todos os dados")
            }
            const medico = new MedicoModel(id,  nome, telefone, email, especialidade, crm)
            database.push(medico)
            console.log("Medico cadastrado com sucesso:", medico)
        } catch (error) {
            console.error("Erro ao cadastrar o medico:", error.message)
        }
    }
    static listar() {
        try {
            if(database.length === 0){
                return console.error("Nenhum medico encontrado!")
            }
            console.table(database)
        } catch (error) {
            console.error("Erro ao listar o medico:", error.message)
        }
    }
    static atualizar(id,  novo_nome, novo_telefone, novo_email, nova_especialidade) {
        try {
            if(!id){
                return console.error("O id deve ser fornecido para atualização cadastral!")
            }
            const medico = database.find(element => element.id === id)
            if(!medico){
                return console.error("Medico não encontrado!")
            }
            medico.nome = novo_nome || medico.nome
            medico.telefone = novo_telefone || medico.telefone
            medico.email = novo_email || medico.email
            medico.especialidade = nova_especialidade || medico.especialidade
            console.log("Dados atualizados com sucesso!")
        } catch (error) {
            console.error("Erro ao atualizar o medico:", error.message)
        }
    }
    static excluirPorId(id) {
        try {
            const index = database.findIndex(medico => medico.id === id)
            if(index === -1){
                return console.error("Medico não encontrado!")
            }
            
        } catch (error) {
            console.error("Erro ao excluir medico por id:", error.message)
        }
    }
    static listarPorId(id) {
        try {
            const medico = database.find(element => element.id === id)
            if(!medico){
                return console.error("Medico não encontrado!")
            }
            console.table(medico)
        } catch (error) {
            console.error("Erro ao listar o medico por id:", error.message)
        }
    }
    static excluirTodos() {
        try {
            database.length = 0
        } catch (error) {
            console.error("Erro ao excluir todos os medicos:", error.message)
        }
    }

}