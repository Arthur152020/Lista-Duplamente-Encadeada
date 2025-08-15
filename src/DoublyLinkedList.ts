import { Node } from './Node';

/**
 * Classe que implementa uma lista duplamente encadeada
 * Uma lista duplamente encadeada permite navegação em ambas as direções
 */
export class DoublyLinkedList<T> {
    // Referência para o primeiro nó da lista
    private head: Node<T> | null;
    
    // Referência para o último nó da lista
    private tail: Node<T> | null;
    
    // Número de elementos na lista
    private size: number;

    /**
     * Construtor da classe DoublyLinkedList
     * Inicializa uma lista vazia
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Verifica se a lista está vazia
     * @returns true se a lista estiver vazia, false caso contrário
     */
    public isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Retorna o tamanho atual da lista
     * @returns Número de elementos na lista
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Insere um elemento no início da lista
     * @param data - Valor a ser inserido
     */
    public insertAtBeginning(data: T): void {
        // Cria um novo nó
        const newNode = new Node<T>(data);

        // Se a lista estiver vazia, o novo nó será tanto head quanto tail
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Caso contrário, insere no início
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    /**
     * Insere um elemento no fim da lista
     * @param data - Valor a ser inserido
     */
    public insertAtEnd(data: T): void {
        // Cria um novo nó
        const newNode = new Node<T>(data);

        // Se a lista estiver vazia, o novo nó será tanto head quanto tail
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Caso contrário, insere no fim
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * Insere um elemento em uma posição específica da lista
     * @param data - Valor a ser inserido
     * @param position - Posição onde inserir (0 é o início)
     */
    public insertAtPosition(data: T, position: number): void {
        // Valida a posição
        if (position < 0 || position > this.size) {
            throw new Error('Posição inválida');
        }

        // Se a posição for 0, insere no início
        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        // Se a posição for igual ao tamanho, insere no fim
        if (position === this.size) {
            this.insertAtEnd(data);
            return;
        }

        // Cria um novo nó
        const newNode = new Node<T>(data);
        
        // Encontra o nó na posição desejada
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current!.next;
        }

        // Insere o novo nó antes do nó atual
        newNode.prev = current!.prev;
        newNode.next = current;
        current!.prev!.next = newNode;
        current!.prev = newNode;

        this.size++;
    }

    /**
     * Remove o elemento do início da lista
     * @returns O valor removido
     */
    public removeFromBeginning(): T | null {
        // Se a lista estiver vazia, retorna null
        if (this.isEmpty()) {
            return null;
        }

        const removedData = this.head!.data;

        // Se houver apenas um elemento
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            // Remove o primeiro elemento
            this.head = this.head!.next;
            this.head!.prev = null;
        }

        this.size--;
        return removedData;
    }

    /**
     * Remove o elemento do fim da lista
     * @returns O valor removido
     */
    public removeFromEnd(): T | null {
        // Se a lista estiver vazia, retorna null
        if (this.isEmpty()) {
            return null;
        }

        const removedData = this.tail!.data;

        // Se houver apenas um elemento
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            // Remove o último elemento
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }

        this.size--;
        return removedData;
    }

    /**
     * Remove o elemento de uma posição específica da lista
     * @param position - Posição do elemento a ser removido (0 é o início)
     * @returns O valor removido
     */
    public removeAtPosition(position: number): T | null {
        // Valida a posição
        if (position < 0 || position >= this.size) {
            throw new Error('Posição inválida');
        }

        // Se a posição for 0, remove do início
        if (position === 0) {
            return this.removeFromBeginning();
        }

        // Se a posição for a última, remove do fim
        if (position === this.size - 1) {
            return this.removeFromEnd();
        }

        // Encontra o nó na posição desejada
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current!.next;
        }

        // Remove o nó atual
        const removedData = current!.data;
        current!.prev!.next = current!.next;
        current!.next!.prev = current!.prev;

        this.size--;
        return removedData;
    }

    /**
     * Exibe a lista na ordem normal (do início ao fim)
     */
    public displayForward(): void {
        if (this.isEmpty()) {
            console.log('Lista vazia');
            return;
        }

        let current = this.head;
        let result = '';
        
        while (current !== null) {
            result += current.data;
            if (current.next !== null) {
                result += ' -> ';
            }
            current = current.next;
        }

        console.log(result);
    }

    /**
     * Exibe a lista na ordem inversa (do fim ao início)
     */
    public displayBackward(): void {
        if (this.isEmpty()) {
            console.log('Lista vazia');
            return;
        }

        let current = this.tail;
        let result = '';
        
        while (current !== null) {
            result += current.data;
            if (current.prev !== null) {
                result += ' -> ';
            }
            current = current.prev;
        }

        console.log(result);
    }

    /**
     * Esvazia a lista, removendo todos os elementos
     */
    public clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Retorna uma representação em string da lista
     * @returns String representando a lista
     */
    public toString(): string {
        if (this.isEmpty()) {
            return 'Lista vazia';
        }

        let current = this.head;
        let result = '';
        
        while (current !== null) {
            result += current.data;
            if (current.next !== null) {
                result += ' -> ';
            }
            current = current.next;
        }

        return result;
    }
}
