let aluno = "TiuLiel";
let nota1 = 7.8;
let nota2 = 6.5;

let media = (nota1 + nota2) / 2;

console.log(media);
console.log("-------------------")

let dados = {
    nome: "Manuel",
    idade: 18,
    signo: "Cavalo"
};

console.log(dados.signo);
console.table(dados);
console.log("-------------------")

if(media >=7){
    console.log(`O aluno ${aluno} está aprovado :) `)
} else {
    console.log(`O aluno ${aluno} está reprovado :( `)
}