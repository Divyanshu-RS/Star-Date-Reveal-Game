import cardNumbers from './data.js';

const main = () => {
    const cardListElement = document.querySelector('.card-list');

    for (let index = 5; index >= 1; index--) {
        let cardItemElement = document.createElement('div');
        cardItemElement.classList.add('card-item');
        cardItemElement.setAttribute('data-card', index);
        cardListElement.prepend(cardItemElement);

        cardNumbers[`${index}`].forEach(cardNumber => {
            cardItemElement.innerHTML += `
        <h2>${cardNumber}</h2>
      `;
        });

        let labelInputElement = document.createElement('label');
        let inputCheckBoxElement = document.createElement('input');
        labelInputElement.setAttribute('for', `card${index}`);
        labelInputElement.innerHTML = `If your date of birth is on the card ${index} below, then check the box below`;
        inputCheckBoxElement.setAttribute('id', `card${index}`);
        inputCheckBoxElement.setAttribute('type', 'checkbox');
        inputCheckBoxElement.setAttribute('data-val', cardNumbers[`${index}`][0]);
        cardListElement.prepend(inputCheckBoxElement);
        cardListElement.prepend(labelInputElement);
    }

    const buttonResultClicker = document.querySelector('#checkResult');

    buttonResultClicker.addEventListener('click', () => {
        let card1 = (document.querySelector('input#card1:checked') == null) ? 0 : document.querySelector('input#card1:checked').getAttribute('data-val');
        let card2 = (document.querySelector('input#card2:checked') == null) ? 0 : document.querySelector('input#card2:checked').getAttribute('data-val');
        let card3 = (document.querySelector('input#card3:checked') == null) ? 0 : document.querySelector('input#card3:checked').getAttribute('data-val');
        let card4 = (document.querySelector('input#card4:checked') == null) ? 0 : document.querySelector('input#card4:checked').getAttribute('data-val');
        let card5 = (document.querySelector('input#card5:checked') == null) ? 0 : document.querySelector('input#card5:checked').getAttribute('data-val');

        let result = Number(card1) + Number(card2) + Number(card3) + Number(card4) + Number(card5);
        alert(`your birth date is ${result}`);

        window.location.href = 'index.html';
    });

};

export default main;