// Método usando map() para duplicar cada elemento del arreglo
const duplicarElementos = arr => arr.map(item => item * 2);

// Método usando forEach() para imprimir cada elemento del arreglo
const imprimirElementos = arr => arr.forEach(item => console.log(item));

// Método usando splice() para eliminar elementos pares del arreglo
const removeStringsFromArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'string') {
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Método usando includes() para verificar si un elemento existe en el arreglo
const containsElement = (arr, element) => arr.includes(element);

// Ejemplo de uso de las funciones
let Elementos = [5, 15, 30, 60, 120, "Carro", "Camisa"];

console.log("Duplicar elementos:", duplicarElementos (Elementos)); // [10, 30, 60, 120, 240]

console.log("\nImprimir elementos:");
imprimirElementos(Elementos); // Imprime cada elemento del arreglo

console.log("\nEliminar 'string':");
console.log(removeStringsFromArray(Elementos)); // Elimina números pares del arreglo original

console.log("\nVerificar si 60 está en el arreglo:", containsElement(Elementos, 60)); // true
console.log("Verificar si 100 está en el arreglo:", containsElement(Elementos, 100)); // false
