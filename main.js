let leftlen = document.querySelector('#left-len');
let rightlen = document.querySelector('#right-len');
let leftdrop = document.querySelector('#left-drop');
let rightdrop = document.querySelector('#right-drop');
let leftlist;
let rightlist;
let weight_input = document.querySelector('#left-weight');
let weight_output = document.querySelector('#right-weight');
let left_weight_drop = document.querySelector('#left-drop-weight');
let right_weight_drop = document.querySelector('#right-drop-weight');
let leftweight_value;
let rightweight_value;

let time_input = document.querySelector('#left-time');
let time_output = document.querySelector('#right-time');
let left_time_drop = document.querySelector('#left-drop-time');
let right_time_drop = document.querySelector('#right-drop-time');
let lefttime_value;
let righttime_value;

leftlen.addEventListener('keyup', calc);
leftdrop.addEventListener('change', calc);
rightdrop.addEventListener('change', calc);

weight_input.addEventListener('keyup', weight);
left_weight_drop.addEventListener('change', weight);
right_weight_drop.addEventListener('change', weight);

time_input.addEventListener('keyup', time);
left_time_drop.addEventListener('change', time);
right_time_drop.addEventListener('change', time);
// leftlist = leftdrop.value;
// rightlist = rightdrop.value;
// console.log(leftlist);
// console.log(rightlist);

function calc() {

    leftlist = leftdrop.value;
    rightlist = rightdrop.value;


    if (leftlist === 'Centimeters' && rightlist === 'Centimeters') {
        rightlen.value = leftlen.value;
    } else if (leftlist === 'Centimeters' && rightlist === 'Meters') {
        rightlen.value = (leftlen.value) / 100;
    } else if (leftlist === 'Centimeters' && rightlist === 'Kilometers') {
        rightlen.value = (leftlen.value) / 100000;
    } else if (leftlist === 'Centimeters' && rightlist === 'Inches') {
        rightlen.value = (leftlen.value) / 2.54;
    }



    if (leftlist === 'Meters' && rightlist === 'Meters') {
        rightlen.value = leftlen.value;
    } else if (leftlist === 'Meters' && rightlist === 'Centimeters') {
        rightlen.value = (leftlen.value) * 100;
    } else if (leftlist === 'Meters' && rightlist === 'Kilometers') {
        rightlen.value = (leftlen.value) / 1000;
    } else if (leftlist === 'Meters' && rightlist === 'Inches') {
        rightlen.value = (leftlen.value) * 39.37;
    }

    if (leftlist === 'Kilometers' && rightlist === 'Kilometers') {
        rightlen.value = leftlen.value;
    } else if (leftlist === 'Kilometers' && rightlist === 'Centimeters') {
        rightlen.value = (leftlen.value) * 100000;
    } else if (leftlist === 'Kilometers' && rightlist === 'Meters') {
        rightlen.value = (leftlen.value) * 1000;
    } else if (leftlist === 'Kilometers' && rightlist === 'Inches') {
        rightlen.value = (leftlen.value) * 39370;
    }

    if (leftlist === 'Inches' && rightlist === 'Inches') {
        rightlen.value = leftlen.value;
    } else if (leftlist === 'Inches' && rightlist === 'Centimeters') {
        rightlen.value = (leftlen.value) * 2.54;
    } else if (leftlist === 'Inches' && rightlist === 'Meters') {
        rightlen.value = (leftlen.value) / 39.37;
    } else if (leftlist === 'Inches' && rightlist === 'Kilometers') {
        rightlen.value = (leftlen.value) / 39370;
    }
}

