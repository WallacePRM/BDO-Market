
function calcularPreco() {
    var resultado;
    var valorItem = parseFloat($('[name="valor-item"]').val());
    var condicao = $('[name="pacote-economico"]').val();

    if (isNaN(valorItem)) {
        $('[name="valor-item"]').css('border-bottom', '1px solid #FE3B37');
    }
    else {
        $('[name="valor-item"]').css('border', '');

        if (condicao === 'SIM') {
        resultado = (valorItem * 35) / 100;
        }
        else {
            resultado = (valorItem * 5) / 100;
        }

        resultado = valorItem - resultado;
        alert(resultado);
    }
}