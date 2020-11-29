// WebFont.load({
//     google: {
//         families: ['Poppins']
//     }
// });



const form = document.getElementById('form');
let name = document.getElementById('name');
const num = document.getElementById('num');
const expdate = document.getElementById('expdate');
const cvv = document.getElementById('cvv');
const small = document.querySelector('small');

name.innerHTML = name.value.toUpperCase()

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const nameValue = name.value.trim();
    const numValue = num.value.trim();
    const cvvValue = cvv.value.trim();
    const expdateValue = expdate.value.trim();
    // const destinationValue = destination.value.trim();

    if (nameValue === '') {
        showError(name, "Please fill out this field!");
    }
    else if (!isname(nameValue)) {
        showError(name, "Not Valid!")
    }
    else {
        // name.innerHTML = name.value.toUpperCase();
        showSuccess(name);
    }


    if (numValue === '') {
        showError(num, "Please fill out this field!");
    }
    else if (!isNumValid(numValue)) {
        showError(num, "Not Valid!")
    }
    else {
        showSuccess(num);
    }


    if (expdateValue === '') {
        showError(expdate, "Please fill out this field!");
    }

    else {
        showSuccess(expdate);
    }

    if (cvvValue === '') {
        // cvv.style.border = "2px solid red";
        showError(cvv, "Please fill out this field!");
    }
    else if (!isCvvValid(cvvValue)) {
        showError(cvv, "Not Valid!")
    }
    else {
        // cvv.style.border = "2px solid green";
        showSuccess(cvv);
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

// function isEmailValid(email) {
//     return /^[a-zA-Z\-]+[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(email);
// }

function isname(name) {
    return /^[a-zA-Z \-]+$/.test(name);
}

function isNumValid(num) {
    return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/.test(num);
}
function isCvvValid(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
}


function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}



var pay = document.getElementById("payment")
var money = localStorage.getItem('Payment')

pay.innerHTML = "Rs " + money + "/-";



function validateMyForm() {
    if (!((name.parentNode.className == 'form-control success') && (num.parentNode.className == 'form-control success') && (expdate.parentNode.className == 'form-control success') && (cvv.parentNode.className == 'form-control success'))) {
        returnToPreviousPage();
        return false;
    }


    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "PrintPass.html";
    }
}