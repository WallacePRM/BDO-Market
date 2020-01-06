
var soma = 0;

function calculatePrice() {

    var result;
    var priceItem = soma; //$('[name="price-item"]').val();
    var condition = $('[name="condition"]')[0].checked;

    if (isNaN(priceItem)) {
        $('[name="price-item"]').css('border-bottom', '1px solid #FE3B37');
    }
    else {
        $('[name="price-item"]').css('border', '');

        if (condition) {
            result = (priceItem * 5) / 100;
        }
        else {
            result = (priceItem * 35) / 100;
        }

        result = priceItem - result;

        $('.result').html(formatterString(result));
    }
}

function formatterString(str) {

    var number = ('' + str).replace('.', ',');
    
    if (str < 1000)
        return number;

    var number2 = '';   
    var count = 1;

    for (var i = number.length - 1; i >= 0; i--) {

        number2 = number[i] + number2;

        if (number[i] === ',')
            count = 0;

        if (count === 3 && i !== 0) {

            number2 = '.' + number2;
            count = 0;
        }
        
        count++;
    }

    return number2;
}

function addOtherItem() {

    // pegar o valor
    var priceItem = parseFloat($('[name="price-item"]').val());
    // limpar o input
    $('[name="price-item"]').val('');
    // somar o valor obtido com o valor atual
    soma = priceItem + soma;

    calculatePrice(soma)
}

function priceItemKeyPress(event) {
    if (event.keyCode === 13) {
        addOtherItem();
    }
}

function resetTotal() {
    $('.result').html('');
    soma = 0;
}