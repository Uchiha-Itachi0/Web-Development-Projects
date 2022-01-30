var tip = document.getElementById('tip');
var total = document.getElementById('total');
var bill_input = document.getElementById('bill_input');
var number_of_people = document.getElementById('people_input');
var no_zero = document.getElementById('no_zero');
var tip_boxes = document.querySelectorAll('.not_custom');
var current_active = document.querySelector('.not_custom.active')
var tip_persentage = 0;

function getBillValue() {
    return bill_input.value;
}

function getNumberOfPeople() {
    return number_of_people.value;
}

function writeOnScreen(board, text_to_write) {
    board.innerText = '$' + text_to_write.toFixed(2);
}

function tipCalculate(bill, tip_persentage) {
    tip_persentage = tip_persentage.innerText.split('%')[0];
    return bill * (tip_persentage / 100);
}

bill_input.onkeyup = () => {

    var people = getNumberOfPeople() ? getNumberOfPeople() : 1;
    var text_to_write = null;
    if (people !== '0') {
        tip_boxes.forEach(element => {
            if (element.classList.contains('active')) {
                tip_money = tipCalculate(bill_input.value, element);
            }
        })
        text_to_write = bill_input.value ? (Number(bill_input.value) + Number(tip_money)) / people : 0;
        tip_money = tip_money / people
        writeOnScreen(total, text_to_write);
        writeOnScreen(tip, tip_money)
    }
    else {
        text_to_write = 0;
        writeOnScreen(total, text_to_write);
    }

}

tip_boxes.forEach(element => {
    element.addEventListener('click', e => {
        var bill = getBillValue() ? getBillValue() : 0;
        var people = getNumberOfPeople() ? getNumberOfPeople() : 1;
        current_active.classList.remove('active');
        e.target.classList.add('active');

        if (bill != 0) {
            tip_amount = tipCalculate(bill, e.target);
            tip_per_person = tip_amount / people;
            total_amount = Number(bill) + Number(tip_amount);
            total_amount = total_amount / people;
            writeOnScreen(tip, tip_per_person);
            writeOnScreen(total, total_amount);
        }

        current_active = e.target;


    })
})

number_of_people.onkeyup = () => {
    var bill = getBillValue();
    var people = number_of_people.value ? number_of_people.value : 1;
    if (number_of_people.value === '0') {
        no_zero.classList.add('active');
        number_of_people.classList.add('active');
    }
    else {
        no_zero.classList.remove('active');
        number_of_people.classList.remove('active');
        tip_boxes.forEach(element => {
            if (element.classList.contains('active')) {
                tip_text = tipCalculate(bill, element);
            }
        })
        var text_to_write = (Number(bill) + Number(tip_text)) / people;
        tip_text = tip_text / people
        writeOnScreen(total, text_to_write);
        writeOnScreen(tip, tip_text);
    }

}

function resetButton(){
    bill_input.value = null;
    number_of_people.value = null;
    tip.innerText = '$0.00';
    total.innerText = '$0.00';
}
