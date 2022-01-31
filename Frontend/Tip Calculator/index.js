var tip = document.getElementById('tip');
var total = document.getElementById('total');
var bill_input = document.getElementById('bill_input');
var number_of_people = document.getElementById('people_input');
var no_zero = document.getElementById('no_zero');
var custom_input = document.getElementById('custom_input');
var tip_boxes = document.querySelectorAll('.not_custom');
var current_active = null;

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

function checkingCustomOrGiven(tip_money) {
    if (custom_input.value) {

        tip_money = bill_input.value * (custom_input.value / 100);
    }
    else {
        tip_boxes.forEach(element => {

            if (element.classList.contains('active')) {
                tip_money = tipCalculate(bill_input.value, element);
            }
        })
    }
    return tip_money
}
// -----------------------BILL SECTION-------------------------------
bill_input.onkeyup = () => {

    var people = getNumberOfPeople() ? getNumberOfPeople() : 1;
    var text_to_write = null;
    var tip_money = 0;
    if (people !== '0') {

        tip_money = checkingCustomOrGiven(tip_money);

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

// -----------------------TIP SECTION-------------------------------


tip_boxes.forEach(element => {
    element.addEventListener('click', e => {
        custom_input.value = null;
        // If bill or people value are not given then our logic will fail

        var bill = getBillValue() ? getBillValue() : 0;
        var people = getNumberOfPeople() ? getNumberOfPeople() : 1;

        if (current_active) {
            current_active.classList.remove('active');
        }
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

// -----------------------CUSTOM TIP SECTION-------------------------------

custom_input.onkeyup = () => {
    if (current_active) {
        current_active.classList.remove('active');
    }
    // If bill or people value are not given then our logic will fail
    var bill = getBillValue() ? getBillValue() : 0;
    var people = getNumberOfPeople() ? getNumberOfPeople() : 1;

    if (bill != 0) {
        var tip_amount = bill * (custom_input.value / 100);
        tip_per_person = tip_amount / people;
        total_amount = Number(bill) + Number(tip_amount);
        total_amount = total_amount / people;
        writeOnScreen(tip, tip_per_person);
        writeOnScreen(total, total_amount);
    }
}

// -----------------------NUMBER OF PEOPLE SECTION-------------------------------

number_of_people.onkeyup = () => {
    var bill = getBillValue();
    // If people is not enter or is 0 logic will fail
    var people = number_of_people.value ? number_of_people.value : 1;
    var tip_text = 0;
    // Checking for 0
    if (number_of_people.value === '0') {
        no_zero.classList.add('active');
        number_of_people.classList.add('active');
    }
    else {
        no_zero.classList.remove('active');
        number_of_people.classList.remove('active');

        // For calculating tip and checking if it's custom or given tip value 
        tip_text = checkingCustomOrGiven(tip_text);

        var text_to_write = (Number(bill) + Number(tip_text)) / people;
        tip_text = tip_text / people
        writeOnScreen(total, text_to_write);
        writeOnScreen(tip, tip_text);
    }

}

// -----------------------RESET SECTION SECTION-------------------------------

function resetButton() {
    bill_input.value = null;
    number_of_people.value = null;
    tip.innerText = '$0.00';
    total.innerText = '$0.00';
    custom_input.value = null;
    if (current_active) {
        current_active.classList.remove('active')
    }
}