function weight() {
    leftweight_value = left_weight_drop.value;
    rightweight_value = right_weight_drop.value;

    if (leftweight_value === 'kilograms' && rightweight_value === 'kilograms') {
        weight_output.value = weight_input.value;
    } else if (leftweight_value === 'kilograms' && rightweight_value === 'grams') {
        weight_output.value = weight_input.value * 1000;
    } else if (leftweight_value === 'kilograms' && rightweight_value === 'pounds') {
        weight_output.value = weight_input.value * 2.205;
    } else if (leftweight_value === 'kilograms' && rightweight_value === 'tons') {
        weight_output.value = (weight_input.value) / 1000;
    }

    if (leftweight_value === 'grams' && rightweight_value === 'grams') {
        weight_output.value = weight_input.value;
    } else if (leftweight_value === 'grams' && rightweight_value === 'kilograms') {
        weight_output.value = weight_input.value / 1000;
    } else if (leftweight_value === 'grams' && rightweight_value === 'pounds') {
        weight_output.value = weight_input.value / 453.6;
    } else if (leftweight_value === 'grams' && rightweight_value === 'tons') {
        weight_output.value = (weight_input.value) / 1000000;
    }

    if (leftweight_value === 'pounds' && rightweight_value === 'pounds') {
        weight_output.value = weight_input.value;
    } else if (leftweight_value === 'pounds' && rightweight_value === 'grams') {
        weight_output.value = weight_input.value * 453.6;
    } else if (leftweight_value === 'pounds' && rightweight_value === 'kilograms') {
        weight_output.value = weight_input.value / 2.205;
    } else if (leftweight_value === 'pounds' && rightweight_value === 'tons') {
        weight_output.value = (weight_input.value) / 2205;
    }

    if (leftweight_value === 'tons' && rightweight_value === 'tons') {
        weight_output.value = weight_input.value;
    } else if (leftweight_value === 'tons' && rightweight_value === 'grams') {
        weight_output.value = weight_input.value * 1000000;
    } else if (leftweight_value === 'tons' && rightweight_value === 'kilograms') {
        weight_output.value = weight_input.value * 1000;
    } else if (leftweight_value === 'tons' && rightweight_value === 'pounds') {
        weight_output.value = (weight_input.value) * 2205;
    }
}

function time() {
    lefttime_value = left_time_drop.value;
    righttime_value = right_time_drop.value;

    // time_output.value = time_input.value;
    if (lefttime_value === 'Seconds' && righttime_value === 'Seconds') {
        time_output.value = time_input.value;
    } else if (lefttime_value === 'Seconds' && righttime_value === 'Milliseconds') {
        time_output.value = time_input.value * 1000;
    } else if (lefttime_value === 'Seconds' && righttime_value === 'Minutes') {
        time_output.value = time_input.value / 60;
    } else if (lefttime_value === 'Seconds' && righttime_value === 'Hours') {
        time_output.value = time_input.value / 3600;
    } else if (lefttime_value === 'Seconds' && righttime_value === 'Days') {
        time_output.value = time_input.value / 86400;
    }

    if (lefttime_value === 'Milliseconds' && righttime_value === 'Milliseconds') {
        time_output.value = time_input.value;
    } else if (lefttime_value === 'Milliseconds' && righttime_value === 'Seconds') {
        time_output.value = time_input.value / 1000;
    } else if (lefttime_value === 'Milliseconds' && righttime_value === 'Minutes') {
        time_output.value = time_input.value / 60000;
    } else if (lefttime_value === 'Milliseconds' && righttime_value === 'Hours') {
        time_output.value = time_input.value / 3600000;
    } else if (lefttime_value === 'Milliseconds' && righttime_value === 'Days') {
        time_output.value = time_input.value / 86400000;
    }


    if (lefttime_value === 'Minutes' && righttime_value === 'Minutes') {
        time_output.value = time_input.value;
    } else if (lefttime_value === 'Minutes' && righttime_value === 'Milliseconds') {
        time_output.value = time_input.value * 60000;
    } else if (lefttime_value === 'Minutes' && righttime_value === 'Seconds') {
        time_output.value = time_input.value * 60;
    } else if (lefttime_value === 'Minutes' && righttime_value === 'Hours') {
        time_output.value = time_input.value / 60;
    } else if (lefttime_value === 'Minutes' && righttime_value === 'Days') {
        time_output.value = time_input.value / 1440;
    }


    if (lefttime_value === 'Hours' && righttime_value === 'Hours') {
        time_output.value = time_input.value;
    } else if (lefttime_value === 'Hours' && righttime_value === 'Milliseconds') {
        time_output.value = time_input.value * 3600000;
    } else if (lefttime_value === 'Hours' && righttime_value === 'Minutes') {
        time_output.value = time_input.value * 60;
    } else if (lefttime_value === 'Hours' && righttime_value === 'Seconds') {
        time_output.value = time_input.value * 3600;
    } else if (lefttime_value === 'Hours' && righttime_value === 'Days') {
        time_output.value = time_input.value / 24;
    }


    if (lefttime_value === 'Days' && righttime_value === 'Days') {
        time_output.value = time_input.value;
    } else if (lefttime_value === 'Days' && righttime_value === 'Milliseconds') {
        time_output.value = time_input.value * 86400000;
    } else if (lefttime_value === 'Days' && righttime_value === 'Minutes') {
        time_output.value = time_input.value * 1440;
    } else if (lefttime_value === 'Days' && righttime_value === 'Hours') {
        time_output.value = time_input.value * 24;
    } else if (lefttime_value === 'Days' && righttime_value === 'Seconds') {
        time_output.value = time_input.value * 86400;
    }
}