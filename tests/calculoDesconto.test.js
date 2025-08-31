const { calcularDescontoDeUmPedido } = require('../src/calculoDesconto')

const calcularDescontoDeUmPedidoComDeDezPorCentoDeDesconto = (`O valor final do pedido com desconto de 10%, será de R$ ${(calcularDescontoDeUmPedido(100.00, 10.00))}.`);
console.log(calcularDescontoDeUmPedidoComDeDezPorCentoDeDesconto);

const calcularDescontoDeUmPedidoComVintePorCentoDeDesconto = (`O valor final do pedido com desconto de 20%, será de R$ ${(calcularDescontoDeUmPedido(100.00, 20.00))}.`);
console.log(calcularDescontoDeUmPedidoComVintePorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeTrintaPorCentoDeDesconto = (`O valor final do pedido com desconto de 30%, será de R$ ${(calcularDescontoDeUmPedido(100.00, 30.00))}.`);
console.log(calcularDescontoDeUmPedidoComDeTrintaPorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeQuarentePorCentoDeDesconto = (`O valor final do pedido com desconto de 40%, será de R$ ${(calcularDescontoDeUmPedido(100.00, 40.00))}.`);
console.log(calcularDescontoDeUmPedidoComDeQuarentePorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeCinquentePorCentoDeDesconto = (`O valor final do pedido com desconto de 50%, será de R$ ${(calcularDescontoDeUmPedido(100.00, 50.00))}.`);
console.log(calcularDescontoDeUmPedidoComDeCinquentePorCentoDeDesconto);