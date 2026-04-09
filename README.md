# POO Fullstack - Sistema de Clinica (MVC)

Projeto academico em Node.js com foco em Programacao Orientada a Objetos (POO) e organizacao por camadas no padrao MVC (Model, View, Controller).

Atualmente, o modulo de Medico esta implementado de forma funcional em memoria. O modulo de Paciente ja esta estruturado em pastas, mas ainda sem implementacao.

## Objetivos do projeto

- Praticar separacao de responsabilidades com MVC.
- Aplicar conceitos de classe, construtor e objetos.
- Implementar operacoes CRUD (Create, Read, Update, Delete).
- Evoluir para um sistema de clinica com mais de um modulo.

## Tecnologias

- Node.js
- JavaScript (ES Modules)
- prompt-sync (dependencia instalada para futuras interacoes via terminal)

## Estrutura do projeto

```text
poo-fullstack/
	src/
		app.js
		config/
			database.js
		modulos/
			medico/
				controller/
					medico.controller.js
				model/
					medico.model.js
				view/
					medico.view.js
			paciente/
				controller/
					paciente.controller.js
				model/
					paciente.model.js
				view/
					paciente.view.js
	package.json
	README.md
```

## Arquitetura MVC aplicada

### Model

Responsavel por representar a estrutura da entidade.

No modulo medico:
- `MedicoModel` define os atributos de cada medico:
	- `id`
	- `nome`
	- `telefone`
	- `email`
	- `especialidade`
	- `crm`

### Controller

Responsavel pela regra de negocio e manipulacao de dados.

No modulo medico, o controller oferece:
- `criarCadastro(...)`
- `listar()`
- `atualizar(...)`
- `excluirPorId(id)`
- `listarPorId(id)`
- `excluirTodos()`

### View

Responsavel pela camada de exibicao e entrada/saida com usuario.

Observacao: a view de medico e paciente ainda nao foi implementada no estado atual.

### Banco em memoria

O arquivo `src/config/database.js` exporta um array em memoria:

```js
export const database = []
```

Isso significa que os dados existem apenas durante a execucao do programa.

## Como executar

## 1) Instalar dependencias

```bash
npm install
```

## 2) Iniciar o projeto

```bash
npm start
```

Script configurado em `package.json`:

```json
"scripts": {
	"start": "node src/app.js"
}
```

## Estado atual

- `src/app.js` esta vazio.
- Modulo de medico: parcialmente implementado e pronto para evolucao.
- Modulo de paciente: estrutura criada, implementacao pendente.

## Roadmap sugerido

1. Criar fluxo inicial em `src/app.js` para testar CRUD de medico.
2. Finalizar `excluirPorId` no controller de medico.
3. Implementar `medico.view.js` com exibicao organizada de dados.
4. Replicar o padrao MVC para paciente.
5. Separar armazenamento por entidade (ex.: `medicos` e `pacientes`) para evitar mistura no mesmo array.
6. Adicionar validacoes (campos obrigatorios, formato de email, CRM unico).

## Boas praticas adotadas

- Organizacao por modulos (`medico`, `paciente`).
- Separacao por camada (`model`, `controller`, `view`).
- Uso de `try/catch` nas operacoes do controller para tratamento basico de erro.

## Licenca

Este projeto utiliza a licenca MIT. Consulte o arquivo [LICENSE](LICENSE) para os termos completos.

