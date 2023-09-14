import chalk from 'chalk'; // importação do módulo instalado

console.log("Gerenciamento de pacotes");

let aluno = 'TiuLiel'
let idade = 15;

if(idade >= 32) {
    console.log(`${aluno} ${chalk.blue('é maior de idade')}`);
} else {
    console.log(chalk.bgRedBright(`${aluno}  é menor de idade`));
};

//console.log(chalk.blue('Hello world!'));