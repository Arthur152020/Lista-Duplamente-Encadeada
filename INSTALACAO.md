# Instruções de Instalação e Execução

## Pré-requisitos

Para executar este projeto, você precisa ter o **Node.js** instalado no seu computador.

### Instalando o Node.js

1. Acesse o site oficial: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Verifique a instalação abrindo o terminal e digitando:
   ```bash
   node --version
   npm --version
   ```

## Executando o Projeto

Após instalar o Node.js, siga estes passos:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o projeto:**
   ```bash
   npm run dev
   ```

3. **Ou compile e execute:**
   ```bash
   npm run build
   npm start
   ```

## Estrutura do Projeto

```
lista-duplamente-encadeada/
├── src/
│   ├── Node.ts              # Classe do nó
│   ├── DoublyLinkedList.ts  # Classe principal
│   └── index.ts             # Arquivo de exemplo
├── package.json             # Configurações do projeto
├── tsconfig.json            # Configuração do TypeScript
├── README.md                # Documentação
└── .gitignore               # Arquivos ignorados pelo Git
```

## Operações Implementadas

✅ Inserção no início da lista  
✅ Inserção no fim da lista  
✅ Inserção em uma posição qualquer da lista  
✅ Remoção no início da lista  
✅ Remoção no fim da lista  
✅ Remoção de uma posição qualquer da lista  
✅ Exibição da lista na ordem normal  
✅ Exibição da lista na ordem inversa  
✅ Verificar se lista está vazia  
✅ Esvaziar a lista  
✅ Exibir o tamanho da lista  

## Exemplo de Saída

Ao executar o projeto, você verá uma demonstração completa de todas as operações:

```
=== LISTA DUPLAMENTE ENCADEADA EM TYPESCRIPT ===

1. TESTANDO OPERAÇÕES BÁSICAS
================================
Lista está vazia? true
Tamanho da lista: 0

2. INSERINDO ELEMENTOS NO INÍCIO
==================================
Após inserir 30, 20, 10 no início:
10 -> 20 -> 30
Tamanho da lista: 3

[... mais saída ...]
```

## Problemas Comuns

**Erro: "npm não é reconhecido"**
- Instale o Node.js primeiro
- Reinicie o terminal após a instalação

**Erro de dependências**
- Execute `npm install` novamente
- Verifique se está no diretório correto do projeto
