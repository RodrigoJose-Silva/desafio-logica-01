const { calcularDescontoDeUmPedido } = require('../src/calculoDesconto')

const calcularDescontoDeUmPedidoComDeDezPorCentoDeDesconto = calcularDescontoDeUmPedido(100.00, 10.00);
console.log(calcularDescontoDeUmPedidoComDeDezPorCentoDeDesconto);

const calcularDescontoDeUmPedidoComVintePorCentoDeDesconto = calcularDescontoDeUmPedido(100.00, 20.00);
console.log(calcularDescontoDeUmPedidoComVintePorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeTrintaPorCentoDeDesconto = calcularDescontoDeUmPedido(100.00, 30.00);
console.log(calcularDescontoDeUmPedidoComDeTrintaPorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeQuarentePorCentoDeDesconto = calcularDescontoDeUmPedido(100.00, 40.00);
console.log(calcularDescontoDeUmPedidoComDeQuarentePorCentoDeDesconto);

const calcularDescontoDeUmPedidoComDeCinquentePorCentoDeDesconto = calcularDescontoDeUmPedido(100.00, 50.00);
console.log(calcularDescontoDeUmPedidoComDeCinquentePorCentoDeDesconto);