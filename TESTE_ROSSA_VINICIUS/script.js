var nome = prompt("Qual seu nome? ");
var idade = prompt("Qual sua idade? ");


if (idade !== '') {
    
    var idadeNumero = parseInt(idade);
    

    var ano = 2025 - idadeNumero;
    
    console.log("Olá " + nome + " você tem " + idade + " anos e nasceu em " + ano);
    
    
    document.write("Bem vindo " + nome + " você tem " + idade + " anos e nasceu em " + ano);
} else {
    console.log("Por favor, digite sua idade.");
    document.write("Por favor, digite sua idade.");
}
