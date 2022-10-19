const list = document.querySelector('.list');
const li = list.querySelectorAll('li');
const passInput = document.querySelector('.pass');

function passValid() {
    const value = passInput.value;
    const oneUpperLetter = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const specChar = new RegExp('(?=.*[!@#$%^&*])');
    const minLetters = new RegExp('(?=.{8,})');

    if (oneUpperLetter.test(value)) {
        li[0].style.color = 'green';
    } else {
        li[0].style.color = 'red';
    }

    if (number.test(value)) {
        li[1].style.color = 'green';
    } else {
        li[1].style.color = 'red';
    }

    if (specChar.test(value)) {
        li[2].style.color = 'green';
    } else {
        li[2].style.color = 'red';
    }

    if (minLetters.test(value)) {
        li[3].style.color = 'green';
    } else {
        li[3].style.color = 'red';
    }
}

passInput.oninput = passValid;
