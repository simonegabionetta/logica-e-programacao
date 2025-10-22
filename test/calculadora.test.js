const { somarDoisNumeros } = require('../src/calculadora');
const {expect} = require ('chai');

describe('Testes da função de Soma', function(){ 
    it('A função deve ser capaz de somar dois números positivos', function(){
        //coleta o resultado fa função
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        //compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.be.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um número negativo', function(){
        //coleta o resultado fa função
        const resultadoDaSoma = somarDoisNumeros(50, -15);
        //compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.be.equal(35);
    });
});


