/*
let num = [2, 4, 5]
num[3] = 9 // vai adicionar o elemento 9 no indice 3
num.push(7) // vai adicionar um indice no fim do array com seu elemento desejado
num.length // vai mostrar o comprimento da variavel
num.sort() // vai colocar em ordem crescente o array
num.indexOf(7) // vai buscar o valor 7 dentro do vetor, ele vai responder a possição dele na lista, se não tiver vai retornar -1
console.log(`Nosso vetor é ${num}`) 


let valores = [0, 5, 6, 7, 2, 9]

for (let pos = 0; pos < valores.length; pos ++) {
    valores.sort()
    console.log(`os valores são ${valores[pos]}`)
}
*/
let num = [0, 5, 6, 7, 2, 9]

for (let pos in num) {
    console.log(`os valores são ${num[pos]} nas posiçoes ${pos}`)
}