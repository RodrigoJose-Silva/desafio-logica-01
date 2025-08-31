function calcularDescontoDeUmPedido(valorDoPedido, desconto) {
    valorDoPedidoComDesconto = (valorDoPedido - ((valorDoPedido * desconto) / 100));
    return valorDoPedidoComDesconto;
}

module.exports = {
    calcularDescontoDeUmPedido
}