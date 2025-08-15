# Análise de Complexidade - Lista Duplamente Encadeada

## Complexidade de Tempo

### Operações O(1) - Constante
- **isEmpty()** - O(1)
  - Apenas verifica se `head` é null
  
- **getSize()** - O(1)
  - Retorna o valor da variável `size` mantida atualizada
  
- **insertAtBeginning()** - O(1)
  - Cria um novo nó e atualiza as referências do head
  
- **insertAtEnd()** - O(1)
  - Cria um novo nó e atualiza as referências do tail
  
- **removeFromBeginning()** - O(1)
  - Remove o primeiro nó e atualiza head
  
- **removeFromEnd()** - O(1)
  - Remove o último nó e atualiza tail
  
- **clear()** - O(1)
  - Apenas redefine head, tail e size como null/0

### Operações O(n) - Linear
- **insertAtPosition()** - O(n)
  - No pior caso, precisa percorrer até a posição n-1
  
- **removeAtPosition()** - O(n)
  - No pior caso, precisa percorrer até a posição n-1
  
- **displayForward()** - O(n)
  - Percorre todos os n elementos da lista
  
- **displayBackward()** - O(n)
  - Percorre todos os n elementos da lista

## Complexidade de Espaço

- **Espaço total**: O(n)
  - Cada nó ocupa espaço constante
  - n nós = O(n) espaço total

- **Espaço por operação**:
  - Inserções: O(1) - apenas um novo nó
  - Remoções: O(1) - apenas liberação de memória
  - Exibições: O(1) - apenas variáveis temporárias

## Vantagens da Lista Duplamente Encadeada

1. **Navegação bidirecional**: Pode percorrer em ambas as direções
2. **Remoção eficiente**: Pode remover um nó sem precisar do nó anterior
3. **Inserção/remoção no fim**: O(1) com referência para tail
4. **Flexibilidade**: Permite inserção/remoção em qualquer posição

## Desvantagens

1. **Mais espaço**: Cada nó precisa de duas referências (prev e next)
2. **Complexidade**: Mais complexa de implementar que lista simples
3. **Manutenção**: Precisa manter referências prev e next consistentes

## Comparação com Outras Estruturas

| Operação | Lista Simples | Lista Dupla | Array |
|----------|---------------|-------------|-------|
| Inserção início | O(1) | O(1) | O(n) |
| Inserção fim | O(n) | O(1) | O(1) |
| Inserção posição | O(n) | O(n) | O(n) |
| Remoção início | O(1) | O(1) | O(n) |
| Remoção fim | O(n) | O(1) | O(1) |
| Acesso posição | O(n) | O(n) | O(1) |
| Busca elemento | O(n) | O(n) | O(n) |

## Casos de Uso Ideais

- **Histórico de navegação**: Voltar/avançar em páginas
- **Player de música**: Próxima/anterior música
- **Editor de texto**: Undo/redo
- **Cache LRU**: Implementação eficiente
- **Filas com prioridade**: Acesso rápido ao início e fim
