let nome1 = prompt( 'Informe o seu nome:', '' );

let sobrenome1 = prompt( 'Informe o seu sobrenome:', '' );
let idade1 = prompt( 'Informe o sua idade:', '' );
let cor1 = prompt( 'Qual é sua cor favorita?', '')

alert('Obrigado, agora vamos a prencher os dados da segunda pessoa')
let nome2 = prompt( 'Informe o seu nome:', '' );
let sobrenome2 = prompt( 'Informe o seu sobrenome:', '' );
let idade2 = prompt( 'Informe o sua idade:', '' );
let cor2 = prompt( 'Qual é sua cor favorita?', '')


if (idade1 == idade2) {
    console.log( nome1 + " tem: " + idade1 + ' anos' + "\n" + nome2 + " tem: " + idade2 + ' anos' + "\n" + nome1 + " e "+ nome2 + " tem a mesma idade");
} 
if(idade1 > idade2) {
    console.log( nome1 + " tem: " + idade1 + ' anos' + "\n" + nome2 + " tem: " + idade2 + ' anos' + "\n" + nome1 + " é maior que o " + nome2);
}
if(idade1 < idade2) {
    console.log(nome1 + " tem: " + idade1 + ' anos' + "\n" + nome2 + " tem: " + idade2 + ' anos' + "\n" + nome1 + " é menor que o "+ nome2);
}

if(cor1 == cor2) {
    console.log( nome1 + " a cor favorita é: " + cor1 + "\n" + nome2 + " a cor favorita é: " + cor2 + "\n" + nome1 + " e " + nome2 + " gostam da mesma cor");
}
if (cor1 != cor2) {
    console.log( nome1 + " a cor favorita é: " + cor1 + "\n" + nome2 + " a cor favorita é: " + cor2 + "\n");
}