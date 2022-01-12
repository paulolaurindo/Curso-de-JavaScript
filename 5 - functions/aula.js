// Verbo + Substantivo

// somarNumeros
// alterarCor
// mudarNome

// Função sem parametros 

// let corSite = 'Azul';

//  function resetarCor(){
//      corSite = "";
//  };

//  console.log(corSite);
//  resetarCor();
//  console.log(corSite);

// Função com parametros

// let corSite = 'Azul';

// function resetarCor(cor){
//     corSite = cor
// };

// console.log(corSite);
// resetarCor("Rosa");
// console.log(corSite)

// Função com mais de um parametros

let corSite = 'Azul'

function resetarCor(cor, tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetarCor('Rosa', ' Escuro');
console.log(corSite);