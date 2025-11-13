// CRIE UMA LÓGICA ABAIXO
let filme1 = {
    titulo: "Barbie",
    genero: "Comédia/Fantasia",
    ano: 2023,
    avaliacao: 7.0
}

let filme2 = {
    titulo: "Moana",
    genero: "Animação/Aventura",
    ano: 2016,
    avaliacao: 7.6
}

let filme3 = {
    titulo: "Frozen",
    genero: "Animação/Musical",
    ano: 2013,
    avaliacao: 7.4
}

let filme4 = {
    titulo: "Tangled (Rapunzel)",
    genero: "Animação/Fantasia",
    ano: 2010,
    avaliacao: 7.7
}

let filme5 = {
    titulo: "The Little Mermaid (A Pequena Sereia)",
    genero: "Fantasia/Romance",
    ano: 2023,
    avaliacao: 7.2
}

let filme6 = {
    titulo: "Inside Out (Divertidamente)",
    genero: "Animação/Drama",
    ano: 2015,
    avaliacao: 8.1
}

let filme7 = {
    titulo: "Encanto",
    genero: "Animação/Musical",
    ano: 2021,
    avaliacao: 7.3
}

let filme8 = {
    titulo: "Cinderella",
    genero: "Animação/Fantasia",
    ano: 1950,
    avaliacao: 7.3
}

let filme9 = {
    titulo: "Snow White and the Seven Dwarfs (Branca de Neve)",
    genero: "Animação/Fantasia",
    ano: 1937,
    avaliacao: 7.6
}

let filme10 = {
    titulo: "101 Dalmatians (A Guerra dos Dálmatas)",
    genero: "Animação/Aventura",
    ano: 1961,
    avaliacao: 7.2
}
let filme = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

let total = 0 
for(let i = 0; i < filme.length; i++){
    total += filme[i].avaliacao
}
for(let i = 0; i < filme.length; i++){
    console.log(i + 1, filme[i].titulo )
}
let media = total / filme.length
console.log("Filme mais bem avaliado:" + filme6.ano)
console.log(`Média geral das avaliações: ${media.toFixed(2)}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }