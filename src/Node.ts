/**
 * Classe que representa um nó da lista duplamente encadeada
 * Cada nó contém um valor e referências para o nó anterior e próximo
 */
export class Node<T> {
    // Valor armazenado no nó
    public data: T;
    
    // Referência para o nó anterior
    public prev: Node<T> | null;
    
    // Referência para o próximo nó
    public next: Node<T> | null;

    /**
     * Construtor da classe Node
     * @param data - Valor a ser armazenado no nó
     */
    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
