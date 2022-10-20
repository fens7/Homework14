const list = document.querySelector('.list');
const li = list.querySelectorAll('li');
const passInput = document.querySelector('.pass');

function passValid() {
    const value = passInput.value;
    const oneUpperLetter = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const specChar = new RegExp('(?=.*[-!.,:;?_"()])');
    const minLetters = new RegExp('(?=.{8,})');

    li[0].style.color = oneUpperLetter.test(value) ? 'green' : 'red';
    li[1].style.color = number.test(value) ? 'green' : 'red';
    li[2].style.color = specChar.test(value) ? 'green' : 'red';
    li[3].style.color = minLetters.test(value) ? 'green' : 'red';
}

passInput.oninput = passValid;
