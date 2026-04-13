# Formulario e Validacao - Lista de Exercicios

Este projeto contem tres exercicios progressivos para praticar React Native com formularios, validacao e controle de fluxo.

## Visao geral

| Exercicio | Nivel | Tema principal |
| --- | --- | --- |
| 1 | Iniciante | Busca com debounce |
| 2 | Intermediario | Busca de CEP com React Hook Form |
| 3 | Avancado | Wizard de cadastro em 3 etapas |

---

## Exercicio 1 - Campo de Busca com Debounce 🟢

### Objetivo

Criar uma tela com um `TextInput` de busca e so disparar a pesquisa apos **500ms** sem digitacao.

### Requisitos

- Usar `useState` para armazenar o valor digitado.
- Usar `useEffect` para controlar o timer de debounce.
- Usar cleanup no `useEffect` para cancelar o timer anterior quando o usuario digitar novamente.
- Simular a busca com `console.log` ou exibindo o termo na tela.

### Criterio de conclusao

- A pesquisa nao dispara a cada tecla.
- A pesquisa dispara apenas quando o usuario para de digitar por 500ms.

---

## Exercicio 2 - Formulario de Endereco com Busca de CEP 🟡

### Objetivo

Criar um formulario com os campos:

- CEP
- Rua
- Bairro
- Cidade
- Estado

Quando o CEP tiver 8 digitos, buscar os dados na API:

`https://viacep.com.br/ws/[cep]/json/`

### Requisitos

- Usar React Hook Form para gerenciar o formulario.
- Ao receber os dados do ViaCEP, preencher os campos com `reset()`.
- Exibir `ActivityIndicator` enquanto a busca estiver em andamento.
- Tratar CEP invalido (exemplo: retorno com `erro: true` ou falha na requisicao).

### Criterio de conclusao

- O endereco e preenchido automaticamente apos CEP valido.
- O usuario recebe feedback visual durante a busca.
- Erros de CEP invalido sao tratados de forma clara.

---

## Exercicio 3 - Wizard de Cadastro em 3 Etapas 🔴

### Objetivo

Criar um formulario multi-etapas usando **um unico `useForm`** para todo o fluxo.

### Etapas

1. Etapa 1: `nome`, `email`
2. Etapa 2: `senha`, `confirmar senha` (validando com `watch`)
3. Etapa 3: revisao de todos os dados antes de confirmar

### Requisitos

- Validar cada etapa antes de avancar com `trigger(['campo1', 'campo2'])`.
- Nao exibir erros de campos de etapas futuras.
- Adicionar barra de progresso visual.
- Adicionar botoes de navegacao: `Anterior` e `Proximo`.

### Criterio de conclusao

- O usuario so avanca quando os campos da etapa atual estao validos.
- A revisao final mostra todos os dados preenchidos.
- O fluxo entre etapas fica claro e intuitivo.

---

## Sugestao de entrega

- Criar uma tela para cada exercicio.
- Manter componentes reutilizaveis para input e mensagem de erro.
- Garantir experiencia consistente entre Android e iOS.

Boa pratica e bons estudos.
