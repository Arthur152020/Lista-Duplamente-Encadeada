# Lista Duplamente Encadeada em TypeScript

Este projeto implementa uma lista duplamente encadeada em TypeScript com todas as operações básicas de manipulação.

## Estrutura do Projeto

```
src/
├── Node.ts          # Classe que representa um nó da lista
├── DoublyLinkedList.ts  # Classe principal da lista duplamente encadeada
└── index.ts         # Arquivo principal com exemplos de uso
```

## Operações Implementadas

- ✅ Inserção no início da lista
- ✅ Inserção no fim da lista  
- ✅ Inserção em uma posição qualquer da lista
- ✅ Remoção no início da lista
- ✅ Remoção no fim da lista
- ✅ Remoção de uma posição qualquer da lista
- ✅ Exibição da lista na ordem normal
- ✅ Exibição da lista na ordem inversa
- ✅ Verificar se lista está vazia
- ✅ Esvaziar a lista
- ✅ Exibir o tamanho da lista

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Ou compile e execute:
```bash
npm run build
npm start
```

## Exemplo de Uso

```typescript
const lista = new DoublyLinkedList<number>();

// Inserções
lista.insertAtBeginning(10);
lista.insertAtEnd(20);
lista.insertAtPosition(15, 1);

// Exibições
lista.displayForward();  // Mostra: 10 -> 15 -> 20
lista.displayBackward(); // Mostra: 20 -> 15 -> 10

// Remoções
lista.removeFromBeginning();
lista.removeFromEnd();
lista.removeAtPosition(0);
```

## Complexidade das Operações

- Inserção/Remoção no início: O(1)
- Inserção/Remoção no fim: O(1) 
- Inserção/Remoção em posição específica: O(n)
- Busca por posição: O(n)
- Verificar se está vazia: O(1)
- Obter tamanho: O(1)
