import { DoublyLinkedList } from './DoublyLinkedList';

/**
 * Arquivo principal que demonstra o uso da lista duplamente encadeada
 * Este arquivo contém exemplos de todas as operações implementadas
 */

console.log('=== LISTA DUPLAMENTE ENCADEADA EM TYPESCRIPT ===\n');

// Cria uma nova lista de números
const lista = new DoublyLinkedList<number>();

console.log('1. TESTANDO OPERAÇÕES BÁSICAS');
console.log('================================');

// Verifica se a lista está vazia
console.log(`Lista está vazia? ${lista.isEmpty()}`);
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Insere elementos no início
console.log('\n2. INSERINDO ELEMENTOS NO INÍCIO');
console.log('==================================');
lista.insertAtBeginning(30);
lista.insertAtBeginning(20);
lista.insertAtBeginning(10);

console.log('Após inserir 30, 20, 10 no início:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Insere elementos no fim
console.log('\n3. INSERINDO ELEMENTOS NO FIM');
console.log('===============================');
lista.insertAtEnd(40);
lista.insertAtEnd(50);

console.log('Após inserir 40, 50 no fim:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Insere elementos em posições específicas
console.log('\n4. INSERINDO ELEMENTOS EM POSIÇÕES ESPECÍFICAS');
console.log('================================================');
lista.insertAtPosition(25, 2);  // Insere 25 na posição 2
lista.insertAtPosition(35, 4);  // Insere 35 na posição 4

console.log('Após inserir 25 na posição 2 e 35 na posição 4:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Exibe a lista em ambas as direções
console.log('\n5. EXIBINDO A LISTA EM AMBAS AS DIREÇÕES');
console.log('==========================================');
console.log('Ordem normal (início -> fim):');
lista.displayForward();
console.log('Ordem inversa (fim -> início):');
lista.displayBackward();

// Remove elementos do início
console.log('\n6. REMOVENDO ELEMENTOS DO INÍCIO');
console.log('==================================');
const removidoInicio = lista.removeFromBeginning();
console.log(`Elemento removido do início: ${removidoInicio}`);
console.log('Lista após remoção:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Remove elementos do fim
console.log('\n7. REMOVENDO ELEMENTOS DO FIM');
console.log('==============================');
const removidoFim = lista.removeFromEnd();
console.log(`Elemento removido do fim: ${removidoFim}`);
console.log('Lista após remoção:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Remove elementos de posições específicas
console.log('\n8. REMOVENDO ELEMENTOS DE POSIÇÕES ESPECÍFICAS');
console.log('================================================');
const removidoPosicao = lista.removeAtPosition(2);
console.log(`Elemento removido da posição 2: ${removidoPosicao}`);
console.log('Lista após remoção:');
lista.displayForward();
console.log(`Tamanho da lista: ${lista.getSize()}`);

// Testa tratamento de erros
console.log('\n9. TESTANDO TRATAMENTO DE ERROS');
console.log('=================================');
try {
    lista.insertAtPosition(100, 10); // Posição inválida
} catch (error) {
    console.log(`Erro ao inserir: ${error}`);
}

try {
    lista.removeAtPosition(10); // Posição inválida
} catch (error) {
    console.log(`Erro ao remover: ${error}`);
}

// Testa remoção de lista vazia
console.log('\n10. TESTANDO REMOÇÃO DE LISTA VAZIA');
console.log('====================================');
const listaVazia = new DoublyLinkedList<number>();
console.log(`Removendo do início de lista vazia: ${listaVazia.removeFromBeginning()}`);
console.log(`Removendo do fim de lista vazia: ${listaVazia.removeFromEnd()}`);

// Esvazia a lista
console.log('\n11. ESVAZIANDO A LISTA');
console.log('=======================');
console.log('Antes de esvaziar:');
lista.displayForward();
console.log(`Tamanho: ${lista.getSize()}`);

lista.clear();

console.log('Após esvaziar:');
lista.displayForward();
console.log(`Tamanho: ${lista.getSize()}`);
console.log(`Lista está vazia? ${lista.isEmpty()}`);

// Exemplo com strings
console.log('\n12. EXEMPLO COM LISTA DE STRINGS');
console.log('==================================');
const listaStrings = new DoublyLinkedList<string>();

listaStrings.insertAtBeginning('c');
listaStrings.insertAtBeginning('b');
listaStrings.insertAtBeginning('a');
listaStrings.insertAtEnd('d');
listaStrings.insertAtEnd('e');

console.log('Lista de strings:');
listaStrings.displayForward();
console.log(`Tamanho: ${listaStrings.getSize()}`);

console.log('\n=== FIM DOS TESTES ===');
